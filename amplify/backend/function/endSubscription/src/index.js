const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();
const Stripe = require('stripe');

// Function to retrieve the Stripe API key from AWS Secrets Manager
async function getStripeApiKey() {
    const secretId = 'stripe_api_key'; // Replace with your secret name
    const data = await secretsManager.getSecretValue({ SecretId: secretId }).promise();

    if ('SecretString' in data) {
        const secret = JSON.parse(data.SecretString);
        return secret.stripe_api_key; // Replace with your key name in the secret
    }
    throw new Error("Secret not found");
}

exports.handler = async (event) => {
    // Retrieve the Stripe API key using the getStripeApiKey function
    const stripeApiKey = await getStripeApiKey();
    const stripe = Stripe(stripeApiKey);

    // Assuming the email is passed in the request body
    const email = JSON.parse(event.body).email;
    
    try {
        // Step 1: Find Customer ID by Email
        const customers = await stripe.customers.list({
            email: email,
            limit: 1,
        });

        if (customers.data.length === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'Customer not found.' }),
            };
        }
        // console.log(customers);
        const customerId = customers.data[0].id;

        // console.log("customer ID found for user", email, customerId);

        // Step 2: Find Active Subscriptions for the Customer
        const subscriptions = await stripe.subscriptions.list({
            customer: customerId,
            status: 'active',
            status: 'trialing',
        });

        // console.log("subscriptions", subscriptions);

        if (subscriptions.data.length === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'No active subscriptions found for customer.' }),
            };
        }

        // Step 3: Cancel the First Active Subscription
        const subscriptionId = subscriptions.data[0].id;
        await stripe.subscriptions.cancel(subscriptionId);

        // Return success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Subscription ${subscriptionId} cancelled successfully.` }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
