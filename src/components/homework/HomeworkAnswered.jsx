import React from 'react';
import { useLocation } from 'react-router-dom';

// latex
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function HomeworkAnswered() {
  const location = useLocation();
  const answeredQuestions = location.state.answeredQuestions;

  const buttonStyle = {
    backgroundColor: '#20a7a1',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    maxWidth: '300px'
  };

  return (
    <div style={{ border: '1px solid #20a7a1', borderRadius: '10px', margin: '20px auto', fontFamily: 'poppins', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
      <h1 style={{ fontFamily: 'poppins', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize', textAlign: 'center', marginBottom: '20px' }}>Practice Results</h1>
      {answeredQuestions.map((question, index) => (
        <div key={index} style={{ marginBottom: '30px', padding: '20px', borderTop: '1px solid #20a7a1', borderRadius: '0px', width: '100%' }}>
          <h3 style={{ marginBottom: '10px', textDecoration: 'underline' }}>Question {index + 1}</h3>
          {/* If there is a text version of the question */}
          {question.questionText ? (
            <div>
              <InlineMath math={question.questionText} />
            </div>
          ) : (
            <div>
              {question.imageUrl && (
                <img src={question.imageUrl} alt={`Question ${index + 1}`} style={{ maxWidth: '100%', marginBottom: '15px', borderRadius: '8px' }} />
              )}
            </div>
          )}
          <div style={{marginTop: '10px'}}><strong>Your Answer:</strong> {question.Answer}</div>
          <div><strong>Correct Answer:</strong> {question.CorrectAnswer}</div>
          {question.IsCorrect ? (
            <div style={{ color: 'green', marginTop: '10px', fontSize: '24px' }}>Your answer is correct!</div>
          ) : (
            <div style={{ color: 'red', marginTop: '10px', fontSize: '24px' }}>Your answer is incorrect.</div>
          )}
        </div>
      ))}
      <a href="./homework-intermediate"><button style={buttonStyle}>Back to Practice</button></a><br></br>
    </div>
  );
}

export default HomeworkAnswered;
