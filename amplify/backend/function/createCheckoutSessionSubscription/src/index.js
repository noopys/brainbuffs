const AWS = require('aws-sdk');
const Stripe = require('stripe');

const secretsManager = new AWS.SecretsManager();
let stripe; 

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
   if (!stripe) {
        const stripeApiKey = await getStripeApiKey();
        stripe = new Stripe(stripeApiKey);
    }
  //Parse Body 
  const requestBody = JSON.parse(event.body)
  const product = requestBody.product
  //Price ID Map 
  const priceIdMap = {
    practice:"price_1OfSsWKQZlfQBbZS8b2JlHrs" ,
    pro:"price_1OVyvKKQZlfQBbZSLFVjZtRx",
  }
  
  //Get correct priceId
  const priceId = priceIdMap[product];
  
  // Define allowed origins to include your production domain and localhost
  const allowedOrigins = [
    'https://brainbuffstutoring.com',
    'http://localhost:3000' // Replace 3000 with your local development port if different
  ];
  //const allowedOrigins = "*"

  // Check the origin of the request
  const origin = event.headers.origin;
  let headers = {
    "Content-Type": "application/json",
  };

  if (allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        ...headers,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: 'You can use POST' }),
    };
  }

  try {
    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `https://www.brainbuffstutoring.com/`,
    cancel_url: `https://www.brainbuffstutoring.com/`,
    automatic_tax: { enabled: true },
    subscription_data: {
      // Add a 7-day free trial period before the subscription starts
      trial_period_days: 7,
    },
  });

    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    return {
      statusCode: 501,
      headers: headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};