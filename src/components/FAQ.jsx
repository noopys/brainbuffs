import React from "react";

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
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        <h1 className="mb-4 text-center">Frequently Asked Questions</h1>
        <div className="accordion" id="faqAccordion">
          {faqData.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                  {faq.question}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
