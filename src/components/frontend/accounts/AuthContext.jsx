// AuthContext.js
import React, { useState, useContext, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import AWS from 'aws-sdk';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // isLoggedIn- Boolean Value set true if user is logged in, false if they are not logged in
  // user-      Data about the user as shown in aws cognito. 
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
      const sessionToken = localStorage.getItem('sessionToken');
      if (sessionToken) {
        setIsLoggedIn(true);
        setUser(JSON.parse(sessionToken)); // Assuming sessionToken is a JSON string
        // Fetch data from DynamoDB upon login
        const username = JSON.parse(sessionToken).username; // Assuming username is available in userData
        console.log(username)
        if (username) {
          await fetchDataFromDynamoDB(username);
        }
      }
    } catch (error) {
      console.error('Error loading session token:', error);
    }
  };

  const fetchDataFromDynamoDB = async (username) => {
    AWS.config.update({
      accessKeyId: 'AKIA4QANJDW6PUIFWOO5',
      secretAccessKey: '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',
      region: 'us-east-1'
    });

    const dynamodb = new AWS.DynamoDB();
    const params = {
      TableName: 'UserDatabase',
      KeyConditionExpression: 'UserId = :userId', // Replace 'UserId' with your actual partition key attribute name
      ExpressionAttributeValues: {
        ':userId': { S: username } // Replace with the specific partition key value you want to query
      }
    };
    
    try {
      const dbRes = await dynamodb.query(params).promise();
      if (dbRes && dbRes.Items && dbRes.Items.length > 0) {
        console.log('Retrieved items from DynamoDB:', dbRes.Items);
        // Set the retrieved data to user state
        setUserData(dbRes.Items);
        // Store user data in local storage
        localStorage.setItem('userData', JSON.stringify(dbRes.Items));
      } else {
        console.log('No items found in DynamoDB with the specified partition key');
        // Handle the case where no items are found for the partition key
      }
    } catch (error) {
      console.error('Error fetching data from DynamoDB:', error);
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

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, userData, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
