// import React, { useState } from 'react';
// import { Auth } from 'aws-amplify';
// //import { withRouter  } from 'react-router-dom'; // Import useHistory hook
// //import { withAuthenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
// import { useAuth } from './AuthContext';


// function SignIn() {
//   //console.log('SignIn component rendered');
//   const { isLoggedIn, user, login, logout } = useAuth();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const buttonStyle = {
//     backgroundColor: '#007bff', // Blue color
//     color: '#fff', // White text
//     padding: '8px 16px', // Adjust padding as needed
//     border: 'none', // Remove border if needed
//     borderRadius: '4px', // Add border-radius if needed
//     cursor: 'pointer', // Show pointer on hover
//   };

//   const fieldStyle = {
//     marginBottom: '10px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     fontSize: '16px',
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSignIn = async () => {
//     try {
//       // use Amplify API to sign in
//       console.log("hello")
//       const userInfo = await Auth.signIn(username, password);
//       // set the email attribute

//       login({email: userInfo.attributes.email});
//     } catch (error) {
//       console.error('Sign-in error:', error);
//       setErrorMessage(error.message);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       logout();
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <h1>Welcome!</h1>
//           <br></br>
//           <h4>You are signed in with email: </h4>
//           <h3>{user.email}</h3>
//           <button onClick={handleSignOut} style={buttonStyle}>Sign Out</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Welcome! Please Sign in with your account. </h1>
//           <br></br>
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  flexDirection: 'column'}}>
//             <input
//               type="text"
//               placeholder="Email"
//               value={username}
//               onChange={handleUsernameChange}
//               style={fieldStyle}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//               style={fieldStyle}
//             />
//           </div>
//           <button onClick={handleSignIn} style={buttonStyle}>Sign In</button>
//           {errorMessage && <p>Error: {errorMessage}</p>}
//           <br></br><br></br>
//           <h5>Don't have an account?</h5>
//           <a href="./signup"><button style={buttonStyle}> Create One</button></a>
//           <br></br><br></br>
//           <h5>Forgot your password?</h5>
//           <a href="./resetPassword"><button style={buttonStyle}> Reset it</button></a>
//           <br></br><br></br>
//           <h6>Getting Error: User is not confirmed? Click below to verify your account</h6>
//           <a href="./verificationCode"><button  style={buttonStyle}> Verify My Account</button></a>
//         </div>
//       )}
//     </div>

//   );
// }

// export default SignIn;
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
    maxWidth: '400px',
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
    margin: '20px auto',
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
      const userInfo = await Auth.signIn(username, password);
      login({ email: userInfo.attributes.email });
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
        <h1>{isLoggedIn ? 'You are signed in.' : 'Sign In'}</h1>
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
                <p><a href="./resetPassword">Reset Password</a></p>
                <p><a href="./verificationCode">Verify Your Account</a></p>
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
          <p>New to Brain Buffs? <a href="./signUp">Create Account</a></p>
        </div>
      )}
      
    </div>
  );
}

export default SignIn;
