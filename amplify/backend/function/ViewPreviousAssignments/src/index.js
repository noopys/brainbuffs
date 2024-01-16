const AWS = require('aws-sdk');

exports.handler = async (event) => {
       console.log(`Received event: ${JSON.stringify(event)}`);

   const body = JSON.parse(event.body);
    const userId = body.userId;
    console.log(`UserId from event: ${userId}`);

    if (!userId) {
        return {
            statusCode: 400,
            body: JSON.stringify('UserId is missing in the request.'),
        };
    }
    
    try {

        // Initialize DynamoDB clients
        const dynamoDB = new AWS.DynamoDB();
        const docClient = new AWS.DynamoDB.DocumentClient();

        // Query the QuestionDatabase table to get all data for the provided UserId
        const queryParams = {
            TableName: 'QuestionDatabase',
            KeyConditionExpression: 'UserId = :userId',
            ExpressionAttributeValues: {
                ':userId': userId,
            },
        };

        const questionDatabaseResponse = await docClient.query(queryParams).promise();
        const questionData = questionDatabaseResponse.Items;

        // Fetch additional data from SATQuestions table for each question
        const questionsWithImages = await Promise.all(questionData.map(async (question) => {
            const satQuestionParams = {
                TableName: 'SATQuestions',
                Key: {
                    'recordID': question.RecordId,
                },
            };

            const satQuestionResponse = await docClient.get(satQuestionParams).promise();
            const imageUrl = satQuestionResponse.Item ? satQuestionResponse.Item.questionImage : null;

            return {
                Answer: question.Answer,
                CorrectAnswer: question.CorrectAnswer,
                HomeworkSet: question.HomeworkSet,
                RecordId: question.RecordId,
                questionImage: imageUrl,
                IsCorrect: question.IsCorrect,
            };
        }));

        // Organize the data by HomeworkSet
        const organizedData = questionsWithImages.reduce((acc, question) => {
            const { HomeworkSet, Answer, CorrectAnswer, RecordId, questionImage, IsCorrect } = question;

            if (!acc[HomeworkSet]) {
                acc[HomeworkSet] = [];
            }

            acc[HomeworkSet].push({
                Answer,
                CorrectAnswer,
                RecordId,
                questionImage,
                IsCorrect,
            });

            return acc;
        }, {});

        return {
            statusCode: 200,
            body: JSON.stringify(organizedData),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Internal Server Error'),
        };
    }
};
