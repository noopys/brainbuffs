import axios from 'axios';

// ES6 Modules syntax for exporting
export async function sendMessageToAI(userInput) {
  const apiEndpoint = 'https://vwbn1svuug.execute-api.us-west-2.amazonaws.com/invokeAIAssistant-staging';
  
  let threadId = sessionStorage.getItem('threadId');
  if (threadId === "undefined" || threadId === null) {
    threadId = null;
  }

  try {
    const response = await axios.post(apiEndpoint, {
      question: userInput,
      threadId: threadId
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = response.data;
    
    if (data.threadId && data.threadId !== threadId) {
      sessionStorage.setItem('threadId', data.threadId);
    }

    return data;
  } catch (error) {
    console.error('Error calling the API:', error);
    throw error;
  }
}
