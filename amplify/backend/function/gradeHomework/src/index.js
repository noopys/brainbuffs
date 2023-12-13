// Import the AWS SDK
const AWS = require('aws-sdk');

// Configure the AWS region
AWS.config.update({ region: 'us-east-1' });

// Create a DynamoDB service object
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        // Extract values from the event object
        const body = JSON.parse(event.body);  // Parsing the event body
        const { UserId, RecordId, Answer, CorrectAnswer, IsCorrect } = body;
        // Example DynamoDB operation
        const params = {
            TableName: 'QuestionDatabase',
            Item: {
                "UserId": UserId,          // User ID
                "RecordId": RecordId,  // Question ID
                "Answer": Answer,          // User's answer
                "CorrectAnswer": CorrectAnswer,  // Correct answer
                "IsCorrect": IsCorrect     // Whether the user's answer is correct
            }
        };

        // Perform a DynamoDB operation, e.g., put, get, query, etc.
        const data = await dynamoDB.put(params).promise();
        // Return a successful response
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};
