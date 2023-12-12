import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
//import { withRouter  } from 'react-router-dom'; // Import useHistory hook
//import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useAuth } from './AuthContext';


function SignIn() {
  //console.log('SignIn component rendered');
  const { isLoggedIn, user, login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSignIn = async () => {
    try {
      // use Amplify API to sign in
      console.log("hello")
      const userInfo = await Auth.signIn(username, password);
      // set the email attribute

      login({email: userInfo.attributes.email});
    } catch (error) {
      console.error('Sign-in error:', error);
      setErrorMessage(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      logout();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome!</h1>
          <br></br>
          <h4>You are signed in with email: </h4>
          <h3>{user.email}</h3>
          <button onClick={handleSignOut} style={buttonStyle}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h1>Welcome! Please Sign in with your account. </h1>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column'}}>
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
          </div>
          <button onClick={handleSignIn} style={buttonStyle}>Sign In</button>
          {errorMessage && <p>Error: {errorMessage}</p>}
          <br></br><br></br>
          <h5>Don't have an account?</h5>
          <a href="./signup"><button style={buttonStyle}> Create One</button></a>
          <br></br><br></br>
          <h6>Getting Error: User is not confirmed? Click below to verify your account</h6>
          <a href="./verificationCode"><button  style={buttonStyle}> Verify My Account</button></a>
        </div>
      )}
    </div>

  );
}

export default SignIn;