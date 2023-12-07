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

  const handleSignIn = async () => {
    try {
      // use Amplify API to sign in
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
          <h3>You are signed in with email: {user.email}</h3>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h1>Welcome! Please Sign in with your account. </h1>
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button onClick={handleSignIn}>Sign In</button>
          {errorMessage && <p>Error: {errorMessage}</p>}
          <h3>Don't have an account?</h3>
          <a href="./signup.jsx"><button> Create One</button></a>
        </div>
      )}
    </div>

  );
}

export default SignIn;