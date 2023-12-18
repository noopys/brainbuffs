import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [verification, setVerification] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [successMessagetwo, setSuccessMessagetwo] = useState('');

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
  };

  const handleForgotPassword = async () => {
    try {
      await Auth.forgotPassword(username);
      setSuccessMessage(
        'Verification code sent to email. Please enter your verificaiton code and new password below.'
      );
      setVerification(true);
    } catch (error) {
      setError(error.message);
      console.error('Error sending reset instructions:', error);
    }
  };

  const confirmPasswordReset = async () => {
    try {
      if (!/^\d{6}$/.test(verificationCode)) {
          setVerificationError('Verification code must be a 6-digit number');
          return;
          }
    
      await Auth.forgotPasswordSubmit(username, verificationCode, newPassword);
      setSuccessMessagetwo('Password reset confirmed successfully. You will be redirected to the sign in page shortly.');
      // Redirect the user to the login page or display a success message
      const logoutDelay = 5000; // 2 seconds delay (adjust as needed)
      setTimeout(() => {
        window.location.href = './signin';
      }, logoutDelay);
    } catch (error) {
      setError('Error confirming password reset: ' + error.message);
      console.error('Error confirming password reset:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={{fontFamily: 'Poppins', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize'}}>Forgot Password</h1>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Email'
          style={inputStyle}
        />
      </div>
      <button onClick={handleForgotPassword} style={buttonStyle}>Send Reset Instructions</button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <br></br>
      {verification ? (
        <div>
        <label>Verification Code:</label>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          style={inputStyle}
        />
        {verificationError && <p>{verificationError}</p>}
        <br></br>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={inputStyle}
        />
        <br></br>
        <button onClick={confirmPasswordReset} style={buttonStyle}>Reset Password</button>
        {successMessagetwo && <p>{successMessagetwo}</p>}
      </div>
      ): (
        <div>

        </div>
      )}
    </div>
  );
};

export default ForgotPassword;