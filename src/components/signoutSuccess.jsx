import React from 'react';
import brainbuffs from "../resources/brainbuffs.png"

function SignOutSuccess() {
    console.log("sign out page rendered")

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


  return (
    <div>
      <h1 style={{fontFamily: 'Arial, sans-serif', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize'}}>Sign Out Successful</h1>
      <a href="./signin"><button style={buttonStyle}>Sign In</button></a>
      <br></br>
      <img src={brainbuffs} alt="Your Alt Text" />
    </div>
  );
}

export default SignOutSuccess;