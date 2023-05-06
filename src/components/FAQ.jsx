import React from "react";

function FAQPage() {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How do I install React?",
      answer: "You can install React by using npm or yarn.",
    },
    {
      question: "What are React components?",
      answer: "React components are reusable building blocks for UI elements.",
    },
    // Add more FAQ items as needed
  ];

  const containerStyle = {
    backgroundColor: "#f1f1f1",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index}>
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQPage;
