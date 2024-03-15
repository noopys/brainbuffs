// ES6 Modules syntax for exporting
export async function sendMessageToAI(userInput) {
    const apiEndpoint = 'https://vwbn1svuug.execute-api.us-west-2.amazonaws.com/invokeAIAssistant-staging';
    
    let threadId = sessionStorage.getItem('threadId');
    if (threadId === "undefined" || threadId === null) {
      threadId = null;
    }
  
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: userInput,
        threadId: threadId
      })
    };
  
    try {
      const response = await fetch(apiEndpoint, fetchOptions);
      const data = await response.json();
      
      if (data.threadId && data.threadId !== threadId) {
        sessionStorage.setItem('threadId', data.threadId);
      }
  
      return data;
    } catch (error) {
      console.error('Error calling the API:', error);
      throw error;
    }
  }
  