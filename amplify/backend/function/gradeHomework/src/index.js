// Import the AWS SDK
const AWS = require('aws-sdk');

// Configure the AWS region
AWS.config.update({ region: 'us-east-1' });

// Create a DynamoDB service object
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const getHomeworkSet = async (userId, recordId) => {
    const params = {
        TableName: 'QuestionDatabase',
        Key: {
            'UserId': userId,
            'RecordId': recordId
        },
        ProjectionExpression: 'HomeworkSet'
    };

    try {
        const data = await dynamoDB.get(params).promise();
        return data.Item ? data.Item.HomeworkSet : null;
    } catch (error) {
        console.error('DynamoDB Error:', error);
        throw error;
    }
};

exports.handler = async (event) => {
    try {
        // Extract values from the event object
        const body = JSON.parse(event.body);
        const { requestData, submitData } = body;

        // Get userId and recordId from the first item in submitData
        const { UserId, RecordId } = submitData[0];

        // Use the getHomeworkSet function to get the HomeworkSet value
        const homeworkSet = await getHomeworkSet(UserId, RecordId);

        if (homeworkSet !== null) {
            // Continue with your logic using the obtained homeworkSet value
            // Example DynamoDB operation for batch writing with additional logic
            const params = {
                RequestItems: {
                    'QuestionDatabase': submitData.map(item => ({
                        PutRequest: {
                            Item: {
                                "UserId": item.UserId,
                                "RecordId": item.RecordId,
                                "Answer": item.Answer,
                                "CorrectAnswer": item.CorrectAnswer,
                                "IsCorrect": item.IsCorrect,
                                "HomeworkSet": homeworkSet // Add HomeworkSet to the items
                            }
                        }
                    }))
                }
            };

            // Perform a DynamoDB batchWrite operation
            const data = await dynamoDB.batchWrite(params).promise();

            // Return a successful response
            return {
                statusCode: 200,
                body: JSON.stringify(data),
            };
        } else {
            // Handle the case where no match is found
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'No match found in QuestionDatabase' }),
            };
        }
    } catch (error) {
        // Return an error response
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
};