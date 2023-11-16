// This is your test secret API key.
const stripe = require('stripe')('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');
const express = require('express');
const app = express();
app.use(express.static('public'));
const cors = require('cors');
app.use(cors());


const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1OC5SfKQZlfQBbZSwwoYIbVg',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/home`,
    cancel_url: `${YOUR_DOMAIN}/faq`,
    automatic_tax: {enabled: true},
  });
  //console.log(session.url)
  //res.redirect(303, session.url);
  res.json({ url: session.url });
});

app.listen(3001, () => console.log('Running on port 3001'));