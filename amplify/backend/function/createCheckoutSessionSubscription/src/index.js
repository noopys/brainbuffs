import { Stripe } from 'stripe';

const stripe = new Stripe('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');

export const handler = async (event) => {
  //Parse Body 
  const requestBody = JSON.parse(event.body)
  const product = requestBody.product
  //Price ID Map 
  const priceIdMap = {
    practice:"price_1OVyunKQZlfQBbZSHk9dLA1F" ,
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
          price: price,
          quantity: 1,
        },
      ],
      mode: mode,
      success_url: `https://www.brainbuffstutoring.com/`,
      cancel_url: `https://www.brainbuffstutoring.com/`,
      automatic_tax: { enabled: true },
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

