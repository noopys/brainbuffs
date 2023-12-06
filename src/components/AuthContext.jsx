// AuthContext.js
import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Perform authentication logic here
    // Set isLoggedIn to true and set user data upon successful login
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic here
    // Set isLoggedIn to false and clear user data
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
