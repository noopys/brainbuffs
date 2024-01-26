export const updateUser = async (userId, questions, selectedOptions, updateUserData, userData) => {
    const data = {
        userId: userId,
        questions: questions,
        selectedOptions: selectedOptions
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

        function transformData(originalData) {
            const newData = { M: {} };
          
            for (const key in originalData) {
              const category = key.trim(); // Remove any leading/trailing spaces
              const value = originalData[key];
              const nKey = category.replace(/\s+/g, "_"); // Replace spaces with underscores for N key
              newData.M[category] = { N: String(value || "0") };
            }
          
            return newData;
          }

        // Update user data in React application state using the passed updateUserData function
        const updatedUserData = [...userData]; // Create a copy of the array
        const firstUserData = updatedUserData[0]; // Assuming the user data is stored in the first element of the array 
        // firstUserData.userProfile = responseData.userProfile;
        // firstUserData.EnglishUserProfile = responseData.englishUserProfile;
        firstUserData.UserProfile = transformData(responseData.userProfile);
        firstUserData.EnglishUserProfile = transformData(responseData.englishUserProfile);

        
        // Update the state
        updateUserData(updatedUserData);

        // You can use setResponse or any other state update logic here, if needed
    } catch (error) {
        console.error('Failed to update user profile:', error);
    }
};
