import React, { useState } from "react";

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const containerStyle = {
    border: '1px solid #20a7a1',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
    borderBottom: '1px solid #20a7a1',
  };

  const buttonStyle = {
    backgroundColor: '#20a7a1',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    width: '300px',
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    width: '300px',
    marginBottom: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint = 'https://hat4m94c1j.execute-api.us-east-2.amazonaws.com/Prod/send-email';
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    // For development purposes
    if (1) {
      console.log('Message sent successfully!');
      setIsMessageSent(true);
    } else {
      console.log('There was an error sending the message.');
    }
  };

  return (
  <div>
    <div style={containerStyle}>
      {isMessageSent ? (
        <div className="alert alert-success font-weight-bold">Message Sent!</div>
      ) : (
        <>
          <h1 style={{fontFamily: 'Arial, sans-serif', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize'}}>Contact Us</h1>
          <p> Fill out this form and one of our expert tutors will get back to you shortly!</p>
          <form onSubmit={handleSubmit} >
            <div className="form-group">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} style= {inputStyle} className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} style= {inputStyle} className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
              <textarea name="message" value={formData.message} onChange={handleInputChange} style= {inputStyle} className="form-control" rows="5" placeholder="Message"></textarea>
            </div>
            <button type="submit" style={(buttonStyle)}>Submit</button>
          </form>
        </>
      )}
      </div>
    </div>
  );
};

export default Contact;
