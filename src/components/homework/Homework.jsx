import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useAuth } from '../frontend/accounts/AuthContext';
import { Oval } from 'react-loader-spinner';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateUser } from '../helpers/updateUser';

function Homework(props) {
  const { updateInCurrSess } = useAuth();
  const { updateUserData } = useAuth();
  const navigate = useNavigate();

  const {state} = useLocation(); 
  const {subject} = state; 
  // console.log('Subject received in Homework.jsx:', subject);

  const question = {
    options: ["A", "B", "C", "D"],
  };

  const { isLoggedIn, user, userData } = useAuth();
  const [response, setResponse] = useState(null);
  const [recordId, setRecordId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [questionData, setQuestionData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // console.log("USER DATA: ", userData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionDataArray, setQuestionDataArray] = useState([]);
  const [answers, setAnswers] = useState(Array(questionDataArray.length).fill(''));
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldFetchQuestions, setShouldFetchQuestions] = useState(true);
  useEffect(() => {
    if (userData && userData.length > 0) {
      //const userProf = userData[0]["UserProfile"].S;
      const userProf = userData[0].UserProfile; // Update this line
      setUserProfile(userProf);
    }
  }, [userData]);

  useEffect(() => {
    if (userProfile && shouldFetchQuestions) {
      fetchQuestion().then(() => {
        setSelectedOption(answers[currentQuestionIndex]);
      });
    }
  }, [userProfile]);

  const handleOptionClick = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option;
    setAnswers(updatedAnswers);
    setSelectedOption(option);
  };

  const handleInputChange = (event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = event.target.value;
    setAnswers(updatedAnswers);
    setSelectedOption(event.target.value);
  };

  const fetchQuestion = async () => {
    setIsLoading(true);
    setSelectedOption(null);
    setIsCorrect(null);

    let userTemp = '';
    if (user && user.username) {
      userTemp = user.username;
    }
    // let prof = JSON.parse(userProfile);
      
    const userId = userTemp;
    const requestData = {
      userId: userId,
      subject: subject,
      // userProfile: prof,
    };

    try {
      const response = await fetch('https://fm407nxajh.execute-api.us-west-2.amazonaws.com/getNextQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Fetched question data:', data); // Add this line for debugging
      setCurrentQuestionIndex(0);
      setRecordId(data[0].recordId);
      setQuestionDataArray(data);
      setQuestionData(data[0]);
      setAnswers(Array(data.length).fill(''));
      setSelectedOption(answers[0]);

      setIsLoading(false);

      // Update InCurrSess to true
      updateInCurrSess(true);
// Set shouldFetchQuestions to false after successful fetch
setShouldFetchQuestions(false);
    } catch (err) {
      console.error('Error fetching question:', err);
    }
  };

  const handleNextQuestionClick = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questionDataArray.length) {
      setCurrentQuestionIndex(nextIndex);
      setQuestionData(questionDataArray[nextIndex]);
      setSelectedOption(answers[nextIndex]);
    } else {
      // fetchQuestion();
      console.log("last question reached");
    }
  };

  const handlePreviousQuestionClick = () => {
    const previousIndex = currentQuestionIndex - 1;

    if (previousIndex >= 0) {
      setCurrentQuestionIndex(previousIndex);
      setQuestionData(questionDataArray[previousIndex]);
      setSelectedOption(answers[previousIndex]);
    }
  };

  const handleSubmit = async () => {
     // Set loading state to true
     setIsSubmitting(true);
    let userTemp = '';
    if (user && user.username) {
      userTemp = user.username;
    }
    // let prof = JSON.parse(userProfile);
    const userId = userTemp;
    const requestData = {
      userId: userId,
      // userProfile: prof,
    };

    // Collect data for all questions
    const submitData = questionDataArray.map((question, index) => {
      // console.log('Question:', question); // Add this line for debugging
      const userCorrect = answers[index] === question.answer;
      return {
        UserId: user.username,
        RecordId: question.recordId,
        Answer: answers[index],
        CorrectAnswer: question.answer,
        IsCorrect: userCorrect,
        imageUrl: question.imageUrl,
        subject: question.subject,
      };
    });
    // console.log('submitData:', submitData); // Add this line for debugging
    try {
      
      // Update user profile for all questions
      await updateUser(userId, questionDataArray, answers,updateUserData, userData);

          // Log the updated user profiles
    //console.log('Updated userProfile:', userData[0].userProfile);
    //console.log('Updated EnglishUserProfile:', userData[0].EnglishUserProfile);
      const response = await fetch('https://fm407nxajh.execute-api.us-west-2.amazonaws.com/gradeHomework', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ requestData, submitData })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setResponse(responseData);
      // Navigate to HomeworkAnswered page with the answered questions data
      // console.log('submitData2222:', submitData); // Add this line for debugging
      
      // Set loading state to false once submission is complete
      setIsSubmitting(false);
      // Update InCurrSess to false
      updateInCurrSess(false);
      navigate('/homework-answered', { state: { answeredQuestions: submitData } });
    } catch (error) {
      console.error('Failed to grade homework:', error);
      // Set loading state to false once submission is complete
      setIsSubmitting(false);
    }
  };

  if (!isLoggedIn) {
    return <div style={{ paddingBottom: "100px", paddingTop: "50px", fontSize: "30px", fontFamily: 'poppins' }}>Please sign in to view the adaptive practice system.</div>;
  }

  return (
    <>
      <div className="flex justify-center items-start" style={{ margin: 'auto' }}>
        <div className="loader"></div>
        <Card className="bg-light" style={{ width: '30rem', marginTop: '20px' }}>
          <Card.Body>
            {!questionData.imageUrl ? (
              <div className="flex justify-center items-center h-64">
                <div className="flex justify-center items-center h-64">
                  {isLoading && (
                    <div className="mt-3 md:mt-0 md:ml-2">
                      <Oval color="#20a7a1" secondaryColor="#20a7a1" />
                    </div>
                  )}
                </div>
                <div className="pl-10">Question Image Loading ...</div>
                
              </div>
            ) : (
              <Card.Img variant="top" src={questionData.imageUrl} alt="Question Image" />
            )}
          </Card.Body>
          {
            ['A', 'B', 'C', 'D'].includes(questionData.answer) ? (
              <ListGroup className="list-group-flush">
                {question.options.map((option, index) => (
                  <ListGroupItem
                    key={index}
                    action
                    onClick={() => handleOptionClick(option)}
                    style={{
                      backgroundColor: selectedOption === option ? '#20a7a1' : '',
                      border: selectedOption === option ? '2px solid #388E3C' : '',
                      color: selectedOption === option ? 'white' : '',
                      fontWeight: selectedOption === option ? 'bold' : '',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {option}
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <input
                type="text"
                value={selectedOption || ''}
                onChange={handleInputChange}
                className="form-control mt-3"
                placeholder="Enter your answer"
              />
            )
          }
        </Card>
      </div>
      <div className="flex flex-col alignItems-center">
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          <button
            style={{ width: '170px' }}
            onClick={handlePreviousQuestionClick}
            className="btn btn-dark mt-3 md:mt-0 md:ml-2"
            disabled={currentQuestionIndex === 0}
          >
            Previous Question
          </button>
          <button
            style={{ width: '150px' }}
            onClick={handleNextQuestionClick}
            className="btn btn-dark mt-3 md:mt-0 md:ml-2"
            disabled={currentQuestionIndex === questionDataArray.length - 1}
          >
            Next Question
          </button>
          <button
          style={{ backgroundColor: "#20a7a1", width: '150px' }}
          onClick={handleSubmit}
          className={`btn btn-success mt-3 md:mt-0 md:ml-2 px-50 ${isSubmitting ? 'disabled' : ''}`}
          disabled={isSubmitting || !answers.every(answer => answer !== '')}
        >
          {isSubmitting ? (
            <Oval color="#fff" secondaryColor="#fff" height={20} width={20} />
          ) : (
            'Submit'
          )}
        </button>
          
        </div>
        {(isCorrect === "correct") && (
          <div className="p-3 text-center">
            <h2 className="text-xl font-bold">Correct!</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {(isCorrect === "incorrect") && (
          <div className="p-3 text-center">
            <h2 className="text-xl font-bold">Incorrect!</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}

export default Homework;

