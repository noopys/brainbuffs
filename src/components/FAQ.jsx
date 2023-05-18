import React from "react";

function FAQPage() {
  const faqData = [
    {
      question: "How much does it cost?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "Can I do virtual sessions?",
      answer: "Yes! We can do virtual sessions upon request.",
    },
    {
      question: "How do I know my scores will increase?",
      answer: "We offer a money back guarantee. If your SAT score doesn't increase, you get 100% money back",
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
