const { getAccessToken, authorize } = require('./googleAuthorization.js');
const { createGoogleDoc, insertImagesIntoDoc } = require('./googleDoc.js');
const { getMultipleRecords, tallyRecords } = require('./getConcepts.js');
const { fetchAllRecords, weightingAlgorithm, getImageLinksForRecords } = require('./getOptimal');

const { google } = require('googleapis');
const fs = require('fs').promises;

require('dotenv').config();

const SCOPES = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive.file'];
const TOKEN_PATH = 'token.json';

exports.handler = async (event, context) => {
    //Temp
    const RECORD_IDS = ['recbEJsV3tdjnHzZi', 'recemtbnUGKuJTtgK', 'rec0C1UxHgVnLE1qv']; 

    //Get concepts 
    const records = await getMultipleRecords(process.env.PERSONAL_ACCESS_TOKEN, process.env.BASE_ID, process.env.TABLE_NAME, RECORD_IDS);
    const concepts = tallyRecords(records);
    
    //Get Best next questions
    const allRecords = await fetchAllRecords(process.env.PERSONAL_ACCESS_TOKEN, process.env.BASE_ID, process.env.TABLE_NAME);
    
    const qsToGive = weightingAlgorithm(concepts, allRecords, "Logan", 15);
    const ids = qsToGive.map(item => item.id);
    const imageUrls = await getImageLinksForRecords(ids, process.env.PERSONAL_ACCESS_TOKEN, process.env.BASE_ID, process.env.TABLE_NAME);
    console.log(imageUrls);
    
    //Get google API credentials 
    const credentials = JSON.parse(await fs.readFile('credentials.json', 'utf8'));
    const oAuthClient = await authorize(credentials);
    
    //Create a new document 
    const docId = await createGoogleDoc(oAuthClient, "11/23/2023");
    console.log(docId);
    
    //Insert Images into document 
    await insertImagesIntoDoc(oAuthClient, docId, imageUrls, 300);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Function executed successfully", docId: docId }),
    };
};
