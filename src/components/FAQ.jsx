import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // This assumes you've installed Bootstrap through npm/yarn. If you're using CDN, remove this line.

//FAQ Page 
function FAQPage() {
  const faqData = [
    {
      question: "Can I do virtual sessions?",
      answer: "Yes! We can do virtual sessions or in person sessions in the Boulder area.",
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
  ];

  return (
    <div className="bg-light"> {/* This ensures the gray background fills at least the full viewport height */}
      <div className="container py-4"> {/* This centers content and provides padding */}
        <h1 className="mb-4">Frequently Asked Questions</h1> {/* marginBottom class for spacing */}
        {faqData.map((faq, index) => (
          <div key={index} className="mb-3"> 
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
