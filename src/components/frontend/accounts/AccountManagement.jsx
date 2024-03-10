import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Auth } from 'aws-amplify';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const AccountManagement = () => {
  // get info from local auth session
  const { isLoggedIn, logout, user, userData, updateUser, updateUserData, fetchDataFromDynamoDB } = useAuth();

  // const for change phone# or full name
  const [newPhoneNumber, setNewPhoneNumber] = useState(null);
  const [newFullName, setNewFullName] = useState(null);
  const [newGoalScore, setgoalScore] = useState(null);
  const [newNextTestDate, setNextDate] = useState(null);
  const [changesMadePersonal, setChangesMadePersonal] = useState(false);
  const [changesMadeStats, setChangesMadeStats] = useState(false);

  // const for changing password
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const for user messages
  const [error, setError] = useState('');
  const [updateInfoSuccessMessage, setupdateInfoSuccessMessage] = useState('');
  const [updateStatsSuccessMessage, setupdateStatsSuccessMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [endSubMessage, setEndSubMessage] = useState('');

  // const for conditional Rendering  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmationEndSub, setShowConfirmationEndSub] = useState(false);
  const [isProSubscription, setIsProSubscription] = useState(false);

  // const for checking that payment was successful
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const token = urlParams.get('token');

  /*-----------------------------------------

  STYLE

  --------------------------------------------*/

  const containerStyle = {
    // border: '1px solid #20a7a1',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '800px',
    width: '100%',
    margin: '20px auto',
    fontFamily: 'poppins',
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    maxWidth: '300px',
    width: '80%',
    marginBottom: '10px',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#dd0000',
    color: '#fff',
    padding: '12px 16px', // Adjust padding as needed
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    width: '50%',
    maxWidth: '300px'
  };

  const fieldStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    width: '300px',
  };

  /*-----------------------------------------

  USE EFFECTS

  --------------------------------------------*/

  // If the token is correct, change the fetch from backend to change local context again
  useEffect(() => {
    // console.log("printing the token", token);
    if (user && user.username && token === "CjVcwY0dOoNyJf1nIDrJ8nMZpjf4cMAd1POrADNbGo1iCPINy0Vt34aETa4hbMg8AwqT51ugxF6V42oYzlM13aZco4Cf4r2uQuW88K7dkE3NU9b4DVqZ1YjEvDIXhNGA") {
      console.log("context before:", userData);
      fetchDataFromDynamoDB(user.username);
      console.log("Updated local context plan to", userData);
    }
  }, [user, token]);

  // Your logic to check if SubscriptionLevel is "pro" or "practice"
  useEffect(() => {
    if (userData && userData.length > 0) {
      const subscriptionLevel = userData[0]?.SubscriptionLevel?.S;
      if (subscriptionLevel === 'pro' || subscriptionLevel === 'practice') {
        setIsProSubscription(true);
      } else {
        setIsProSubscription(false);
      }
    }
  }, [userData]);

  // If there are changes on the screen, notify them before naviagting away
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      console.log('inside event handler');
      if (changesMadePersonal || changesMadeStats) {
        // Display the confirmation message when there are unsaved changes
        console.log('changesMadePersonal is true');
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    };
    // Add a 'beforeunload' event listener to show a confirmation dialog
    window.addEventListener('beforeunload', handleBeforeUnload);
    // console.log('changesMade has chaged to', changesMade);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [changesMadePersonal, changesMadeStats]); // Listen to changesMade state changes

  // Whenever the 'newFullName' variable changes, update the context
  useEffect(() => {
    if (newFullName !== null) {
      const updatedContext = { ...user, fullName: newFullName };
      updateUser(updatedContext);
      setChangesMadePersonal(true);
      setupdateInfoSuccessMessage('');
      // console.log('updated Fullname', user);
    }
  }, [newFullName]);

  // Whenever the 'newPhoneNumber' variable changes, update the context
  useEffect(() => {
    if (newPhoneNumber !== null) {
      const updatedContext = { ...user, phoneNumber: newPhoneNumber };
      updateUser(updatedContext);
      setChangesMadePersonal(true);
      setupdateInfoSuccessMessage('');
      // console.log('updated phone #', user);
    }
  }, [newPhoneNumber]);

  // Whenever the 'newGoalScore' variable changes, update the context
  useEffect(() => {
    if (newGoalScore !== null) {
      const updatedContext = { ...userData[0], GoalScore: { N: newGoalScore } };
      const updatedUserData = [...userData];
      updatedUserData[0] = updatedContext;

      updateUserData(updatedUserData);
      setChangesMadeStats(true);
      setupdateStatsSuccessMessage('');
      // console.log('updated goal score', updatedUserData);
    }
  }, [newGoalScore]);

  // Whenever the 'newNextTestDate' variable changes, update the context
  useEffect(() => {
    if (newNextTestDate !== null) {
      const updatedContext = { ...userData[0], NextTestDate: { S: newNextTestDate } };
      const updatedUserData = [...userData];
      updatedUserData[0] = updatedContext;

      updateUserData(updatedUserData);
      setChangesMadeStats(true);
      setupdateStatsSuccessMessage('');
      // console.log('updated newNextTestDate', updatedUserData);
    }
  }, [newNextTestDate]);

  /*-----------------------------------------

  Functions

  --------------------------------------------*/

  // Handle submit changes to cognito database
  const updateUserAttributes = async () => {
    if (!/^[0-9]*$/.test(user.phoneNumber)) {
      setupdateInfoSuccessMessage('Phone Number can only contain numbers. (No spaces, hyphens, or parenthesis)');
      return;
    }
    if (!/^[a-zA-Z '-]*$/.test(user.fullName)) {
      setupdateInfoSuccessMessage('Full Name can only contain letters, hyphens (-), apostrophe (\'), dashes (—), and spaces.');
      return;
    }

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      console.log('Updating with', user.fullName, user.phoneNumber);

      await Auth.updateUserAttributes(currentUser, {
        'custom:FullName': user.fullName,
        'custom:PhoneNumber': user.phoneNumber,
      });
      console.log('User Information Updated Successfully', user.fullName, user.phoneNumber);
      setupdateInfoSuccessMessage('User Information Updated Successfully!');

      setChangesMadePersonal(false);

      const messageDelay = 5000; // 5 seconds delay (adjust as needed)
      const messageTimer = setTimeout(() => {
        setupdateInfoSuccessMessage('');
      }, messageDelay);

      return () => clearTimeout(messageTimer); // Clear timeout if component unmounts

    } catch (error) {
      console.error('Error updating user attributes:', error);
      setupdateInfoSuccessMessage(error.message);
    }
  };

  // Handle submit changes to Dynamo database
  const updateUserAttributesDynamo = async () => {
    if (!/^[0-9]*$/.test(userData[0].GoalScore.N)) {
      setupdateStatsSuccessMessage('Goal Score can only contain numbers. (No spaces, hyphens, or parenthesis)');
      return;
    }
    if (!/^[a-zA-Z0-9 /]*$/.test(userData[0].NextTestDate.S)) {
      setupdateStatsSuccessMessage('Next Test Date can only contain letters, forward slash (/), apostrophe (\'), dashes (—), and spaces.');
      return;
    }

    const apiGatewayEndpoint = 'https://fm407nxajh.execute-api.us-west-2.amazonaws.com/getUserData'; // Replace with your API Gateway endpoint

    const requestData = {
      username: user.username,
      goalScore: userData[0].GoalScore.N,
      nextTestDate: userData[0].NextTestDate.S,
      func: "updateData",
    };

    try {
      // Use axios.post for making a POST request. The first argument is the URL, 
      // the second is the requestData, and the third is an optional configuration object.
      const response = await axios.post(apiGatewayEndpoint, requestData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setChangesMadeStats(false);
      console.log("changes made:", newGoalScore, newNextTestDate);
      setupdateStatsSuccessMessage('Statistics Updated Successfully!');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error('Failed to fetch data from API Gateway:', error.response);
        setupdateStatsSuccessMessage('Error updating statistics. Please try again.');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error putting data to API Gateway:', error.message);
      }
      setupdateStatsSuccessMessage('Error putting data to API Gateway');
    }

    const messageDelay = 5000; // 5 seconds delay (adjust as needed)
    const messageTimer = setTimeout(() => {
      setupdateStatsSuccessMessage('');
    }, messageDelay);

    return () => clearTimeout(messageTimer); // Clear timeout if component unmounts
  };

  // Handle delete account
  const deleteUserAccount = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setError("Passwords don't match");
        return;
      }

      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.deleteUser(currentUser);
      // Handle successful account deletion, e.g., redirect or display a message
      setSuccessMessage('Account deleted successfully, you will be redirected to the sign in screen shortly');
      console.log('Account deleted successfully, you will be redirected to the sign in screen');

      const logoutDelay = 5000; // 2 seconds delay (adjust as needed)
      setTimeout(() => {
        logout();
      }, logoutDelay);
    } catch (error) {
      // Handle error deleting account
      console.error('Error deleting account:', error);
    }
  };

  // Handle change password
  const handleChangePassword = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(currentUser, oldPassword, newPassword);
      console.log('Password changed successfully');
      setSuccessMessage('Password changed successfully, you will be redirected to the sign in screen');

      const logoutDelay = 5000; // 2 seconds delay (adjust as needed)
      setTimeout(() => {
        logout();
      }, logoutDelay);
    } catch (error) {
      setError(error.message);
      console.error('Error changing password:', error);
    }
  };

