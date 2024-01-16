import React from 'react';
import { useLocation } from 'react-router-dom';

function HomeworkAnswered() {
  const location = useLocation();
  const answeredQuestions = location.state.answeredQuestions;

  return (
    <div style={{ border: '1px solid #20a7a1', borderRadius: '10px', margin: '20px auto', fontFamily: 'poppins', borderBottom: '1px solid #20a7a1', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ fontFamily: 'poppins', fontSize: '3em', fontWeight: 'bold', textTransform: 'capitalize', textAlign: 'center', marginBottom: '20px' }}>Practice Results</h1>
      {answeredQuestions.map((question, index) => (
        <div key={index} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #20a7a1', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '10px' }}>Question {index + 1}</h3>
          {question.imageUrl && (
            <img src={question.imageUrl} alt={`Question ${index + 1}`} style={{ maxWidth: '100%', marginBottom: '15px', borderRadius: '8px' }} />
          )}
          <p><strong>Your Answer:</strong> {question.Answer}</p>
          <p><strong>Correct Answer:</strong> {question.CorrectAnswer}</p>
          {question.IsCorrect ? (
            <p style={{ color: 'green', marginTop: '10px' }}>Your answer is correct!</p>
          ) : (
            <p style={{ color: 'red', marginTop: '10px' }}>Your answer is incorrect.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default HomeworkAnswered;
