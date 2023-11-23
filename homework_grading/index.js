const { getAccessToken, authorize} = require('./googleAuthorization.js');
const { createGoogleDoc, insertImagesIntoDoc } = require('./googleDoc.js');

const { google } = require('googleapis');
const fs = require('fs').promises;

require('dotenv').config();

const SCOPES = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive.file'];
const TOKEN_PATH = 'token.json';

async function main() {
    //Get google API credentials 
    const credentials = JSON.parse(await fs.readFile('credentials.json', 'utf8'));
    oAuthClient = await authorize(credentials)
    //Create a new document 
    const docId = await createGoogleDoc(oAuthClient, "11/23/2023");
    console.log(docId);
    //Insert Images into document 
    await insertImagesIntoDoc(oAuthClient, docId, ["https://fastly.picsum.photos/id/1022/200/300.jpg?hmac=aNF88Nsdk9EmnsePe4aC2RixmOVmUOYF415sTFjWFBM"],100)
}

main();
