import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useAuth } from './AuthContext'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';


function SignUp() {
  //Creds 
  const { isLoggedIn, user, logout } = useAuth();
  //sign up
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hearAboutUs, sethearAboutUs] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const [verificationCode, setVerificationCode] = useState('');
  const [verificationError, setVerificationError] = useState('');
  const [ver, setVer] = useState(false);
  const [succ, setSucc] = useState(false);

  //Plan Url arguments 
  const navigate = useNavigate();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const plan = urlParams.get('plan');

  const containerStyle = {
    border: '1px solid #20a7a1',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    width: '90%',
    margin: '30px auto',
    fontFamily: 'poppins',
    borderBottom: '1px solid #20a7a1',
  };

  const buttonStyle = {
    backgroundColor: '#20a7a1',
    color: '#fff',
    padding: '12px 16px', // Adjust padding as needed
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    width: '90%',
    maxWidth: '300px', 
    marginBottom: '20px'
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    maxWidth: '300px',
    width: '90%',
    marginBottom: '10px',
  };

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
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

  const handleHearAboutUsChange = (e) => {
    sethearAboutUs(e.target.value);
  };

  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  async function handleSignUp(event) {
    event.preventDefault();

    try {
      if (!passwordsMatch) {
        setErrorMessage("Passwords don't match");
        return;
      }
      const signUpResponse = await Auth.signUp({username, password, attributes: {'custom:FullName': fullname , 'custom:PhoneNumber': phoneNumber, 'custom:HearAboutUs': hearAboutUs}});
      const UserId = signUpResponse.userSub;
      //await remember({email: username});
      console.log("signing up user", username);
      // Handle successful sign-up, such as showing a success message or redirecting the user
      //Add user to database 
      //endpoint

      const apiEndpoint = 'https://fm407nxajh.execute-api.us-west-2.amazonaws.com/addUser';
      //Packaging up user data
      const requestData = {UserId: UserId,  UserProfile: '{"Hard":1}'}
      //request
      try {
        const response = await axios.post(apiEndpoint, requestData, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
  
        const data = response.data;
      } catch (error) {
        setErrorMessage('Error: ' + error.message);
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
      //Check if we need to collect payment too
      if(plan =="free"){
        setSucc(true);
      }
      else if (plan =="pro"){
        navigate('/checkout?plan=pro');
      }
      else if (plan =="practice"){
        navigate('/checkout?plan=practice');
      }
      setSucc(true);
    } catch (error) {
      setVerificationError(error.message);
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
    <div style={containerStyle}>
      {isLoggedIn ? (
        <div>
          <p>You are signed in with email: {user.email}</p>
          <button onClick={handleSignOut} style={buttonStyle}>Sign Out</button>
        </div>
        ) : (
        <div>
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
            <form onSubmit={handleSignUp}>
              <h1 style={{fontFamily: 'Poppins', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize'}}>Sign Up</h1>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullname}
                  onChange={handleFullnameChange}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={username}
                  onChange={handleUsernameChange}
                  style={inputStyle}
                />
                <div style={{ position: 'relative', }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={inputStyle}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10%', // Adjust the position as needed
                      top: '50%',
                      transform: 'translateY(-60%)',
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="How did you hear about us?"
                  value={hearAboutUs}
                  onChange={handleHearAboutUsChange}
                  style={inputStyle}
                />
              </div>
              <button type="submit" style={buttonStyle}>Sign Up</button>
              {errorMessage && <p>Error: {errorMessage}</p>}
              <p>Already have an account? <a href="./signin" style={{textDecoration: 'none', color: '#20a7a1', fontWeight: 'bold'}}>Sign In</a></p>
            </form>
          )}
        </div>
      )}


    </div>
  );
}

export default SignUp;
