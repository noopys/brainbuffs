import React from 'react';

function SignOutSuccess() {
    console.log("sign out page rendered")
  return (
    <div>
      <h1>Sign Out Successful</h1>
      <p>You have been successfully signed out.</p>
      <a href="./signin"><button>Sign In</button></a>
    </div>
  );
}

export default SignOutSuccess;