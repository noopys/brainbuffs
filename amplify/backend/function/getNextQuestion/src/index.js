const axios = require('axios');

exports.handler = async (event) => {
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
        const weightedRecords = weightingAlgorithm(userProfile, records, 'STUDENT_ID', numOfQs); // Replace 'STUDENT_ID' with the actual student ID
        const selectedRecords = weightedRecords.map(record => record.id).filter(id => id !== "0");
        // Fetch details for selected records
        const details = await Promise.all(selectedRecords.map(async (recordId) => {
            const detailUrl = `https://api.airtable.com/v0/${BASE}/${TABLE}/${recordId}`;
            const detailResponse = await axios.get(detailUrl, {
                headers: {
                    'Authorization': `Bearer ${PAT}`
                }
            });
            return detailResponse.data;
        }));
        
        //Store needed values 
        //console.log(details);

        // Accessing the fields property of the details object
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

function weightingAlgorithm(conceptsToLookFor, questions, student, numOfQs) {
    let weightsArray = Array.from({ length: questions.length }, () => ({weight:0, id:"0"}));
    for (let i = 0; i < questions.length; i++) {
        let cons = questions[i].fields.Concepts
        if (cons) {
            //Nested Loops for now may improve time complexity 
            for (let j = 0; j < cons.length; j++) {
                //console.log("cycle" + cons[j] + "cons" + conceptsToLookFor[cons[j]])
                if (cons[j] in conceptsToLookFor) {
                    weightsArray[i].weight+=conceptsToLookFor[cons[j]]
                    weightsArray[i].id =questions[i].id
                }
            }
        }
    }
    //Find the 20 most fitting questions 
    let topTen = Array.from({ length: numOfQs }, () => ({ value: -Infinity, id:"", index: -1 }));

    for (let i = 0; i < weightsArray.length; i++) {
        let val = weightsArray[i];
        // Check if the current value is larger than the smallest of the top ten.
        if (val.weight > topTen[0].value) {
            // Insert the current value and index into the sorted topTen array.
            topTen[0] = { value: val.weight, id:val.id, index: i };
            topTen.sort((a, b) => a.value - b.value);
        }
    }
    return topTen;
}
