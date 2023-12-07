import React, { useState } from 'react';
import { Auth } from 'aws-amplify';


const VerificationCodeEntry = () => {
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [succ, setSucc] = useState(false);

  const handleVerification = async () => {
    try {
      
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
      { succ ? (
        <div> 
          <h2>You have successfully made an account!</h2>
          <h3>The next step is to sign in.</h3>
          <a href="./signin"><button> Sign in</button></a>
        </div> 
      ) : (
      <div> 
        <h2>Please Enter the Verification Code Sent to Your Email</h2>
        <h3>Please check your spam folder</h3>
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <br></br>
        <button onClick={handleVerification}>Verify</button>
        {verificationError && <p>{verificationError}</p>}
      </div>) }
      
    </div>
  );
};

export default VerificationCodeEntry;
