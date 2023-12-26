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

  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [ver, setVer] = useState(false);
  const [succ, setSucc] = useState(false);

  const containerStyle = {
    border: '1px solid #20a7a1',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    margin: '50px auto',
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
    <div style={containerStyle}>
      {ver ? (
        succ ? (
          <div>
            <h2>You have successfully made an account!</h2>
            <h3>The next step is to sign in.</h3>
            <a href="./signin">
              <button style={buttonStyle}>Sign in</button>
            </a>
          </div>
        ) : (
          <div>
            <h2>Please Enter the Verification Code Sent to Your Email</h2>
            <input
              type="text"
              placeholder="Verification Code"
              value={verificationCode}
              style={inputStyle}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <br />
            <button onClick={handleVerification} style={buttonStyle}>
              Verify
            </button>
            {verificationError && <p>{verificationError}</p>}
          </div>
        )
      ) : (
        <div>
          <h1 style={{fontFamily: 'Poppins', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize'}}>Sign Up</h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <input
              type="text"
              placeholder="Email"
              value={username}
              onChange={handleUsernameChange}
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              style={inputStyle}
            />
          </div>
          <button onClick={handleSignUp} style={buttonStyle}>Sign Up</button>
          {errorMessage && <p>Error: {errorMessage}</p>}
          <br />
          <br />
          <p>Already have an account? <a href="./signin" style={{textDecoration: 'none'}}>Sign In</a></p>
          
        </div>
      )}
    </div>
  );
}

export default SignUp;
