import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useAuth } from './AuthContext'
import {updateUser} from './helpers/updateUser';

function Homework() {

  const question = {
    options: ["A", "B", "C", "D"],
  };
  //State for everything needed to store homework question state 
  const { isLoggedIn, user, userData, login, logout } = useAuth();
  const [response, setResponse] = useState(null);
  const [recordId, setRecordId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null)
  const [userProfile, setUserProfile] = useState(null);
  const [questionData, setQuestionData] = useState({});

  //Load new user Data each time it changes 
  useEffect(() => {
    if (userData && userData.length > 0) {
      console.log(userData)
      const userProf = userData[0]["UserProfile"].S;
      console.log(userProf)
      setUserProfile(userProf);
    }
  }, [userData]);

  //Fetch new question on load when userProfile updates 
  useEffect(() => {
    if(userProfile){
      fetchQuestion()
    }
  }, [userProfile]); // Add userProfile as a dependency

  //set UseState of selected option
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  //Handle change of answer field 
  const handleInputChange = (event) => {
    setSelectedOption(event.target.value);
  };

 //Fetch a new question 
  const fetchQuestion = async () => {
    //Reset ouput of field
    setSelectedOption(null);
    setIsCorrect(null)

    //
    let userTemp = '';
    if (user && user.username) {
      userTemp = user.username
    }
    let prof = JSON.parse(userProfile)
    const userId = userTemp;
    const requestData = {
      userId: userId,
      userProfile: prof,
    }
    try {
      // Using fetch instead of axios
      const response = await fetch('https://fm407nxajh.execute-api.us-west-2.amazonaws.com/getNextQuestion', {
        method: 'POST', // GET is the default method, but it's good to be explicit
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData),
        userId: "User1"
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setRecordId(data.recordId)
      setQuestionData(data);
      console.log(data)
    } catch (err) {
      console.error('Error fetching question:', err);
    }
  };

  //Submit answered question to database 
  const handleSubmit = async () => {
    //Take in current User Profile, Question They are on and the answer they selected and update the profile based on the question
    let userTemp = '';
    if (user && user.username) {
      userTemp = user.username
    }
    let prof = JSON.parse(userProfile)
    const userId = userTemp;
    const requestData = {
      userId: userId,
      userProfile: prof,
    }
    //Update Users profile based on concepts in this question 
    updateUser(userTemp, questionData, selectedOption); 

    //
    console.log(selectedOption)
    console.log(questionData.answer)
    //calculate if correct 
    const userCorrect = selectedOption == questionData.answer
    if (userCorrect) {
      setIsCorrect("correct")
    }
    else {
      setIsCorrect("incorrect")
    }
    console.log(questionData.answer)
    //Prepare POST 
    const data = {
      UserId: user.username,
      RecordId: recordId,
      Answer: selectedOption,
      CorrectAnswer: questionData.Answer,
      IsCorrect: userCorrect,
    };

    try {
      const response = await fetch('https://fm407nxajh.execute-api.us-west-2.amazonaws.com/gradeHomework', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setResponse(responseData);
    } catch (error) {
      console.error('Failed to grade homework:', error);
    }
  };

  //Don't show homework if user is not logged in 
  if (!isLoggedIn) {
    return <div style={{ paddingBottom: "100px", paddingTop: "50px", fontSize: "30px" }}>Please sign in to view homework.</div>;
  }

  //Homework UI 
  return (
    <>
      <div className="flex" style={{ margin: 'auto' }}>
        <Card className="bg-light" style={{ width: '30rem', marginTop: '20px' }}>
          <Card.Body>
            {/* <Card.Img variant="top" src={questionData.imageUrl} alt="Question Image" /> */}
            {!questionData.imageUrl ? (
              <div className="flex justify-center items-center h-64">
                Question Image Loading .... If nothing loads press check then next question and wait again
                {/* <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div> */}
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
                      backgroundColor: selectedOption === option ? '#f0f0f0' : '',
                      cursor: 'pointer'
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
        <div className="flex flex-col ml-5 mt-3">
          <button onClick={handleSubmit} className="btn btn-success mt-3">Check</button>
          <button onClick={fetchQuestion} className="btn btn-dark mt-3">Next Question</button>
          {
            (isCorrect === "correct") && (
              <div className="p-3 text-center">
                <h2 className="text-xl font-bold">Correct!</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
            )
          }
          {
            (isCorrect === "incorrect") && (
              <div className="p-3 text-center">
                <h2 className="text-xl font-bold">Incorrect!</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>

              </div>
            )
          }
        </div>
      </div>
    </>

  );
}

export default Homework;

