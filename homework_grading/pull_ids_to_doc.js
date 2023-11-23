///THIS FILE CREATES A GOOGLE DOC AND ADDS IMAGES WITH RECORDS IDS ARRAY TO IT

const fs = require('fs');
const { google } = require('googleapis');
const Airtable = require('airtable');

require('dotenv').config();

// Define the scopes and token path
const SCOPES = ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive.file'];
const TOKEN_PATH = 'token.json';

// Function to read credentials and authorize
function authorize(credentials, callback) {
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, 'Logan Doc', insertImagesIntoDoc);
  });
}

function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);

  // Prompt for user input
  console.log('Enter the code from that page here: ');
  process.stdin.on('data', (code) => {
    process.stdin.end();
    oAuth2Client.getToken(code.toString().trim(), (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);

      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

// Function to create a new Google Doc
function createGoogleDoc(auth, doc_name, callback) {
  const docs = google.docs({ version: 'v1', auth });
  docs.documents.create({
    requestBody: {
      title: doc_name,
    },
  }, (err, res) => {
    if (err) return console.error('Error creating the document:', err);
    console.log(`Document ID: ${res.data.documentId}`);
    if (callback) {
      callback(auth, res.data.documentId, ["https://fastly.picsum.photos/id/1022/200/300.jpg?hmac=aNF88Nsdk9EmnsePe4aC2RixmOVmUOYF415sTFjWFBM"],100);
    }
  });
}

function insertImagesIntoDoc(auth, documentId, imageUrls, imageSize) {
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


// Load client secrets from a local file and start the process
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  authorize(JSON.parse(content), createGoogleDoc);
});

//EXPERIMENTAL 


function fetchImageUrlsByRecordIds(apiKey, baseId, tableName, recordIds, callback) {
  Airtable.configure({
    apiKey: apiKey
  });
  const base = Airtable.base(baseId);

  let imageUrls = [];
  let processedRecords = 0;

  recordIds.forEach(recordId => {
    base(tableName).find(recordId, (err, record) => {
      if (err) {
        console.error(err);
        return;
      }

      if (record && record.get("ImageField")) {
        // Assuming the field contains an array of attachments
        imageUrls.push(record.get("ImageField")[0].url);
      }

      processedRecords++;
      if (processedRecords === recordIds.length) {
        callback(imageUrls);
      }
    });
  });
}

fetchImageUrlsByRecordIds("patSKk9n5NCk9gmDU.2dbbc7224b2d221d22a1e22881d14d12dbc05971d3bd977e8ff3168212e74cf6", "app3eoH3GhFhdwRCz", "tblZEskudyolOx40P", ["recU0QsseB1Xn7Rjm"], console.log("hello"))