import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          // If you want to include the user's email
          // You can include other attributes here if needed
        }
      });
      // Handle successful sign-up, such as showing a success message or redirecting the user
    } catch (error) {
      console.error('Sign-up error:', error);
      setErrorMessage(error.message);
      // Handle sign-up errors, display an error message, etc.
    }
  };

  return (
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
    </div>
  );
}

export default SignUp;
