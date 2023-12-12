import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useAuth } from './AuthContext';

const AccountManagement = () => {
  const [user, setUser] = useState(null);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { logout } = useAuth();

  const buttonStyle = {
    backgroundColor: '#FF0000', // Blue color
    color: '#fff', // White text
    padding: '8px 16px', // Adjust padding as needed
    border: 'none', // Remove border if needed
    borderRadius: '4px', // Add border-radius if needed
    cursor: 'pointer', // Show pointer on hover
  };

  const fieldStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
    } catch (error) {
      // Handle error fetching user data
      console.error('Error fetching user:', error);
    }
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
      setSuccessMessage('Account deleted successfully, you will be redirected to the sign in screen');
      console.log('Account deleted successfully, you will be redirected to the sign in screen');

      const logoutDelay = 10000; // 2 seconds delay (adjust as needed)
      setTimeout(() => {
        logout();
      }, logoutDelay);
    } catch (error) {
      // Handle error deleting account
      console.error('Error deleting account:', error);
    }
  };

  const handleChangePassword = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(currentUser, oldPassword, newPassword);
      console.log('Password changed successfully');
      // Handle successful password change, e.g., show a success message
      setSuccessMessage('Password changed successfully, you will be redirected to the sign in screen');

      const logoutDelay = 10000; // 2 seconds delay (adjust as needed)
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
      {user && (
        <div>
          {!showChangePassword && (
            <div>
              <h2>Welcome, {user.attributes.email}</h2>
              <button onClick={() => setShowChangePassword(true)} style={buttonStyle}>
                Change My Password
              </button>
              <br /> <br />
              <button onClick={deleteUserAccount} style={buttonStyle}>
                Delete My Account
              </button>
            </div>
          )}
          {showChangePassword && (
            <div>
              <h2>Changing the password for {user.attributes.email}</h2>
              <div>
                <label>
                  Old Password: 
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    style={fieldStyle}
                  />
                </label>
              </div>
              <div>
                <label>
                  New Password: 
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={fieldStyle}
                  />
                </label>
              </div>
              <div>
                <label>
                  Confirm New Password:
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={fieldStyle}
                  />
                </label>
              </div>
              <button onClick={handleChangePassword} style={buttonStyle}>
                Change Password
              </button>
              {error && <p>{error}</p>}
              <br /> <br />
              <button onClick={() => setShowChangePassword(false)} 
                style={{backgroundColor: '#007bff', // Blue color
                  color: '#fff', // White text
                  padding: '8px 16px', // Adjust padding as needed
                  border: 'none', // Remove border if needed
                  borderRadius: '4px', // Add border-radius if needed
                  cursor: 'pointer', // Show pointer on hover
                }}>
                Go Back
              </button>
            </div>
          )}
          {successMessage && <p>{successMessage}</p>}
        </div>
      )}
      {!user && <p>Loading user data...</p>}
    </div>
  );
};

export default AccountManagement;