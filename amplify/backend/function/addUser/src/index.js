const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
AWS.config.update({region: 'us-east-1'});

exports.handler = async (event, context) => {
    let userName = JSON.parse(event.body).UserId;
    let userProfile = {"Hard":1}; 
    // Log the type and value of userProfile
    // console.log('Type of userProfile:', typeof userProfile);
    // console.log('Value of userProfile:', userProfile);
    // Additional columns
    let inCurrSess = false;
    let currHWNum = 0;
    let englishUserProfile = {"hard":1}; 
    var params = {
        TableName: "UserDatabase",
        Item: {
            UserId: userName,
            UserProfile: userProfile,
            InCurrSess: inCurrSess,
            CurrHWNum: currHWNum,
            EnglishUserProfile: englishUserProfile
        }
    };

    try {
        const data = await dynamoDB.put(params).promise();
        return { statusCode: 200, body: JSON.stringify(data) };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify(err) };
    }
};