const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
AWS.config.update({region: 'us-east-1'});

exports.handler = async (event, context) => {
    let userName = JSON.parse(event.body).UserId;
    let userProfile = JSON.parse(event.body).UserProfile;

    // Additional columns
    let inCurrSess = false;
    let currHWNum = 0;

    var params = {
        TableName: "UserDatabase",
        Item: {
            UserId: userName,
            UserProfile: userProfile,
            InCurrSess: inCurrSess,
            CurrHWNum: currHWNum
        }
    };

    try {
        const data = await dynamoDB.put(params).promise();
        return { statusCode: 200, body: JSON.stringify(data) };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify(err) };
    }
};