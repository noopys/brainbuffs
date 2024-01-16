const axios = require('axios');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

async function alreadyDone(recordId, userId) {
    const params = {
        TableName: 'QuestionDatabase',
        KeyConditionExpression: 'UserId = :userId AND RecordId = :recordId',
        ExpressionAttributeValues: {
            ':userId': userId,
            ':recordId': recordId
        }
    };

    try {
        const data = await dynamoDb.query(params).promise();
        return data.Items.length > 0;
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return false;
    }
}

async function updateUserInCurrSess(userId, currRecordIds) {
    const updateParams = {
        TableName: 'UserDatabase',
        Key: {
            'UserId': userId
        },
        UpdateExpression: 'SET InCurrSess = :inCurrSess, CurrHWNum = CurrHWNum + :increment, CurrRecordIds = :currRecordIds',
        ExpressionAttributeValues: {
            ':inCurrSess': true,
            ':increment': 1,
            ':currRecordIds': currRecordIds
        },
        ReturnValues: 'ALL_NEW'
    };

    try {
        const updatedData = await dynamoDb.update(updateParams).promise();
        return updatedData.Attributes;
    } catch (error) {
        console.error('DynamoDB Update Error:', error);
        return null;
    }
}

async function getUserProfile(userId) {
    const params = {
        TableName: 'UserDatabase',
        Key: {
            'UserId': userId
        },
        ProjectionExpression: 'UserProfile, CurrHWNum, InCurrSess, CurrRecordIds'
    };

    try {
        const data = await dynamoDb.get(params).promise();
        return data.Item || null;
    } catch (error) {
        console.error('DynamoDB Error:', error);
        return null;
    }
}

async function weightingAlgorithm(conceptsToLookFor, questions, student, numOfQs, userId) {
    let weightsArray = Array.from({ length: questions.length }, () => ({ weight: 0, id: "0" }));

    for (let i = 0; i < questions.length; i++) {
        let cons = questions[i].Concepts;
        if (cons && cons.values && cons.values.length > 0) {
            cons.values.forEach(value => {
                if (typeof value === 'string' && value.trim() !== '' && value in conceptsToLookFor) {
                    weightsArray[i].weight += conceptsToLookFor[value];
                }
            });
        }
        weightsArray[i].id = questions[i].recordID || questions[i].id;
    }

    weightsArray.sort((a, b) => b.weight - a.weight);

    let selectedQuestions = [];
    let index = 0;

    while (selectedQuestions.length < numOfQs && index < weightsArray.length) {
        const nextQuestion = weightsArray[index];

        if (!await alreadyDone(nextQuestion.id, userId)) {
            selectedQuestions.push(nextQuestion);
        }

        index++;
    }

    console.log("Selected Questions:", selectedQuestions);
    return selectedQuestions;
}

async function putQuestionsInDatabase(selectedQuestions, userId, nextHomeworkSet) {
    await Promise.all(selectedQuestions.map(async (question) => {
        const putParams = {
            TableName: 'QuestionDatabase',
            Item: {
                'UserId': userId,
                'RecordId': question.id,
                'HomeworkSet': nextHomeworkSet,
                // Add other attributes as needed
            }
        };

        await dynamoDb.put(putParams).promise();
    }));
}

exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const userId = JSON.parse(event.body).userId;
    const numOfQs = 5;

    const { UserProfile, CurrHWNum, InCurrSess, CurrRecordIds } = await getUserProfile(userId);

    console.log("UserProfile: ", UserProfile);
    console.log("CurrHWNum: ", CurrHWNum);
    console.log("InCurrSess: ", InCurrSess);
    console.log("CurrRecordIds: ", CurrRecordIds);

    try {
        console.log('Starting InCurrSess check...');
        
        if (InCurrSess) {
            
            console.log('User is in the current session.');

            
            const details = await Promise.all(CurrRecordIds.map(async (recordId) => {
            const detailParams = {
                TableName: 'SATQuestions',
                Key: {
                    'recordID': recordId
                }
            };
            const detailData = await dynamoDb.get(detailParams).promise();
            return detailData.Item;
             }));

            console.log('Details:', details);
            
            const responses = details.map(fields => {
                const concepts = fields['Concepts'];
                const imageUrl = fields['questionImage'] || null;
                const answer = fields['Answer'];
                const recordId = fields['recordID'];

                return {
                    recordId: recordId,
                    imageUrl: imageUrl,
                    answer: answer,
                    concepts: concepts
                };
            });

            console.log("Responses:", responses);

            return {
                statusCode: 200,
                body: JSON.stringify(responses)
            };
        } else {
            
            const userProfile = await getUserProfile(userId);

            if (!userProfile) {
                console.error('User profile not found.');
                return {
                    statusCode: 404,
                    body: JSON.stringify({ error: 'User profile not found.' })
                };
            }

            const scanParams = {
                TableName: 'SATQuestions',
                FilterExpression: 'Field = :field',
                ExpressionAttributeValues: {
                    ':field': 'Math',
                },
            };

            const scanResult = await dynamoDb.scan(scanParams).promise();
            const records = scanResult.Items;

            if (records.length === 0) {
                console.log("No records found");
                throw new Error('No records found');
            }

            console.log('Applying weighting algorithm...');

            const selectedQuestion = await weightingAlgorithm(userProfile, records, 'STUDENT_ID', numOfQs, userId);
            
            const updatedUser = await updateUserInCurrSess(userId, selectedQuestion.map(record => record.id).filter(id => id !== "0"));
            if (!updatedUser) {
                console.error('Failed to update InCurrSess.');
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: 'Failed to update InCurrSess.' })
                };
            }

            console.log('InCurrSess updated to true, along with currHwSet and recordIDs:', updatedUser);
            await putQuestionsInDatabase(selectedQuestion, userId, CurrHWNum + 1);

            const selectedRecord = selectedQuestion.map(record => record.id).filter(id => id !== "0");

            const details = await Promise.all(selectedRecord.map(async (recordId) => {
                const detailParams = {
                    TableName: 'SATQuestions',
                    Key: {
                        'recordID': recordId
                    }
                };
                const detailData = await dynamoDb.get(detailParams).promise();
                return detailData.Item;
            }));

            const responses = details.map(fields => {
                const concepts = fields['Concepts'];
                const imageUrl = fields['questionImage'] || null;
                const answer = fields['Answer'];
                const recordId = fields['recordID'];

                return {
                    recordId: recordId,
                    imageUrl: imageUrl,
                    answer: answer,
                    concepts: concepts
                };
            });

            console.log("Responses:", responses);

            return {
                statusCode: 200,
                body: JSON.stringify(responses)
            };
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to process request' })
        };
    }
};
