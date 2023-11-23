const axios = require('axios');

require('dotenv').config();

// API credentials and endpoint setup
const access_token = proccess.env.PERSONAL_ACCESS_TOKEN;
const baseId = 'app3eoH3GhFhdwRCz';
const tableName = 'tblZEskudyolOx40P';
const endpointUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

// Headers for authentication and content type
const headers = {
    'Authorization': `Bearer ${access_token}`,
    'Content-Type': 'application/json'
};

// Parameters for filtering and selecting fields
const params = {
    filterByFormula: '{Test Number} = 1',
    fields: ['Number', 'Answer']
};

// Make the GET request
axios.get(endpointUrl, { headers, params })
    .then(response => {
        const records = response.data.records;
        
        // Display filtered and selected data
        records.forEach(record => {
            const recordId = record.id;
            const number = record.fields.Number;
            const answer = record.fields.Answer;
            console.log(`Record ID: ${recordId}, Number: ${number}, Answer: ${answer}`);
        });
    })
    .catch(error => {
        console.error(`Failed to retrieve data: ${error}`);
    });
