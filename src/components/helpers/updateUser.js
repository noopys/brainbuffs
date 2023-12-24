export const updateUser = async (userId, question, selectedOption) => {
  console.log(userId, question, selectedOption);

  const data = {
      userId: userId,
      question: question,
      selectedOption: selectedOption
  };

  try {
      const response = await fetch('https://fm407nxajh.execute-api.us-west-2.amazonaws.com/updateUser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Update response:', responseData);
      // You can use setResponse or any other state update logic here, if needed
  } catch (error) {
      console.error('Failed to update user profile:', error);
  }
};