// called when ending subscription
const handleEndSubscription = async () => {
  const requestBody = {
    email: user.email,
  };

  const apiEndpoint = 'https://90n4q5y1l2.execute-api.us-west-2.amazonaws.com/endSubscription';

  try {
    const response = await axios.post(apiEndpoint, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // Axios automatically checks for status code in the 2xx range
    console.log('Subscription ended successfully');
    setEndSubMessage("Subscription ended successfully");

    // Update the context
    const updatedContext = { ...userData[0], SubscriptionLevel: { S: "Free" } };
    const updatedUserData = [...userData];
    updatedUserData[0] = updatedContext;
    updateUserData(updatedUserData);

    const messageDelay = 5000; // 5 seconds delay (adjust as needed)
    const messageTimer = setTimeout(() => {
      setEndSubMessage('');
      setShowConfirmationEndSub(false);
    }, messageDelay);

    // Cleanup timeout if the component unmounts
    return () => clearTimeout(messageTimer);

  } catch (error) {
    console.error('There was an error ending your subscription:', error);
    setEndSubMessage("There was an error ending your subscription.");
  }
};

  /*-----------------------------------------

  Conditional Rendering

  --------------------------------------------*/

  const confirmEndSub = () => {
    setShowConfirmationEndSub(true);
  };

  const cancelEndSub = () => {
    setShowConfirmationEndSub(false);
  };

  const confirmDelete = () => {
    setShowConfirmation(true);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const handleDelete = () => {
    deleteUserAccount();
    setShowConfirmation(false);
  };

  /*-----------------------------------------

  HTML

  --------------------------------------------*/

  return (
    <div>
      <div style={containerStyle}>
        {isLoggedIn && (
          <div>
            {!showChangePassword && (
              <div>
                <h2 style={{ fontSize: '3em', fontWeight: 'bold' }}>My Account </h2>

                <p>Take a look at your <a href="./profile" style={{ textDecoration: 'none', color: '#20a7a1', fontWeight: 'bold' }}>dashboard</a>.</p>

                <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Personal Information </h2>
                <h5 style={{ fontSize: '1em' }}> View and edit your personal information</h5>
                <div >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label htmlFor="email" style={{ marginRight: '5px', minWidth: '120px' }}>      Email: </label>
                    <input readOnly type="email" name="email" defaultValue={user.email} style={{ ...inputStyle, backgroundColor: 'lightgray' }} placeholder="Email" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ marginRight: '5px', minWidth: '120px' }}>Full Name: </label>
                    <input name="fullname" defaultValue={user.fullName} onChange={(e) => setNewFullName(e.target.value)} style={inputStyle} placeholder="Full Name" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <label style={{ marginRight: '5px', minWidth: '120px' }}>Phone Number: </label>
                    <input name="phoneNumber" defaultValue={user.phoneNumber} onChange={(e) => setNewPhoneNumber(e.target.value)} style={inputStyle} placeholder="Phone Number" />
                  </div>

                  <button style={{ ...buttonStyle, backgroundColor: '#20a7a1', marginBottom: '10px' }} onClick={() => updateUserAttributes()}>Update Personal Info</button>
                  <div>
                    {changesMadePersonal ? (<p style={{ color: '#dd0000' }}>*There are some changes that are not yet saved.* </p>) : ('')}
                    {updateInfoSuccessMessage && <p style={{ color: '#20a7a1' }}> {updateInfoSuccessMessage}</p>}
                  </div>
                </div>

                <h2 style={{ fontSize: '2em', fontWeight: 'bold', margin: '30px', marginBottom: '10px' }}>Statistics</h2>
                <h5 style={{ fontSize: '1em' }}> View and edit your statistics</h5>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: '20%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <label htmlFor="MRDS" style={{ minWidth: '120px', marginRight: '10px', textAlign: 'right' }}> Diagnostic Score out of 1600: </label>
                      <input type="text" name="MRDS" defaultValue={userData.MRDS} style={{ ...inputStyle, backgroundColor: 'lightgray' }} placeholder="Most recent Score" readOnly />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <label htmlFor="goalScore" style={{ minWidth: '120px', marginRight: '10px', textAlign: 'right' }}>  Goal Score out of 1600: </label>
                      <input type="text" defaultValue={(userData.length > 0 && userData[0].GoalScore !== undefined) ? (userData[0].GoalScore.N || '') : ('')} name="goalScore" onChange={(e) => setgoalScore(e.target.value)} style={inputStyle} placeholder="Goal Score" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                      <label htmlFor="nextTest" style={{ minWidth: '120px', marginRight: '10px', textAlign: 'right' }}>  Date of Next Test: </label>
                      <input type="text" name="nextTest" defaultValue={(userData.length > 0 && userData[0].NextTestDate !== undefined) ? (userData[0].NextTestDate.S || '') : ('')} onChange={(e) => setNextDate(e.target.value)} style={inputStyle} placeholder="MM/DD/YYYY" />
                    </div>
                  </div>
                  <button style={{ ...buttonStyle, backgroundColor: '#20a7a1', marginBottom: '10px' }} onClick={() => updateUserAttributesDynamo()}>Update Statistics</button>
                  {changesMadeStats ? (<p style={{ color: '#dd0000' }}>*There are some changes that are not yet saved.* </p>) : ('')}
                  {updateStatsSuccessMessage && <p style={{ color: '#20a7a1' }}> {updateStatsSuccessMessage}</p>}
                </div>
                <br></br>

                <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Subscription Information </h2>
                <div>


                  {/* Extension to confirm end sub*/}
                  {showConfirmationEndSub ? (
                    <div>
                      <div className="confirmation-popup">
                        <div style={{ padding: '0px ' }}>Are you sure you want to end your subscription?</div>
                        <div>Note: This cannot be undone.</div>
                      </div>
                      <div>
                        <button onClick={cancelEndSub} style={{ ...buttonStyle, backgroundColor: '#20a7a1' }}>
                          Cancel
                        </button>
                      </div>
                      <div>
                        <button onClick={handleEndSubscription} style={buttonStyle}>
                          END SUBSCRIPTION
                        </button>
                      </div>
                    </div>


                  ) : (
                    <div>
                      <div style={{ fontSize: '1em', fontWeight: 'bold' }}>
                        Current Plan: {(userData.length > 0 && userData[0].SubscriptionLevel !== undefined) ? (userData[0].SubscriptionLevel.S) : ("Free")}
                      </div>
                      {isProSubscription ? (
                        <div>
                          {/* <div>
                          Next Due Date:
                        </div> */}
                          <button style={buttonStyle} onClick={confirmEndSub}>End Subscription</button>
                        </div>
                      ) : (
                        <div>
                          <Link to="/#PricingCards" >
                            <button style={{ ...buttonStyle, backgroundColor: '#20a7a1' }}>Check out our Plans&nbsp; &rarr; </button>
                          </Link>
                        </div>
                      )}

                    </div>
                  )}
                  {/* End end sub extension*/}
                  {endSubMessage && <p>{endSubMessage}</p>}

                </div>

                <br></br><br></br>

                <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Manage Account </h2>


                {/* Extension to confirm delete account*/}
                {showConfirmation ? (
                  <div>
                    <div className="confirmation-popup">
                      <div>Are you sure you want to delete your account?</div>
                      <div>Note: All of your data will be lost. This cannot be undone.</div>
                    </div>
                    <div>
                      <button onClick={cancelDelete} style={{ ...buttonStyle, backgroundColor: '#20a7a1' }}>
                        Cancel
                      </button>
                    </div>
                    <div>
                      <button onClick={handleDelete} style={buttonStyle}>
                        DELETE MY ACCOUNT
                      </button>
                    </div>
                  </div>


                ) : (
                  <div>

                    <button onClick={() => setShowChangePassword(true)} style={buttonStyle}>
                      Change My Password
                    </button>
                    <br />
                    <button onClick={confirmDelete} style={buttonStyle}>
                      Delete My Account
                    </button>
                  </div>
                )} {/* End delete account extension*/}
              </div>
            )}

            {/* change the screen to change password screen */}
            {showChangePassword && (
              <div>
                <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize' }}>Password Change</h1>
                <p>Currently logged in with {user.email}</p>
                <div>
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Old Password"
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm New Password"
                    style={fieldStyle}
                  />
                </div>
                <button onClick={handleChangePassword} style={buttonStyle}>
                  Change Password
                </button>
                {error && <p>{error}</p>}
                <br /> <br />
                <button onClick={() => setShowChangePassword(false)}
                  style={{ ...buttonStyle, backgroundColor: '#20a7a1' }}>
                  Go Back
                </button>
              </div>
            )} {/* END change the screen to change password screen */}
            {successMessage && <p>{successMessage}</p>}
          </div>
        )}
        {!isLoggedIn && <p>Nice try</p>}
      </div>
    </div>
  );
};

export default AccountManagement;