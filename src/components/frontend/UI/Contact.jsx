import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // handle resizing for smaller screens
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const containerStyle = {
    border: '1px solid #20a7a1',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px auto',
    fontFamily: 'poppins',
    borderBottom: '1px solid #20a7a1',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
  };

  const buttonStyle = {
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
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
    alignItems: 'center'
  };

  const promptsCardStyle = {
    maxWidth: '350px',
    width: 'auto',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '10px',
    textAlign: 'left',
  };

  if (windowWidth <= 550) {
    promptsCardStyle.display = 'none';
  } else {
    promptsCardStyle.display = 'block';
  }

  const contactFormStyle = {
    width: 'auto',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '10px',
    textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const promptListStyle = {
    listStyleType: 'square',
    paddingLeft: 15,
    fontSize: '18px',
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint = 'https://hat4m94c1j.execute-api.us-east-2.amazonaws.com/Prod/send-email';
    try {
      const response = await axios.post(apiEndpoint, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log(response.data);

    } catch (error) {
      // Error handling
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'poppins', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize' }}>Contact Us</h1>
        <p>Explore our <a href="./faq" style={{ textDecoration: 'none', color: '#20a7a1', fontWeight: 'bold' }}>FAQ</a> or contact our team</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={promptsCardStyle}>
          <h2 style={{ textAlign: 'left' }}>How can we help?</h2>
          <ul style={promptListStyle}>
            <li>Learn more about one of our <Link to="/#PricingCards" style={{ textDecoration: 'none', color: '#20a7a1', fontWeight: 'bold' }}>plans</Link>.</li>
            <li>Describe an issue you're facing.</li>
            <li>Suggest an improvement.</li>
            <li>Leave your thoughts.</li>
          </ul>
        </div>
        <div style={contactFormStyle} className="contact-form">
          {isMessageSent ? (
            <div className="alert alert-success font-weight-bold font-poppins">Message Sent!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} className="form-control" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea name="message" value={formData.message} onChange={handleInputChange} style={inputStyle} className="form-control" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button className="bg-main-teal hover:bg-main-teal-400 font-bold" type="submit" style={buttonStyle}>Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
