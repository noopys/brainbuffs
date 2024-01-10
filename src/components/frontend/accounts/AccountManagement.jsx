import React, { useState, useEffect  } from 'react';
import { Auth } from 'aws-amplify';
import { useAuth } from './AuthContext';

const AccountManagement = () => {
  // get info from local auth session
  const { isLoggedIn, logout, user, updateUser } = useAuth();

  // const for change phone# or full name
  const [newPhoneNumber, setNewPhoneNumber] = useState(null);
  const [newFullName, setNewFullName] = useState(null);
  

  // const for changing password
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const for user messages
  const [error, setError] = useState('');
  const [updateInfoSuccessMessage, setupdateInfoSuccessMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const containerStyle = {
    border: '1px solid #20a7a1',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '50px auto',
    fontFamily: 'poppins',
    borderBottom: '1px solid #20a7a1',
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    width: '300px',
    marginBottom: '10px',
    alignItems: 'center', 
  };

  const buttonStyle = {
    backgroundColor: '#dd0000', 
    color: '#fff', // White text
    padding: '8px 16px', // Adjust padding as needed
    border: 'none',
    borderRadius: '6px',
    marginTop: '10px',
    cursor: 'pointer', // Show pointer on hover
    width: '40%',
    flex: ''
  };

  const fieldStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    width: '300px',
  };

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

  useEffect(() => {
    // Whenever the 'newFullName' variable changes, update the context
    if (newFullName !== null) {
      const updatedContext = { ...user, fullName: newFullName };
      updateUser(updatedContext);
      // console.log('updated Fullname', user);
    }
  }, [newFullName]);

  useEffect(() => {
    // Whenever the 'newPhoneNumber' variable changes, update the context
    if (newPhoneNumber !== null)  {
      const updatedContext = { ...user, phoneNumber: newPhoneNumber };
      updateUser(updatedContext);
      // console.log('updated phone #', user);
    }
  }, [newPhoneNumber]);

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
        'custom:PhoneNumber' : user.phoneNumber,
      });
      console.log('User attributes updated successfully', user.fullName, user.phoneNumber);
      setupdateInfoSuccessMessage('User attributes updated successfully!');

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

  const handleChangePassword = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(currentUser, oldPassword, newPassword);
      console.log('Password changed successfully');
      // Handle successful password change, e.g., show a success message
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

  return (
    <div>
      <div style={containerStyle}>
      {isLoggedIn && (
        <div>
          {!showChangePassword && (
            <div>
              <h2 style={{fontSize: '3em', fontWeight: 'bold'}}>My Account </h2>

              <p>Take a look at your <a href="./profile" style={{textDecoration: 'none', color: '#20a7a1', fontWeight: 'bold'}}>dashboard</a>.</p>

              <h2 style={{fontSize: '2em', fontWeight: 'bold'}}>Personal Information </h2>
              <h5 style={{fontSize: '1em'}}> View and edit your personal information</h5>
              <div >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <label htmlFor="email" style={{ marginRight: '5px', minWidth: '120px' }}>      Email: </label>
                  <input readOnly type="email" name="email" defaultValue={user.email} style={{...inputStyle, backgroundColor: 'lightgray' }} placeholder="Email" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <label style={{ marginRight: '5px', minWidth: '120px' }}>Full Name: </label>
                  <input name="fullname" defaultValue={user.fullName} onChange={(e) => setNewFullName(e.target.value)} style={inputStyle} placeholder="Full Name"/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <label style={{ marginRight: '5px', minWidth: '120px' }}>Phone Number: </label>
                  <input name="phoneNumber" defaultValue={user.phoneNumber} onChange={(e) => setNewPhoneNumber(e.target.value)} style={inputStyle} placeholder="Phone Number"/>
                </div>
                <button style={{...buttonStyle, backgroundColor: '#20a7a1', marginBottom: '10px'}} onClick={() => updateUserAttributes()}>Update my Info</button>

                {updateInfoSuccessMessage && <p style={{color: '#20a7a1'}}> {updateInfoSuccessMessage}</p>}
              </div>

              <br></br>
              <h2 style={{fontSize: '2em', fontWeight: 'bold'}}>Subscription Information </h2>
              <div>
                <div>
                  Current Plan: 
                </div>
                <div>
                  Next Due Date:
                </div>

                <button style={{...buttonStyle, backgroundColor: '#20a7a1'}} >Manage Subscription</button>

              </div>

              <br></br><br></br>

              <h2 style={{fontSize: '2em', fontWeight: 'bold'}}>Manage Account </h2>
              <button onClick={() => setShowChangePassword(true)} style={buttonStyle}>
                Change My Password
              </button>
              <br /> <br />
              <button onClick={confirmDelete} style={buttonStyle}>
                Delete My Account
              </button>
              

              {/* Extension to confirm delete account*/}
              {showConfirmation && (
                <div>
                <div className="confirmation-popup">
                  <p style={{padding: '8px 10px'}}>Are you sure you want to delete your account?</p>
                  <p>Note: All of your data will be lost. This cannot be undone.</p>
                </div>
                <div>
                  <button onClick={cancelDelete} style={{...buttonStyle, backgroundColor: '#20a7a1'}}>
                    Cancel
                  </button>
                </div>
                <div>
                  <button onClick={handleDelete} style={buttonStyle}>
                    I am sure. Delete My account.
                  </button>
                </div>
                </div>
                  
                
              )} {/* End delete account extension*/}
            </div>
          )}

          {/* change the screen to change password screen */}
          {showChangePassword && (
            <div>
              <h1 style={{fontFamily: 'Arial, sans-serif', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize'}}>Password Change</h1>
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
                style={{...buttonStyle, backgroundColor: '#20a7a1'}}>
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