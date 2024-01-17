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

        let userProfile = userProfileResponse.Item ? userProfileResponse.Item.UserProfile : {};
        userProfile = JSON.parse(userProfile);

        // Update the user profile for each question
        questions.forEach((question, index) => {
            const selectedOption = selectedOptions[index];
            const correct = selectedOption === question.answer;
            console.log("update concepts for question");
            question.concepts.forEach(concept => {
                if (correct) {
                    console.log("update correct concept: ", concept);
                    // If correct, subtract 0.5 (but not below 0)
                    if (userProfile.hasOwnProperty(concept)) {
                        userProfile[concept] = Math.max(userProfile[concept] - 0.5, 0);
                    }
                } else {
                    console.log("update incorrect concept: ", concept);
                    // If incorrect, add 1 to the value for the concept
                    userProfile[concept] = (userProfile[concept] || 0) + 1;
                }
            });
        });

        userProfile = JSON.stringify(userProfile);

        // Use update operation to modify specific attributes
        await dynamoDB.update({
            TableName: 'UserDatabase',
            Key: { 'UserId': userId },
            UpdateExpression: 'SET UserProfile = :userProfile, InCurrSess = :inCurrSess',
            ExpressionAttributeValues: {
                ':userProfile': userProfile,
                ':inCurrSess': false
            }
        }).promise();

        return { statusCode: 200, body: JSON.stringify('UserProfile and InCurrSess updated successfully') };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify('Error updating UserProfile and InCurrSess') };
    }
};