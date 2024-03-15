import React from 'react';
import { InlineMath } from 'react-katex';

function ReviewQuestion({ question, questionIndex }) {
  return (
    <div style={{ paddingTop: '20px', borderBottom: '1px solid #20a7a1', borderRadius: '0px', width: '100%' }}>
      <h3 style={{ marginBottom: '10px', textDecoration: 'underline' }}>Question {questionIndex + 1}</h3>
      {question.questionText ? (
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <div className="latex-container">
            <InlineMath math={question.questionText} />
          </div>
        </div>
      ) : (
        question.questionImage && (
          <img src={question.questionImage} alt={`Question ${questionIndex + 1}`} style={{ maxWidth: '100%', marginBottom: '15px', borderRadius: '8px' }} />
        )
      )}
      {question.IsCorrect ? (
        <div style={{ backgroundColor: 'lightgreen', borderRadius: '5px' }}>
          <div style={{ marginTop: '15px', fontSize: '18px' }}><strong>Your Answer:</strong> {question.Answer}</div>
          <div style={{ fontSize: '18px' }}><strong>Correct Answer:</strong> {question.CorrectAnswer}</div>
          <p style={{ color: 'darkgreen', marginTop: '10px', fontSize: '24px' }}>Your answer is correct!</p>
        </div>
      ) : (
        <div style={{ backgroundColor: 'red', borderRadius: '5px' }}>
          <div style={{ marginTop: '15px', fontSize: '18px' }}><strong>Your Answer:</strong> {question.Answer}</div>
          <div style={{ fontSize: '18px' }}><strong>Correct Answer:</strong> {question.CorrectAnswer}</div>
          <p style={{ color: 'darkred', marginTop: '10px', fontSize: '24px' }}>Your answer is incorrect!</p>
        </div>
      )}
    </div>
  );
}

export default ReviewQuestion;
