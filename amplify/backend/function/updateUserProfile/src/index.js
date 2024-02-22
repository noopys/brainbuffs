const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const requestBody = JSON.parse(event.body);
    const { userId, questions, selectedOptions } = requestBody;

    try {
        const userProfileResponse = await dynamoDB.get({
            TableName: 'UserDatabase',
            Key: { 'UserId': userId }
        }).promise();

        // Extract user profiles from the response
        let userProfileResponseItem = userProfileResponse.Item || {};
        console.log('User Profile Response:', userProfileResponseItem);

        let userProfile = userProfileResponseItem.UserProfile || {};
        let englishUserProfile = userProfileResponseItem.EnglishUserProfile || {};

        console.log('UserProfile:', userProfile);
        console.log('EnglishUserProfile:', englishUserProfile);

        // Update the user profile for each question
        questions.forEach((question, index) => {
            const selectedOption = selectedOptions[index];
            let correct = selectedOption === question.answer;
            console.log('selectedOption:', selectedOption);
            console.log('correctBefore:', correct);
            
            // Check if the answer contains the 'or' keyword
            if (question.answer.includes('or')) {
                // Split the answer by the 'or' keyword
                const answerOptions = question.answer.split('or').map(option => option.trim());
                // Check if the selectedOption matches any of the answer options
                correct = answerOptions.includes(selectedOption);
                console.log('IN THE CONDITIONAL');
            }
            
            // Determine which user profile to update based on the subject
            const userToUpdate = question.subject === 'Math' ? userProfile : englishUserProfile;
            console.log("user to Update: ", userToUpdate);

            // Inside the forEach loop for concepts
            question.concepts.forEach(concept => {
                // Log the values for debugging
                console.log('Concept:', concept);
                console.log('Correct:', correct);

                // Check if the property exists in the map
                const conceptProperties = userToUpdate[concept];
                console.log("conceptProperties", conceptProperties);
                const previousValue = conceptProperties !== undefined ? conceptProperties : 0;

                console.log('Previous Value:', previousValue);

                if (correct) {
                    // If correct, subtract 0.5 (but not below 0)
                    userToUpdate[concept] = Math.max((parseFloat(previousValue) || 0) - 0.5, 0);
                } else {
                    // If incorrect, add 1 to the value for the concept
                    userToUpdate[concept] = (parseFloat(previousValue) || 0) + 1;
                }

                // Log the updated value
                console.log('Updated Value:', userToUpdate[concept]);
            });
        });

        // Use update operation to modify specific attributes
        await dynamoDB.update({
            TableName: 'UserDatabase',
            Key: { 'UserId': userId },
            UpdateExpression: 'SET UserProfile = :userProfile, EnglishUserProfile = :englishUserProfile, InCurrSess = :inCurrSess',
            ExpressionAttributeValues: {
                ':userProfile': userProfile,
                ':englishUserProfile': englishUserProfile,
                ':inCurrSess': false
            }
        }).promise();
        // Include userProfile and englishUserProfile in the success response body
        const responseBody = {
            message: 'UserProfiles and InCurrSess updated successfully',
            userProfile,
            englishUserProfile
        };

        return { statusCode: 200, body: JSON.stringify(responseBody) };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify('Error updating UserProfiles and InCurrSess') };
    }
};
