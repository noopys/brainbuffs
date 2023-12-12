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

  const buttonStyle = {
    backgroundColor: '#007bff', // Blue color
    color: '#fff', // White text
    padding: '8px 16px', // Adjust padding as needed
    border: 'none', // Remove border if needed
    borderRadius: '4px', // Add border-radius if needed
    cursor: 'pointer', // Show pointer on hover
  };

  const fieldStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const handleForgotPassword = async () => {
    try {
      await Auth.forgotPassword(username);
      setSuccessMessage(
        'Email verification code sent to email. Please enter your verificaiton code and new password below.'
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
      const logoutDelay = 7000; // 2 seconds delay (adjust as needed)
      setTimeout(() => {
        window.location.href = './signin';
      }, logoutDelay);
    } catch (error) {
      setError('Error confirming password reset: ' + error.message);
      console.error('Error confirming password reset:', error);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={fieldStyle}
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
          style={fieldStyle}
        />
        {verificationError && <p>{verificationError}</p>}
        <br></br>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={fieldStyle}
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