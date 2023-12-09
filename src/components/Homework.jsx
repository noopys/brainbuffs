import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


function Homework() {

  const question = {
    //text: "What is the capital of France?",
    options: ["A", "B", "C", "D"],
    imageUrl: "https://v5.airtableusercontent.com/v2/23/23/1701820800000/1snz1op_yIeeH-3BW5x-eQ/HWp8Csg5xqyqLunUDH_m9r-tHg5xYlwNzOcQFKuRHVhwpyz7G7K64SGf2L8i_lisCQdF_v9F3NPl0SmpMYn9ECuzk0tSW2pAhy7e4MOxU4kfx7Pt7UNgsuwZ-TdRy_Eh2qOOc8sslPZNWpCsurUvKw/s3DW-x9D1ftyTqQwmoZbk06mVOvJaIYBlqAY6zR73K4",
  };

  const [formData, setFormData] = useState({
    recordIds: [], 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint = 'https://fm407nxajh.execute-api.us-west-2.amazonaws.com/createHomework';
    
    // Assuming recordIds is a comma-separated string, convert it to an array
    const processedFormData = {
      ...formData,
      recordIds: formData.recordIds.split(',').map(id => id.trim())
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        mode: 'no-cors', // Note: 'no-cors' mode does not allow reading the response
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(processedFormData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Process your response here
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
      <Card.Img variant="top" style={{}}src={question.imageUrl} alt="Question Image" />
      </Card.Body>
      <ListGroup className="list-group-flush">
        {question.options.map((option, index) => (
          <ListGroupItem key={index} action>
            {option}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
    <button className="btn btn-primary mt-3">Check</button>
    </div>
    </>

  );
}

export default Homework;
