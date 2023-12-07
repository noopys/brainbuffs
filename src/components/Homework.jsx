import React, { useState } from 'react';

function Homework() {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="recordIds">Record IDs:</label>
      <input
        type="text"
        name="recordIds"
        value={formData.recordIds}
        onChange={handleChange}
      />
      {/* Include other form fields here */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Homework;
