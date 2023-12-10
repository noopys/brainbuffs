import React from 'react';
import brainbuffs from "../resources/brainbuffs.png"

function SignOutSuccess() {
    console.log("sign out page rendered")

    const buttonStyle = {
      backgroundColor: '#007bff', // Blue color
      color: '#fff', // White text
      padding: '8px 16px', // Adjust padding as needed
      border: 'none', // Remove border if needed
      borderRadius: '4px', // Add border-radius if needed
      cursor: 'pointer', // Show pointer on hover
    };


  return (
    <div>
      <h1>Sign Out Successful</h1>
      <p>You have been successfully signed out.</p>
      <a href="./signin"><button style={buttonStyle}>Sign In</button></a>
      <br></br>
      <img src={brainbuffs} alt="Your Alt Text" />
    </div>
  );
}

export default SignOutSuccess;