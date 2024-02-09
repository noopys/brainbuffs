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
        ProjectionExpression: 'UserProfile, EnglishUserProfile, CurrHWNum, InCurrSess, CurrRecordIds'
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
                //console.log('Checking value:', value);
               // console.log('Concepts to look for:', conceptsToLookFor);
                // if (typeof value === 'string' && value.trim() !== '' && conceptsToLookFor.includes(value)) {
                if (typeof value === 'string' && value.trim() !== '' && value in conceptsToLookFor) {
                   // console.log('Condition met for value:', value);
                    weightsArray[i].weight += conceptsToLookFor[value];
                }
            });
        }
        weightsArray[i].id = questions[i].recordID || questions[i].id;
    }

    weightsArray.sort((a, b) => b.weight - a.weight);
    console.log("The weights array sorted", weightsArray);
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

async function getQuestions(subject, numOfQs, userId, userProfile) {
    if (!userProfile) {
        console.error('User profile not found.');
        throw new Error('User profile not found.');
    }

    const scanParams = {
        TableName: 'SATQuestions',
        FilterExpression: 'Field = :field',
        ExpressionAttributeValues: {
            ':field': subject,
        },
    };

    const scanResult = await dynamoDb.scan(scanParams).promise();
    const records = scanResult.Items;

    if (records.length === 0) {
        console.log(`No ${subject} records found`);
        throw new Error(`No ${subject} records found`);
    }

    console.log(`Applying weighting algorithm for ${subject}...`);

    const selectedQuestions = await weightingAlgorithm(userProfile, records, 'STUDENT_ID', numOfQs, userId);

    const updatedUser = await updateUserInCurrSess(userId, selectedQuestions.map(record => record.id).filter(id => id !== "0"));
    console.log("the input param of updateUser: ", selectedQuestions.map(record => record.id).filter(id => id !== "0"));
    if (!updatedUser) {
        console.error('Failed to update InCurrSess.');
        throw new Error('Failed to update InCurrSess.');
    }

    console.log(`InCurrSess updated to true, along with currHwSet and recordIDs for ${subject}:`, updatedUser);
    await putQuestionsInDatabase(selectedQuestions, userId, updatedUser.CurrHWNum);

    const selectedRecordIds = selectedQuestions.map(record => record.id).filter(id => id !== "0");

    const details = await Promise.all(selectedRecordIds.map(async (recordId) => {
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
        const questionText = fields['questionText'];

        return {
            recordId: recordId,
            imageUrl: imageUrl,
            answer: answer,
            concepts: concepts,
            subject: subject,  // Add the subject field to each question
            questionText: questionText,
        };
    });

    console.log(`${subject} Responses:`, responses);

    return responses;
}

async function getBothQuestions(subject, numOfQs, userId, userProfile, currHw) {
    if (!userProfile) {
        console.error('User profile not found.');
        throw new Error('User profile not found.');
    }

    const scanParams = {
        TableName: 'SATQuestions',
        FilterExpression: 'Field = :field',
        ExpressionAttributeValues: {
            ':field': subject,
        },
    };

    const scanResult = await dynamoDb.scan(scanParams).promise();
    const records = scanResult.Items;

    if (records.length === 0) {
        console.log(`No ${subject} records found`);
        throw new Error(`No ${subject} records found`);
    }

    console.log(`Applying weighting algorithm for ${subject}...`);

    const selectedQuestions = await weightingAlgorithm(userProfile, records, 'STUDENT_ID', numOfQs, userId);


    await putQuestionsInDatabase(selectedQuestions, userId, currHw + 1);

    const selectedRecordIds = selectedQuestions.map(record => record.id).filter(id => id !== "0");

    const details = await Promise.all(selectedRecordIds.map(async (recordId) => {
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
        const questionText = fields['questionText'];

        return {
            recordId: recordId,
            imageUrl: imageUrl,
            answer: answer,
            concepts: concepts,
            subject: subject,  // Add the subject field to each question
            questionText: questionText,
        };
    });

    console.log(`${subject} Responses:`, responses);

    return responses;
}


exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('Event Body:', event.body);
    //const requestBody = event.body ? JSON.parse(event.body) : {};

    const requestBody = JSON.parse(event.body);
    const userId = requestBody.userId;
    const numOfQs = 10;

    const { UserProfile, EnglishUserProfile, CurrHWNum, InCurrSess, CurrRecordIds } = await getUserProfile(userId);

    console.log("UserProfile: ", UserProfile);
    console.log("CurrHWNum: ", CurrHWNum);
    console.log("InCurrSess: ", InCurrSess);
    console.log("CurrRecordIds: ", CurrRecordIds);
    console.log("EnglishUserProfile: ", EnglishUserProfile);

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
                const subject = fields['Field'];  // Extract subject from "Field" column
                const questionText = fields['questionText'];
                
                return {
                    recordId: recordId,
                    imageUrl: imageUrl,
                    answer: answer,
                    concepts: concepts,
                    subject: subject,
                    questionText: questionText,
                };
            });

            console.log("Responses:", responses);

            return {
                statusCode: 200,
                body: JSON.stringify(responses)
            };
        } else {
            // Use the specified subject and user profile field
            const subject = requestBody.subject;
            const userProfileField = subject === 'Math' ? UserProfile : EnglishUserProfile;

            if (subject === 'Both') {
                // If subject is Both, retrieve half from Math and half from English
                const numOfMathQs = Math.floor(numOfQs / 2);
                const numOfEnglishQs = numOfQs - numOfMathQs;

                // Retrieve Math questions
                const mathQuestions = await getBothQuestions('Math', numOfMathQs, userId, UserProfile, CurrHWNum);

                // Retrieve English questions
                const englishQuestions = await getBothQuestions('English', numOfEnglishQs, userId, EnglishUserProfile,CurrHWNum);

                // Combine the responses
                const responses = [
                    ...mathQuestions.map(question => ({ ...question, subject: 'Math' })),
                    ...englishQuestions.map(question => ({ ...question, subject: 'English' }))
                ];
                const updatedUser = await updateUserInCurrSess(userId, responses.map(record => record.recordId).filter(id => id !== "0"));

                return {
                    statusCode: 200,
                    body: JSON.stringify(responses)
                };
            } else {
                // Retrieve questions based on the subject
                console.log("userProfileField passed to getQuestions: ", userProfileField); 
                const questions = await getQuestions(subject, numOfQs, userId, userProfileField);

                // Add subject field to each question in the responses
                const responses = questions.map(question => ({ ...question, subject }));

                return {
                    statusCode: 200,
                    body: JSON.stringify(responses)
                };
            }
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to process request' })
        };
    }
};