import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


function Homework() {

  const question = {
    //text: "What is the capital of France?",
    options: ["A", "B", "C", "D"],
  };

  const [response, setResponse] = useState(null);
  const [recordId, setRecordId] = useState(null);

  //Select option
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  //
  const [questionData, setQuestionData] = useState({ imageUrl: "none" });
  const fetchQuestion = async () => {

    try {
      // Using fetch instead of axios
      const response = await fetch('https://fm407nxajh.execute-api.us-west-2.amazonaws.com/getNextQuestion', {
        method: 'POST', // GET is the default method, but it's good to be explicit
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setRecordId(data.recordId)
      setQuestionData(data);
      console.log(data)
    } catch (err) {
      console.error('Error fetching question:', err);
    }
  };
  //
  const handleSubmit = async () => {
    const data = {
      UserId: 'userq23', // replace with actual data
      RecordId: recordId, // replace with actual data
      Answer: selectedOption, // replace with actual data
      CorrectAnswer: questionData.Answer, // replace with actual data
      IsCorrect: true // replace with actual data
    };

    try {
      const response = await fetch('https://fm407nxajh.execute-api.us-west-2.amazonaws.com/gradeHomework', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setResponse(responseData);
    } catch (error) {
      console.error('Failed to grade homework:', error);
    }
  };
  // const [formData, setFormData] = useState({
  //   recordIds: [], 
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const apiEndpoint = 'https://fm407nxajh.execute-api.us-west-2.amazonaws.com/createHomework';

  //   // Assuming recordIds is a comma-separated string, convert it to an array
  //   const processedFormData = {
  //     ...formData,
  //     recordIds: formData.recordIds.split(',').map(id => id.trim())
  //   };

  //   try {
  //     const response = await fetch(apiEndpoint, {
  //       method: 'POST',
  //       mode: 'no-cors', // Note: 'no-cors' mode does not allow reading the response
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(processedFormData)
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     // Process your response here
  //     console.log('Data sent successfully');
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
      <label htmlFor="recordIds">Record IDs:</label>
      <input
        type="text"
        name="recordIds"
        value={formData.recordIds}
        onChange={handleChange}
      />
      {/* Include other form fields here
      <button type="submit">Submit</button>
    </form> */}




      {/*Question!!! */}
      <div>
        <Card className="bg-light" style={{ width: '30rem', margin: 'auto', marginTop: '20px' }}>
          <Card.Body>
            <Card.Img variant="top" src={questionData.imageUrl} alt="Question Image" />
          </Card.Body>
          <ListGroup className="list-group-flush">
            {question.options.map((option, index) => (
              <ListGroupItem
                key={index}
                action
                onClick={() => handleOptionClick(option)}
                style={{
                  backgroundColor: selectedOption === option ? '#f0f0f0' : '',
                  cursor: 'pointer'
                }}
              >
                {option}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card>
        <button onClick={handleSubmit} className="btn btn-primary mt-3">Check</button>
        <button onClick={fetchQuestion} className="btn btn-primary mt-3">Next Question</button>
      </div>
    </>

  );
}

export default Homework;
