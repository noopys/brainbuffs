// AuthContext.js
import React, { useState, useContext, useEffect} from 'react';
import { Auth } from 'aws-amplify';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadSessionToken();
  }, []);

  const loadSessionToken = async () => {
    try {
      const sessionToken = localStorage.getItem('sessionToken');
      if (sessionToken) {
        // If session token is available, set the user and mark as logged in
        setIsLoggedIn(true);
        setUser(JSON.parse(sessionToken)); // Assuming sessionToken is a JSON string
      }
    } catch (error) {
      console.error('Error loading session token:', error);
    }
  };

  const login = (userData) => {
    // Set isLoggedIn to true and set user data upon successful login
    setIsLoggedIn(true);
    setUser(userData);

    // Store the session token locally
    localStorage.setItem('sessionToken', JSON.stringify(userData));
  };

  const logout = async () => {
    // Perform logout logic here
    await Auth.signOut();

    // Clear the session token from localStorage
    localStorage.removeItem('sessionToken');

    // Set isLoggedIn to false and clear user data
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = './SuccessfulSignOut';
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
