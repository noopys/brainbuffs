const AWS = require('aws-sdk');

exports.handler = async (event) => {
    console.log(event);
    const func = JSON.parse(event.body).func;


    // Extract username- used for all functions
    // create dynamo db object
    const username = JSON.parse(event.body).username;
    console.log("function and username", func, username);
    const dynamodb = new AWS.DynamoDB();

    if (func === 'getData') {

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
    } else { // if the function is something other than getData
        console.log("going though updateData");
        const goalScore = JSON.parse(event.body).goalScore;
        const nextTestDate = JSON.parse(event.body).nextTestDate;
        console.log(goalScore, nextTestDate);

        try {
            // Define the parameters for the UpdateItem operation
            const params = {
                TableName: 'UserDatabase', // Replace with your actual table name
                Key: {
                    UserId: { S: username }, // Unique identifier for the user to search
                },
                UpdateExpression: 'SET GoalScore = :newGoalScore, NextTestDate = :newNextTestDate',
                ExpressionAttributeValues: {
                    ':newGoalScore': { N: goalScore },
                    ':newNextTestDate': { S: nextTestDate },
                },
            };

            // Perform the UpdateItem operation
            const updatedItem = await dynamodb.updateItem(params).promise();

            return {
                statusCode: 200,
                body: "Success!"
            };
        } catch (error) {
            console.error('Error updating item:', error);

            return {
                statusCode: 500,
                body: JSON.stringify('Error updating item'),
            };
        }
    }

};