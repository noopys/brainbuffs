import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
//import { withRouter  } from 'react-router-dom'; // Import useHistory hook
//import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// import {Amplify} from 'aws-amplify';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import config from '../aws-exports.js';
// Amplify.configure(config);



function SignIn({isLoggedIn, setIsLoggedIn}) {
  //console.log('SignIn component rendered');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userEmail, setUserEmail] = useState(null);

  const handleSignIn = async () => {
    try {
      // use Amplify API to sign in
      const userInfo = await Auth.signIn(username, password);
      // set the email attribute
      setUserEmail(userInfo.attributes.email);
      // set logged in variable to be true
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      setUserEmail(null); // Reset userEmail state upon sign-out
      setIsLoggedIn(false);
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
          <h3>You are signed in with email: {userEmail}</h3>
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
          <h3>Don't have an account?</h3>
          <a href="./signup.jsx"><button> Create One</button></a>
        </div>
      )}
    </div>

  );
}

//export default withAuthenticator(SignIn);
export default SignIn;