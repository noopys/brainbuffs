import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useAuth } from './AuthContext';


const VerificationCodeEntry = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const { user, forget, logout } = useAuth();

  const handleVerification = async () => {
    try {
      
      console.log("email in verificaiton is ", user.email);
      await Auth.confirmSignUp(user.email, verificationCode);
      // Verification successful
      // Redirect the user to a different page or show a success message
      forget();
      window.location.href = './signin';
    } catch (error) {
      setVerificationError(error.message);
    }
  };

  return (
    <div>
      <h2>Please Enter the Verification Code Sent to Your Email</h2>
      <input
        type="text"
        placeholder="Verification Code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={handleVerification}>Verify</button>
      {verificationError && <p>{verificationError}</p>}
    </div>
  );
};

export default VerificationCodeEntry;
