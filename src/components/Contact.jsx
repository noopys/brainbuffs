import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isMessageSent, setIsMessageSent] = useState(false);

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
    <div className="d-flex flex-column align-items-center p-3 bg-light" >
      {isMessageSent ? (
        <div className="alert alert-success font-weight-bold">Message Sent!</div>
      ) : (
        <>
          <p className="font-weight-bold mb-3 text-center"><strong>Fill out this form and one of our expert tutors will get back to you shortly!</strong></p>
          <form className="w-100" style={{ maxWidth: '500px', paddingTop:"50px" }} onSubmit={handleSubmit} >
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea name="message" value={formData.message} onChange={handleInputChange} className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contact;
