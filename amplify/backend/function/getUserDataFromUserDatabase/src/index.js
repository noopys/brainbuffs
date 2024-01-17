const AWS = require('aws-sdk');

exports.handler = async (event) => {
    const username = JSON.parse(event.body).username; // Assuming you pass the username as an event parameter

    const dynamodb = new AWS.DynamoDB();
    const params = {
        TableName: 'UserDatabase',
        KeyConditionExpression: 'UserId = :userId',
        ExpressionAttributeValues: {
            ':userId': { S: username }
        }
    };

    try {
        const dbRes = await dynamodb.query(params).promise();
        if (dbRes && dbRes.Items && dbRes.Items.length > 0) {
            console.log('Retrieved items from DynamoDB:', dbRes.Items);
            // You can return the data as needed
            return {
                statusCode: 200,
                body: JSON.stringify(dbRes.Items),
            };
        } else {
            console.log('No items found in DynamoDB with the specified partition key');
            // Handle the case where no items are found for the partition key
            return {
                statusCode: 404,
                body: 'No items found'
            };
        }
    } catch (error) {
        console.error('Error fetching data from DynamoDB:', error);
        return {
            statusCode: 500,
            body: 'Error fetching data from DynamoDB'
        };
    }
};