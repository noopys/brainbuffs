const axios = require('axios');
//const {fetchAllRecords, weightingAlgorithm} = require('./getOptimal');


//Global Var to Hold concepts 
let concepts = {};
async function getRecordFromAirtable(accessToken, baseId, tableName, recordId) {
    const endpoint = `https://api.airtable.com/v0/${baseId}/${tableName}/${recordId}`;
    const headers = {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
    };

    try {
        const response = await axios.get(endpoint, { headers });
        return response.data;
    } catch (error) {
        console.error(`Error ${error.response.status}: ${error.response.data.error.message}`);
        return null;
    }
}

async function getMultipleRecords(accessToken, baseId, tableName, recordIds) {
    const records = [];
    for (const id of recordIds) {
        const record = await getRecordFromAirtable(accessToken, baseId, tableName, id);
        if (record) {
            records.push(record);
        }
    }
    return records;
}

// Example usage:

//  _______________________________________________________
// |                                                        |
// |                    TABLE BELOW                         |
// |________________________________________________________|
//
//INPUT RECORD IDS HERE 
//  ________________________________________________________
// |                                                        |
// |                    RECORDS BELOW                        |
// |________________________________________________________|
//

const RECORD_IDS = ['recbEJsV3tdjnHzZi', 'recemtbnUGKuJTtgK', 'rec0C1UxHgVnLE1qv']; 
//const RECORD_IDS = ['recb5xSHMpFBiByRl'];
const numOfQs = 12;
const studentName = "Sandy"
const tallyRecords = (records) => {
    //let concepts = {}
    for(let i = 0; i < records.length; i++){
        let cons = records[i].fields.Concepts;
        for(let j = 0; j < cons.length; j++){
            //console.log(cons[j]);
            if (concepts.hasOwnProperty(cons[j])) {
                concepts[cons[j]] += 1;
            } else {
                concepts[cons[j]] = 1;
            }
        }
    }
    return concepts;
}


// getMultipleRecords(ACCESS_TOKEN, BASE_ID, TABLE_NAME, RECORD_IDS)
//     .then(records => {
//         let cepts = tallyRecords(records)
//         fetchAllRecords()
//             .then(records => {
//                 //console.log(concepts)
//                 weightingAlgorithm(cepts, records, studentName, numOfQs)
//             })
//             .catch(error => {
//                 console.log(`Failed to fetch data: ${error}`);
//             });
//     })
//     .catch(error => {
//         console.error("There was an error fetching the records:", error);
//     });

module.exports={
   getMultipleRecords,
   tallyRecords
};
