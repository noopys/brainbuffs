import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useAuth } from './AuthContext';

function SignIn() {
  const { isLoggedIn, user, login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const lineStyle = {
    border: 'none',
    borderTop: '1px solid #20a7a1', // Match the border style
    margin: '30px auto',
    width: '400px',
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
      
      const userInfo = await Auth.signIn(username, password);
      console.log("The userid is:", userInfo.attributes.sub)

      await login({email: userInfo.attributes.email, username: userInfo.attributes.sub});
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
      <div style={containerStyle}>
        <h1 style={{fontFamily: 'Poppins', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize'}}>{isLoggedIn ? 'Sign In Successful' : 'Sign In'}</h1>
        {!isLoggedIn ? (
          <div>
            <div>
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
            </div>
            <button onClick={handleSignIn} style={buttonStyle}>Sign In</button>
            {errorMessage && <p style={{ color: 'red' }}>Error: {errorMessage}</p>}
            <div>
              
              <div>
                <p>Need Help?</p>
                <p><a href="./resetPassword" style={{textDecoration: 'none'}}>Reset Password</a></p>
                <p><a href="./verificationCode" style={{textDecoration: 'none'}}>Verify Your Account</a></p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>You are signed in with email: {user.email}</p>
            <button onClick={handleSignOut} style={buttonStyle}>Sign Out</button>
          </div>
        )}
      </div>
      {isLoggedIn ? ("") : (
        <div>
          <div style={lineStyle}></div>
          <p>New to Brain Buffs? <a href="./signUp" style={{textDecoration: 'none'}}>Create an Account</a></p>
        </div>
      )}
      
    </div>
  );
}

export default SignIn;
