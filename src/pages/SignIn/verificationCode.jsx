import React, { useState } from 'react';
import { Auth } from 'aws-amplify';


const VerificationCodeEntry = () => {
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [succ, setSucc] = useState(false);

  const containerStyle = {
    border: '1px solid #20a7a1',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    margin: '20px auto',
    fontFamily: 'poppins',
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
  };

  const handleVerification = async () => {
    try {
      if (!/^\d{6}$/.test(verificationCode)) {
        setVerificationError('Verification code must be a 6-digit number');
        return;
      }
      
      console.log("email in verificaiton is ", username);
      await Auth.confirmSignUp(username, verificationCode);
      // Verification successful
      // Redirect the user to a different page or show a success message
      setSucc(true);
    } catch (error) {
      setVerificationError(error.message);
    }
  };

  return (
    <div>
      <div style={containerStyle}>
      { succ ? (
        <div> 
          <h2>You have successfully made an account!</h2>
          <h3>The next step is to sign in.</h3>
          <a href="./signin"><button style={buttonStyle}> Sign in</button></a>
        </div> 
      ) : (
      <div> 
        <h1 style={{fontFamily: 'Poppins', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize'}}>Email Verification</h1>
        <p>Enter the verification code sent to your email.</p>
        <p>If you did not receive an email, please check your spam folder.</p>
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <br></br>
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          style={inputStyle}
        />
        <br></br>
        <button onClick={handleVerification} style={buttonStyle}>Verify</button>
        {verificationError && <p>{verificationError}</p>}
      </div>) }
      </div>
    </div>
  );
};

export default VerificationCodeEntry;
