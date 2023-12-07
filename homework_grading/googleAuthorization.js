//Handles google authoriation token getting, using, and creating if needed 
const fs = require('fs').promises;
const { google } = require('googleapis');
const readline = require('readline');
const Airtable = require('airtable');
require('dotenv').config();

// Define the scopes and token path
const SCOPES = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive.file'];
const TOKEN_PATH = './token.json';

// Function to authorize
async function authorize(credentials) {
  const oAuth2Client = createOAuth2Client(credentials);
  let token = await readStoredToken(TOKEN_PATH);
  if (!token) {
    console.error('No token found. Need to obtain a new one.');
    getAccessToken(oAuth2Client)
    token = await readStoredToken(TOKEN_PATH)
  }

  oAuth2Client.setCredentials(token);
  return oAuth2Client;
}
//Authorization Helpers 
async function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);

  const code = await promptForCode();
  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens));
    console.log('Token stored to', TOKEN_PATH);
    return oAuth2Client;
  } catch (err) {
    console.error('Error retrieving access token', err);
    throw err;
  }
}
// Function to create an OAuth2 client
function createOAuth2Client(credentials) {
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  return new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
}

// Function to read the stored token
async function readStoredToken(tokenPath) {
  try {
    const token = await fs.readFile(tokenPath, 'utf8'); // Ensure to use 'utf8' for proper encoding
    return JSON.parse(token);
  } catch (error) {
    //console.error('Error reading or parsing the token file:', error);
    return null;
  }
}

function promptForCode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      resolve(code.trim());
    });
  });
}

//Create a document 
async function createGoogleDoc(auth, doc_name) {
  const docs = google.docs({ version: 'v1', auth });

  try {
    const res = await docs.documents.create({
      requestBody: {
        title: doc_name,
      },
    });
    console.log(`Document ID: ${res.data.documentId}`);
    return res.data.documentId;
  } catch (err) {
    console.error('Error creating the document:', err);
    throw err; // Rethrow the error to handle it further up the call stack
  }
}
//Insert images into the doc
async function insertImagesIntoDoc(auth, documentId, imageUrls, imageSize) {
  const docs = google.docs({ version: 'v1', auth });
  const requests = [];

  imageUrls.forEach((url, index) => {
    requests.push({
      insertInlineImage: {
        uri: url,
        location: {
          index: 1, // You can modify this index based on where you want to insert the image
        },
        objectSize: {
          height: {
            magnitude: imageSize,
            unit: 'PT'
          },
          width: {
            magnitude: imageSize,
            unit: 'PT'
          }
        }
      }
    });
  });
  docs.documents.batchUpdate({
        documentId: documentId,
        requestBody: {
          requests: requests
        },
      }, (err, response) => {
        if (err) {
          console.error('Error inserting images:', err);
          return;
        }
        console.log('Images inserted');
      });
}

  module.exports = {
    getAccessToken,
    authorize,
    createGoogleDoc, 
    insertImagesIntoDoc
  };