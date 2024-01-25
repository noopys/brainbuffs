const AWS = require('aws-sdk');
const Stripe = require('stripe');

// Set up AWS services
const CognitoIdentityServiceProvider = AWS.CognitoIdentityServiceProvider;
const cognito = new CognitoIdentityServiceProvider();
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const secretsManager = new AWS.SecretsManager();
let stripe;

async function getStripeApiKey() {
    const secretId = 'stripe_api_key';
    const data = await secretsManager.getSecretValue({ SecretId: secretId }).promise();

    if ('SecretString' in data) {
        const secret = JSON.parse(data.SecretString);
        return secret.stripe_api_key;
    }
    throw new Error("Secret not found");
}

exports.handler = async (event) => {
    if (!stripe) {
        const stripeApiKey = await getStripeApiKey();
        stripe = new Stripe(stripeApiKey);
    }
    try {
        const stripeEvent = JSON.parse(event.body);
        const userPoolId = 'us-east-1_BzTDSGgB6';

        console.log(`Received Stripe event: ${stripeEvent.type}, ID: ${stripeEvent.id}`);

        if (stripeEvent.type === 'customer.subscription.created') {
            const subscriptionId = stripeEvent.data.object.id;
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);
            const customerId = subscription.customer;
            const customer = await stripe.customers.retrieve(customerId);
            const email = customer.email;

            console.log(`Customer email: ${email}`);

            // Define your product IDs for pro and practice
            const proProductId = 'prod_PKeDdDmvyGUQWV';  // Replace with your actual product ID for pro
            const practiceProductId = 'prod_PKeD6Cu98sj1Fy'; // Replace with your actual product ID for practice

            let subscriptionLevel;
            // Check the product ID and assign subscription level
            if (subscription.items.data[0].price.product === proProductId) {
                subscriptionLevel = 'pro';
            } else if (subscription.items.data[0].price.product === practiceProductId) {
                subscriptionLevel = 'practice';
            } else {
                console.log('Product ID does not match known products');
                return;
            }

            const listUsersParams = {
                UserPoolId: userPoolId,
                Filter: `email = "${email}"`,
                Limit: 1
            };

            const cognitoUsers = await cognito.listUsers(listUsersParams).promise();

            let userId;
            if (cognitoUsers.Users.length > 0) {
                userId = cognitoUsers.Users[0].Username;
                console.log(`Found Cognito userId: ${userId}`);

                // Update DynamoDB with the appropriate subscription level
                const updateParams = {
                    TableName: 'UserDatabase',
                    Key: {
                        'UserId': userId
                    },
                    UpdateExpression: 'set SubscriptionLevel = :sl',
                    ExpressionAttributeValues: {
                        ':sl': subscriptionLevel
                    },
                    ReturnValues: 'UPDATED_NEW'
                };

                await dynamoDB.update(updateParams).promise();
                console.log(`Updated DynamoDB for UserId: ${userId} with SubscriptionLevel: ${subscriptionLevel}`);
            } else {
                console.log(`No Cognito user found for email: ${email}`);
            }
        }

        //On end 
        if (stripeEvent.type === 'customer.subscription.deleted') {
            const subscriptionId = stripeEvent.data.object.id;
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);
            const customerId = subscription.customer;
            const customer = await stripe.customers.retrieve(customerId);
            const email = customer.email

            console.log(`Customer email: ${email}`);

            const listUsersParams = {
                UserPoolId: userPoolId,
                Filter: `email = "${email}"`,
                Limit: 1
            };

            const cognitoUsers = await cognito.listUsers(listUsersParams).promise();

            let userId;
            if (cognitoUsers.Users.length > 0) {
                userId = cognitoUsers.Users[0].Username;
                console.log(`Found Cognito userId: ${userId}`);

                // Update DynamoDB
                const updateParams = {
                    TableName: 'UserDatabase',
                    Key: {
                        'UserId': userId
                    },
                    UpdateExpression: 'set SubscriptionLevel = :sl',
                    ExpressionAttributeValues: {
                        ':sl': 'free'
                    },
                    ReturnValues: 'UPDATED_NEW'
                };

                await dynamoDB.update(updateParams).promise();
                console.log(`Updated DynamoDB for UserId: ${userId} with SubscriptionLevel: free`);
            } else {
                console.log(`No Cognito user found for email: ${email}`);
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Webhook received successfully!' }),
        };
    } catch (error) {
        console.error(`Error in webhook: ${error.message}`);

        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Webhook handler failed.' }),
        };
    }
};
