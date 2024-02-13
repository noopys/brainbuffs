const OpenAI = require("openai");

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: "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",
});

exports.handler = async (event) => {
  try {
    // Parse the incoming event to get the user's question
    // Assuming the question is sent as a query string parameter or part of the body in a POST request
    const userQuestion = event.queryStringParameters?.question || JSON.parse(event.body)?.question;
    const threadId = event.queryStringParameters?.threadId || JSON.parse(event.body)?.threadId;

    // Create an assistant
    const assistantResponse = await openai.beta.assistants.create({
      name: "SAT Tutor",
      instructions: "As an SAT tutor GPT, your main objective is not to directly provide answers but to guide students towards understanding SAT questions better on their own. When a student submits a question and their answer, if incorrect, you engage them by: 1. Asking probing questions to better understand their thought process and to identify gaps in their understanding. 2. Guiding them through the question by breaking it down into more manageable parts, aiming to lead them to the correct answer through improved comprehension and reasoning, within 2-3 exchanges. Your interactions should be encouraging, focusing on building the student's confidence and problem-solving skills please use concise answers. No more than a sentence per output",
      model: "gpt-4-1106-preview",
    });

    let threadResponse;
    // Create a new thread if threadId is empty
    if (!threadId) {
      threadResponse = await openai.beta.threads.create();
    } else {
      threadResponse = { id: threadId }; // Use the provided threadId
    }

    // Add the user's question to the thread
    await openai.beta.threads.messages.create(threadResponse.id, {
      role: "user",
      content: userQuestion,
    });

    // Run the assistant to process the user's question
    const runResponse = await openai.beta.threads.runs.create(threadResponse.id, {
      assistant_id: assistantResponse.id,
    });

    // Retrieve the run status and wait for completion (simplified for Lambda)
    let runStatus = await openai.beta.threads.runs.retrieve(threadResponse.id, runResponse.id);
    while (runStatus.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        runStatus = await openai.beta.threads.runs.retrieve(threadResponse.id, runResponse.id);
     }

    // Retrieve the messages, assuming the run completes quickly
    const messages = await openai.beta.threads.messages.list(threadResponse.id);

    // Find the last assistant message
    const lastMessageForRun = messages.data
      .filter(message => message.run_id === runResponse.id && message.role === "assistant")
      .pop();

    // Prepare the response
    let responseBody = "No response from assistant.";
    if (lastMessageForRun) {
      responseBody = lastMessageForRun.content[0].text.value;
    }

    return {
      statusCode: 200,
      headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
      body: JSON.stringify({ answer: responseBody, threadId: threadResponse.id }),
  };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process the request." }),
    };
  }
};
