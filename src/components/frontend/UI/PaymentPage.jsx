import React, { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import {
  Navigate
} from "react-router-dom";
// recreating the `Stripe` object on every render.
// This is your test public API key.
//API Key omitted here
export const CheckoutForm = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const plan = urlParams.get('plan');

  useEffect(() => {
    let url = '';
    let mode = '';
    if (plan === "develyn" || plan === "bearcreek") {
      url = "https://90n4q5y1l2.execute-api.us-west-2.amazonaws.com/create-checkout-session";
      mode="payment";
    } 
    else if (plan === "pro" || plan === "practice") {
      url = "https://90n4q5y1l2.execute-api.us-west-2.amazonaws.com/createCheckoutSessionSubscription";
      mode="subscription";
    }

    if (url) {
      fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product: plan }),
      })
        .then(res => res.json())
        .then(data => {
          window.location.href = data.url;
        });
    }
  }, [plan]);

//console.log(clientSecret);
return (
  <div id="checkout">
    {/* {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )} */}
  </div>
)
}

export const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return (
      <Navigate to="/checkout" />
    )
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.

          If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    )
  }

  return null;
}

