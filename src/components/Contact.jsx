import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Adding a new state variable to track the sent status
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //API endpoint
    //Interfaces with AWS 
    //Endpoint is an AWS API Gateway which connects to a lambda function which uses AWS SES (Simple Email Service) to dispatch an email
    //to us among fill out of the contact form
    const apiEndpoint = 'https://hat4m94c1j.execute-api.us-east-2.amazonaws.com/Prod/send-email';

    //Should use cors in future (on backlog for now)
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    // if (response.ok) {
    if (1) { // temporary condition in development still 
      console.log('Message sent successfully!');
      // Mark message as sent
      setIsMessageSent(true);
    } else {
      console.log('There was an error sending the message.');
    }
  };
  //Form below
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      height: '100vh', 
      padding: '0rem',
      backgroundColor: 'rgba(242,242,242,1)'
    }}>
      {isMessageSent ? (
        <div style={{fontSize: '2em', fontWeight: 'bold'}}>Message Sent!</div>
      ) : (
        <>
             <p style={{ 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              fontSize: '1.2em' 
            }}>
              Fill out this form and one of our expert tutors will get back to you shortly!
            </p>
            <form style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              width: '100%', 
              maxWidth: '500px', 
              //border: '1px solid #ccc',
              //borderRadius: '8px',
              padding: '20px',
              //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }} onSubmit={handleSubmit}>
              <label style={{ 
                marginBottom: '15px', 
                fontSize: '1em' 
              }}>
                Name:
                <input style={{ 
                  width: '100%', 
                  padding: '10px', 
                  marginTop: '5px', 
                  fontSize: '0.9em', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px' 
                }} type="text" name="name" value={formData.name} onChange={handleInputChange} />
              </label>
              <label style={{ 
                marginBottom: '15px', 
                fontSize: '1em' 
              }}>
                Email:
                <input style={{ 
                  width: '100%', 
                  padding: '10px', 
                  marginTop: '5px', 
                  fontSize: '0.9em', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px' 
                }} type="email" name="email" value={formData.email} onChange={handleInputChange} />
              </label>
              <label style={{ 
                marginBottom: '15px', 
                fontSize: '1em' 
              }}>
                Message:
                <textarea style={{ 
                  width: '100%', 
                  padding: '10px', 
                  marginTop: '5px', 
                  fontSize: '0.9em', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px' 
                }} name="message" value={formData.message} onChange={handleInputChange} />
              </label>
              <input style={{ 
                alignSelf: 'center', 
                marginTop: '1rem', 
                padding: '10px 20px', 
                background: '#007bff', 
                color: 'white', 
                borderRadius: '4px', 
                cursor: 'pointer' 
              }} type="submit" value="Submit" />
            </form>
        </>
      )}
    </div>
  );
};

export default Contact;
