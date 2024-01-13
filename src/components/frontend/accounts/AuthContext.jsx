// AuthContext.js
import React, { useState, useContext, useEffect } from 'react';
import { Auth } from 'aws-amplify';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // isLoggedIn- Boolean Value set true if user is logged in, false if they are not logged in
  // user- Data about the user as shown in aws cognito. 
//               user.email has the email 
//               user.username has the randomly generated username 
//               user.fullName is the full name
//               user.phoneNumber is the phone number
  // userData-  An array that is fetched from dynamoDB. Each entry in the array belongs to the user and is a question with all its associated metadata
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    loadSessionToken();
  }, []);

  const loadSessionToken = async () => {
    try {
      // get cached user credentials
      const sessionToken = localStorage.getItem('sessionToken');
      if (sessionToken) {
        setIsLoggedIn(true);
        setUser(JSON.parse(sessionToken)); // Assuming sessionToken is a JSON string
        // console.log("used cached session");
      }
      // get cached User Data
      const cachedUserData = localStorage.getItem('userData');
      if (cachedUserData) {
        setUserData(JSON.parse(cachedUserData)); // Assuming sessionToken is a JSON string
        // console.log("used cached userData");
      }
    } catch (error) {
      console.error('Error loading session token:', error);
    }
  };

  const fetchDataFromDynamoDB = async (usernamelocal) => {
    const apiGatewayEndpoint = 'https://fm407nxajh.execute-api.us-west-2.amazonaws.com/getUserData'; // Replace with your API Gateway endpoint

    const requestData = {
      username: usernamelocal,
    };

    try {
      const response = await fetch(apiGatewayEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Specify that you're sending JSON data
        },
        body: JSON.stringify( requestData ), // Convert the data object to a JSON string
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        // console.log('Retrieved USERdata from API Gateway:', JSON.stringify(data));
        // Handle the retrieved data as needed
        
        // Store user data in local storage
        localStorage.setItem('userData', JSON.stringify(data));
      } else {
        console.error('Failed to fetch data from API Gateway');
        // Handle the error case
      }
    } catch (error) {
      console.error('Error fetching data from API Gateway:', error);
    }
  };

  const login = async (credentials) => {
    setIsLoggedIn(true);
    setUser(credentials);
    console.log("Retrieved items from cognito", credentials);
    localStorage.setItem('sessionToken', JSON.stringify(credentials));

    // Fetch data from DynamoDB upon login
    const username = credentials.username; // Assuming username is available in userData
    console.log("fetching username", username);
    if (username) {
      await fetchDataFromDynamoDB(username);
    }
  };

  const logout = async () => {
    await Auth.signOut();
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('userData');

    setIsLoggedIn(false);
    setUser(null);
    window.location.href = './SuccessfulSignOut';
  };

  const updateUser = async (newValue) => {
    setUser(newValue);
    localStorage.setItem('sessionToken', JSON.stringify(newValue));
  };

  const updateUserData = async (newValue) => {
    setUserData(newValue);
    localStorage.setItem('userData', JSON.stringify(newValue));
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, userData, updateUser, updateUserData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
