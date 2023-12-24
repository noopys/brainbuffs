const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.lambdaHandler = async (event, context) => {
    let userName = event.body.userName;
    let userProf = event.body.userProf;

    var params = {
        TableName: 'UserDatabase',
        Item: {
            'userName': userName,
            'userProf': userProf
        }
    };

    try {
        const data = await dynamoDB.put(params).promise();
        return { statusCode: 200, body: JSON.stringify(data) };
    } catch (err) {
        return { statusCode: 500, body: JSON.stringify(err) };
    }
};
