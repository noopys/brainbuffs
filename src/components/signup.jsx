import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useAuth } from './AuthContext';

function SignUp() {
  //sign up
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //verification
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [ver, setVer] = useState(false);
  const [succ, setSucc] = useState(false);

  const handleSignUp = async () => {
    try {
      await Auth.signUp({username, password});
      //await remember({email: username});
      console.log("signing up user", username);
      // Handle successful sign-up, such as showing a success message or redirecting the user
      setVer(true);
    } catch (error) {
      console.error('Sign-up error:', error);
      setErrorMessage(error.message);
      // Handle sign-up errors, display an error message, etc.
    }
  };

  const handleVerification = async () => {
    try {
      
      //console.log("email in verificaiton is ", user.email);
      await Auth.confirmSignUp(username, verificationCode);
      // Verification successful
      // Redirect the user to a different page or show a success message
      //forget();
      //window.location.href = './signin';
      setSucc(true);
    } catch (error) {
      setVerificationError(error.message);
    }
  };

  return (
    <div>
      {ver ? 
      ( succ ? (
        <div>
        <h2>You have successfully made an account!</h2>
        <h3>The next step is to sign in.</h3>
        <a href="./signin"><button> Sign in</button></a>
      </div>
      ) : (
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
      )

      ) : (
      <div>
        <h1>Sign Up</h1>
        <br />
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleSignUp}>Sign Up</button>
        {errorMessage && <p>Error: {errorMessage}</p>}
        <h3>Already have an account?</h3>
        <a href="./signin"><button>Sign In</button></a>
      </div>
      )}
    </div>
  );
}

export default SignUp;