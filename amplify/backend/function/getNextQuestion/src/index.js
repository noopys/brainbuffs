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

exports.handler = async (event) => {
    const userId = JSON.parse(event.body).userId;
    console.log("HELOOOO" + userId)
    const userProfile = typeof event.body === 'string' ? JSON.parse(event.body).userProfile : event.body.userProfile;
    const PAT = 'patSKk9n5NCk9gmDU.2dbbc7224b2d221d22a1e22881d14d12dbc05971d3bd977e8ff3168212e74cf6'; // Replace with your Airtable API key
    const BASE = 'app3eoH3GhFhdwRCz'; // Replace with your Airtable Base ID
    const TABLE = 'tblZEskudyolOx40P'; // Replace with your Airtable Table Name
    const numOfQs = 1; // Number of questions to select

    try {
        // Fetch all records
        const listUrl = `https://api.airtable.com/v0/${BASE}/${TABLE}`;
        const listResponse = await axios.get(listUrl, {
            headers: {
                'Authorization': `Bearer ${PAT}`
            }
        });
        const records = listResponse.data.records;
        if (records.length === 0) {
            throw new Error('No records found');
        }
        // Apply weighting algorithm
        const selectedQuestion = await weightingAlgorithm(userProfile, records, 'STUDENT_ID', numOfQs, userId); 
        console.log(selectedQuestion)
        // Replace 'STUDENT_ID' with the actual student ID
        const selectedRecord = selectedQuestion.map(record => record.id).filter(id => id !== "0");
        // Fetch details for selected records
        const details = await Promise.all(selectedRecord.map(async (recordId) => {
            const detailUrl = `https://api.airtable.com/v0/${BASE}/${TABLE}/${recordId}`;
            const detailResponse = await axios.get(detailUrl, {
                headers: {
                    'Authorization': `Bearer ${PAT}`
                }
            });
            return detailResponse.data;
        }));
        

        const fields = details[0].fields;
        const imageUrl = fields['questionImage'] && fields['questionImage'].length > 0 ? fields['questionImage'][0].url : null;
        const answer = fields['Answer']; // Assuming 'Answer' is the correct field name
        const recordId = details[0].id;
        const response = {
            recordId: recordId, 
            imageUrl: imageUrl,
            answer: answer
        }
        console.log(response)
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to process request' })
        };
    }
};
async function weightingAlgorithm(conceptsToLookFor, questions, student, numOfQs, userId) {
    let weightsArray = Array.from({ length: questions.length }, () => ({weight:0, id:"0"}));
    for (let i = 0; i < questions.length; i++) {
        let cons = questions[i].fields.Concepts
        if (cons) {
            //Nested Loops for now may improve time complexity 
            for (let j = 0; j < cons.length; j++) {
                //console.log("cycle" + cons[j] + "cons" + conceptsToLookFor[cons[j]])
                if (cons[j] in conceptsToLookFor) {
                    weightsArray[i].weight+=conceptsToLookFor[cons[j]]
                }
            }
        }
        weightsArray[i].id =questions[i].id
    }
    //Find the 20 most fitting questions 
    console.log(weightsArray)
    weightsArray.sort((a, b) => b.weight - a.weight);
    let index = 0; 
    let nextQuestion =  weightsArray[0]
    
    while(await alreadyDone(nextQuestion.id, userId)){
        index++;
        nextQuestion = weightsArray[index];
    }
    return [nextQuestion]
}
