// index.mjs
import { getAccessToken, authorize } from './googleAuthorization.js';
import { createGoogleDoc, insertImagesIntoDoc } from './googleDoc.js';
import { getMultipleRecords, tallyRecords } from './getConcepts.js';
import { fetchAllRecords, weightingAlgorithm, getImageLinksForRecords } from './getOptimal.js';

import { google } from 'googleapis';
import fs from 'fs/promises';

import dotenv from 'dotenv';
dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive.file'];
const TOKEN_PATH = 'token.json';

async function main(recordIds) {
    // Use the provided recordIds
    const records = await getMultipleRecords(process.env.PERSONAL_ACCESS_TOKEN, process.env.BASE_ID, process.env.TABLE_NAME, recordIds);
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
}

export const handler = async (event) => {
    // Extract recordIds from the event object
    // Assuming the recordIds are passed as a JSON array in the event body
    const recordIds = JSON.parse(event.body).recordIds;

    await main(recordIds);
    return {
        statusCode: 200,
        body: JSON.stringify('Lambda function executed successfully!'),
    };
};
