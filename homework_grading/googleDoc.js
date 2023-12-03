const { google } = require('googleapis');

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
      if (url) { // Check if url is not undefined
        requests.push({
          insertInlineImage: {
            uri: url,
            location: {
              index: 1, // Modify this index based on where you want to insert the image
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
      }
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
    createGoogleDoc, 
    insertImagesIntoDoc
  };