import React, { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function HomeworkAnswered() {
  const location = useLocation();
  const answeredQuestions = location.state.answeredQuestions;
  const latexContainerRef = useRef(null);

  useLayoutEffect(() => {
    adjustLatexFontSize(); // Call on mount and when the window is resized
    window.addEventListener('resize', adjustLatexFontSize);
    return () => window.removeEventListener('resize', adjustLatexFontSize);
  }, []);

  const adjustLatexFontSize = () => {
    document.querySelectorAll('.latex-container').forEach(container => {
      if (container) {
        const containerWidth = container.offsetWidth;
        const cardWidth = container.parentElement.clientWidth;
        const latexWidth = container.getBoundingClientRect().width;

        let fontSize;

        if (latexWidth > cardWidth) {
          fontSize = 18;
          while (latexWidth > cardWidth && fontSize > 6) {
            fontSize -= 1;
            container.style.fontSize = `${fontSize}px`;
            const updatedLatexWidth = container.scrollWidth;
            if (updatedLatexWidth <= cardWidth) break;
          }
        } else {
          fontSize = 18;
          while (latexWidth + 10 < cardWidth && fontSize < 36) {
            fontSize += 1;
            container.style.fontSize = `${fontSize}px`;
            const updatedLatexWidth = container.scrollWidth;
            if (updatedLatexWidth + 10 >= cardWidth) break;
          }
        }
      }
    });
  };

  return (
    <div style={{ border: '1px solid #20a7a1', borderRadius: '10px', margin: '20px auto', fontFamily: 'poppins', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
      <h1 style={{ fontFamily: 'poppins', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize', textAlign: 'center', marginBottom: '20px' }}>Practice Results</h1>
      {answeredQuestions.map((question, index) => (
        <div key={index} style={{ marginBottom: '30px', padding: '20px', borderTop: '1px solid #20a7a1', borderRadius: '0px', width: '100%' }}>
          <h3 style={{ marginBottom: '10px', textDecoration: 'underline' }}>Question {index + 1}</h3>
          {question.questionText ? (
            <div style={{ overflowX: "auto" }}>
              <div
                className="latex-container" // Add class for LaTeX container
                ref={latexContainerRef} // Ref for LaTeX container
              >
                <InlineMath math={question.questionText} />
              </div>
            </div>
          ) : (
            <div>
              {question.imageUrl && (
                <img src={question.imageUrl} alt={`Question ${index + 1}`} style={{ maxWidth: '100%', marginBottom: '15px', borderRadius: '8px' }} />
              )}
            </div>
          )}
          <div style={{ marginTop: '10px' }}><strong>Your Answer:</strong> {question.Answer}</div>
          <div><strong>Correct Answer:</strong> {question.CorrectAnswer}</div>
          {question.IsCorrect ? (
            <div style={{ color: 'green', marginTop: '10px', fontSize: '24px' }}>Your answer is correct!</div>
          ) : (
            <div style={{ color: 'red', marginTop: '10px', fontSize: '24px' }}>Your answer is incorrect.</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HomeworkAnswered;
