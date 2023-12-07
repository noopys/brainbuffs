//TAKES CONCEPTS AND MAKES STUDENT PROFILE AND WEIGHTS QUESTION BASED ON STUDENT PROFILE
const axios = require('axios');
require('dotenv').config();



// const headers = {
//   'Authorization': `Bearer ${PERSONAL_ACCESS_TOKEN}`,
// };

let concepts = {
  'Systems of Linear Equations ': 2,
  'Circle and Volume': 1,
  'Solving Quadratic Equations': 1,
  Medium: 2,
  'Clever Solution': 1,
  'Plug and Play': 1,
  'Check What Question Is Asking For': 1,
  'Word Problems': 1
}

async function fetchAllRecords(PERSONAL_ACCESS_TOKEN, BASE_ID, TABLE_NAME) {
  //Header Auth
  const headers = {
    'Authorization': `Bearer ${PERSONAL_ACCESS_TOKEN}`,
  };
  let allRecords = [];
  let offset;

  while (true) {
    let url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
    if (offset) {
      url += `?offset=${offset}`;
    }

    const response = await axios.get(url, { headers });
    const records = response.data.records;
    allRecords = [...allRecords, ...records];

    offset = response.data.offset;
    if (!offset) {
      break;
    }
  }
  return allRecords;
}

let weightingAlgorithm = (conceptsToLookFor, questions, student, numOfQs) => {
  let weightsArray = Array.from({ length: questions.length }, () => ({weight:0, id:"0"}));
  for (let i = 0; i < questions.length; i++) {
    cons = questions[i].fields.Concepts
    if (cons) {
      //Nested Loops for now may improve time complexity 
      for (let j = 0; j < cons.length; j++) {
        if (cons[j] in conceptsToLookFor) {
          weightsArray[i].weight+=conceptsToLookFor[cons[j]]
          weightsArray[i].id =questions[i].id
        }
      }
    }
  }
  //Remove questions already given 
  for(let k = 0; k < questions.length; k++){
    studs = questions[k].fields["Student Given"];
    if (studs && studs.length) {
      for (let m = 0; m < studs.length; m++) {
        if (studs[m] == student) {
          weightsArray[k].weight = 0;
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

  //console.log(weightsArray)
}


// Function to process an array of record IDs
async function getImageLinksForRecords(recordIds, PAT, BASE, TABLE) {
  const promises = recordIds.map(id => getImageLink(id, PAT, BASE, TABLE));
  const imageLinks = await Promise.all(promises);
  return imageLinks;
}

// Function to get image link from a record
async function getImageLink(recordId, PAT, BASE, TABLE) {
  try {
      const url = `https://api.airtable.com/v0/${BASE}/${TABLE}/${recordId}`;
      const response = await axios.get(url, {
          headers: {
              'Authorization': `Bearer ${PAT}`
          }
      });
      const imageUrl = response.data.fields['Question Image'] && response.data.fields['Question Image'][0].url;
      return imageUrl;
  } catch (error) {
      console.error('Error fetching record:', error);
      return null;
  }
}


module.exports = {fetchAllRecords, 
                  weightingAlgorithm,
                  getImageLinksForRecords
                };
