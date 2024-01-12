import React from 'react';
import { useLocation } from 'react-router-dom';

const HomeworkAnswered = () => {
    const location = useLocation();
    const { state } = location;
  
    console.log('state:', state);
  
    if (!state || !state.answeredQuestions) {
      // Handle the case when state or answeredQuestions is not available
      console.log('No data available');
      return <div>No data available</div>;
    }
  
    const { answeredQuestions } = state;
  
    return (
      <div>
        <h1>Homework Answered</h1>
  
        {/* {answeredQuestions.map((answeredQuestion, index) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <p>Question: {answeredQuestion.question}</p>
            <p>Options: {answeredQuestion.options.join(', ')}</p>
            <p>User's Answer: {answeredQuestion.Answer}</p>
            <p>Correct Answer: {answeredQuestion.CorrectAnswer}</p>
            <p>Result: {answeredQuestion.IsCorrect ? 'Correct!' : 'Incorrect!'}</p>
            <hr />
          </div>
        ))} */}
      </div>
    );
  };
  
  export default HomeworkAnswered;
  
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const HomeworkAnswered = () => {
 
//     return (
//       <div>
//         <h1>Homework Answered</h1>
//       </div>
//     );
//   };
  
//   export default HomeworkAnswered;
  