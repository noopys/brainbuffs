import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useAuth } from './AuthContext'


function SignUp() {
  //Creds 
  const { isLoggedIn, user, userData, login, logout } = useAuth();
  //sign up
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  //verification
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [ver, setVer] = useState(false);
  const [succ, setSucc] = useState(false);

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

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    // Check if passwords match whenever password or confirmPassword changes
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleSignUp = async () => {
    try {
      if (!passwordsMatch) {
        setErrorMessage("Passwords don't match");
        return;
      }
      const signUpResponse = await Auth.signUp({username, password});
      const UserId = signUpResponse.userSub;
      //await remember({email: username});
      console.log("signing up user", username);
      // Handle successful sign-up, such as showing a success message or redirecting the user
      //Add user to database 
      //endpoint
      const apiEndpoint = 'https://fm407nxajh.execute-api.us-west-2.amazonaws.com/addUser';
      //request
      try {
        const result = await fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ UserId: UserId, UserProfile: '{"Hard":1}' }),
        });
  
        if (!result.ok) {
          throw new Error('Network response was not ok: ' + result.statusText);
        }
  
        const data = await result.json();
        //setResponse('Success: ' + JSON.stringify(data));
      } catch (error) {
        //setResponse('Error: ' + error.message);
      }

      setVer(true);
    } catch (error) {
      console.error('Sign-up error:', error);
      setErrorMessage(error.message);      
    }
  };

  const handleVerification = async () => {
    try {
      if (!/^\d{6}$/.test(verificationCode)) {
        setVerificationError('Verification code must be a 6-digit number');
        return;
      }
      await Auth.confirmSignUp(username, verificationCode);
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
          <a href="./signin"><button style={buttonStyle}> Sign in</button></a>
        </div>
      ) : (
        <div>
          <h2>Please Enter the Verification Code Sent to Your Email</h2>
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            style={fieldStyle}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <br />
          <button onClick={handleVerification} style={buttonStyle}>Verify</button>
          {verificationError && <p>{verificationError}</p>}
        </div>
      )

      ) : (
      <div>
        <h1>Welcome to Brain Buffs Tutoring! </h1>
        <h2>Please Sign Up Below!</h2>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={handleUsernameChange}
            style={fieldStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={fieldStyle}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={fieldStyle}
          />
        </div>
        <button onClick={handleSignUp} style={buttonStyle}>Sign Up</button>
        {errorMessage && <p>Error: {errorMessage}</p>}
        <br /><br />
        <h5>Already have an account?</h5>
        <a href="./signin"><button style={buttonStyle}>Sign In</button></a>
      </div>
      )}
    </div>
  );
}

export default SignUp;