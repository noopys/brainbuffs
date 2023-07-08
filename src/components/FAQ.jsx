import React from "react";

function FAQPage() {
  const faqData = [
    // {
    //   question: "How much does it cost?",
    //   answer: "We offer two different tutoring packages depending on your needs. Each package includes one month of tutoring, with the option of either one session per week or two sessions per week. Additionally, both packages include personalized homework assignments and anytime direct help from us. The once-a-week package is priced at $400, while the twice-a-week package costs $750.",
    // },
    {
      question: "Can I do virtual sessions?",
      answer: "Yes! We can do virtual sessions upon request.",
    },
    {
      question: "How do I know my scores will increase?",
      answer: "We offer a money back guarantee. If your SAT score doesn't increase, you get 100% money back.",
    },
    {
      question: "Do you have a referral program?",
      answer: "Of course we do! If you refer a friend and they join, both of you will receive a $50 discount off your tutoring package.",
    },
    {
      question: "What about the new online SAT?",
      answer: "BrainBuffs specializes in the new online SAT. Our tutors are all specifically trained with the new online SAT in mind, unlike tutors from other companies. We teach students how to suceed with the new test format in addition to the concepts they need to know",
    },
    // Add more FAQ items as needed
  ];

  const containerStyle = {
    backgroundColor: "#f1f1f1",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const backgroundStyle = {
    backgroundColor: "#f1f1f1",
    width: '100%'
  }

  return (
    <div style={backgroundStyle}>
      <div style={containerStyle}>
        <h1>Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <div key={index}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
