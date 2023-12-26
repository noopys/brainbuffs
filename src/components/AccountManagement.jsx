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
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { logout, userData } = useAuth();

  const containerStyle = {
    border: '1px solid #20a7a1',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    margin: '50px auto',
    fontFamily: 'poppins',
    borderBottom: '1px solid #20a7a1',
  };

  const buttonStyle = {
    backgroundColor: '#FF0000', 
    color: '#fff', // White text
    padding: '8px 16px', // Adjust padding as needed
    border: 'none', // Remove border if needed
    borderRadius: '4px', // Add border-radius if needed
    cursor: 'pointer', // Show pointer on hover
    width: '300px',
  };

  const fieldStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    width: '300px',
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
      {user && (
        <div>
          {!showChangePassword && (
            <div>
              <h2>Welcome, </h2>
              <p>{user.attributes.email}</p>
              <button onClick={() => setShowChangePassword(true)} style={buttonStyle}>
                Change My Password
              </button>
              <br /> <br />
              <button onClick={confirmDelete} style={buttonStyle}>
                Delete My Account
              </button>
              {showConfirmation && (
                <div className="confirmation-popup">
                  <p style={{padding: '8px 10px'}}>Are you sure you want to delete your account?</p>
                  <p>Note: This cannot be undone</p>
                  <button onClick={handleDelete} style={buttonStyle}>
                    I am sure. Delete My account.
                  </button>
                  <button onClick={cancelDelete} style={{
                    backgroundColor: '#20a7a1',
                    color: '#fff',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    margin: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    width: '300px'}}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          )}
          {showChangePassword && (
            <div>
              <h1 style={{fontFamily: 'Arial, sans-serif', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize'}}>Password Change</h1>
              <p>Currently logged in with {user.attributes.email}</p>
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
                style={{backgroundColor: '#20a7a1', // Blue color
                  color: '#fff', // White text
                  padding: '8px 16px', // Adjust padding as needed
                  border: 'none', // Remove border if needed
                  borderRadius: '4px', // Add border-radius if needed
                  cursor: 'pointer', // Show pointer on hover
                  width: '300px'
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
    </div>
  );
};

export default AccountManagement;