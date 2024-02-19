import React, { useState, useEffect } from 'react';
// UI
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Oval } from 'react-loader-spinner';
import { useNavigate, useLocation } from 'react-router-dom';
// latex
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { Link } from 'react-router-dom'
// helper files
import { useAuth } from '../frontend/accounts/AuthContext';
import { updateUser } from '../helpers/updateUser';
import { sendMessageToAI } from './helpers/sendMessageToAI.js';
import { Discuss } from 'react-loader-spinner';
import Chat from './Chat.jsx'

function Homework(props) {
  const { updateInCurrSess } = useAuth();
  const { updateUserData } = useAuth();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { subject } = state;
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
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoadingChat, setIsLoadingChat] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionDataArray, setQuestionDataArray] = useState([]);
  const [answers, setAnswers] = useState(Array(questionDataArray.length).fill(''));
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldFetchQuestions, setShouldFetchQuestions] = useState(true);

  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = async () => {
    //Save old state so can open quickly
    let prevState = isChatOpen
    setIsChatOpen(!isChatOpen);
    if (!prevState) {
      //Send initial message with the contents of the question
      setIsLoadingChat(true);
      let messageToSend;
      if (questionData.questionText) {
        messageToSend = "THIS IS BACKGROUND INFO FOR THE AI BOT IT IS NOT THE STUDENTS ANSWER USE IT TO HELP THE STUDENT BUT DONT TELL THEM THIS ANSWER ITS JUST THE QUESTION AND ANSWER SO YOU CAN HELP THEM ALSO NEVER RESPOND WITH LATEX THE NEXT MESSAGE YOU SEND IS TO THE STUDENT THEY HAVENT SEEN THIS: The quesiton is " + questionData.questionText + "and the answer is " + questionData.answer;
      }
      else {
        messageToSend = "RESPOND TO THIS MESSAGE WITH A MESSAGE UNRELATED TO THIS TO INITIATE CONVO WITH STUDENT THIS IS BACKGROUND SO YOU HAVE THE ANSWER: The answer is " + questionData.answer
      }
      const response = await sendMessageToAI(messageToSend);

      setIsLoadingChat(false);
      //Problem in response 
      if (!response || !response.answer) {
        console.log("Error in the response format")
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: "Our AI bot is currently having issues. Please check back later. We appreciate your patience" }]);
      }
      //Response looks good
      else {
        //const data = await response.json();
        const answer = response.answer
        const threadIdToSet = response.threadId
        sessionStorage.setItem('threadId', threadIdToSet);
        setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: answer }]);
      }
    }
  };

  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent the form from submitting in a traditional way
    if (!userInput.trim()) return;

    //start loading spinner 
    setIsLoadingChat(true);

    // Add user message to messages array
    setMessages(prevMessages => [...prevMessages, { sender: 'user', text: userInput }]);
    setUserInput(''); // Clear input field

    const response = await sendMessageToAI(userInput);
    //Stop loading spinner 
    setIsLoadingChat(false);
    //Problem in response 
    if (!response || !response.answer) {
      console.log("Error in the response format")
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: "Our AI bot is currently having issues. Please check back later. We appreciate your patience" }]);
    }
    //Response looks good
    else {
      //const data = await response.json();
      const answer = response.answer
      const threadIdToSet = response.threadId
      sessionStorage.setItem('threadId', threadIdToSet);
      setMessages(prevMessages => [...prevMessages, { sender: 'bot', text: answer }]);
    }
  };

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
        questionText: question.questionText,
      };
    });
    // console.log('submitData:', submitData); // Add this line for debugging
    try {

      // Update user profile for all questions
      await updateUser(userId, questionDataArray, answers, updateUserData, userData);

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
      <div style={{ margin: 'auto' }}>
        <div className="loader"></div>
        <div className="flex flex-col md:flex-row justify-center items-start">
          <Card className="bg-light" style={{ width: '30rem', marginTop: '20px' }}>
            <Card.Body>
              {questionData.questionText ? (
                <div>
                  <InlineMath math={questionData.questionText} />
                </div>
              ) : (
                <div>
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
                </div>
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
          <div>
            {isChatOpen && (
              <div className="md:absolute ml-14 w-96" style={{ paddingTop: "20px" }}> {/* Adjusted positioning styles */}
                <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                  <div className="p-4 border-b bg-main-teal text-white rounded-t-lg flex justify-between items-center">
                    <p className="text-lg font-semibold">AI Assisted Tutor (Beta)</p>
                    <button onClick={toggleChat} className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400 m-2">
                      {/* Close icon */}
                    </button>
                  </div>
                  {/* Display messages */}
                  <div style={{ overflowY: "auto", maxHeight: "300px" }}>
                    {messages.map((message, index) => (
                      <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right mr-4' : 'ml-6'}`}>
                        <p style={{ textAlign: "left" }} className={`rounded-lg m-1 py-2 px-2 inline-block ${message.sender === 'user' ? 'bg-main-teal text-white' : 'bg-mint-cream text-gray-700'}`}>
                          {message.text}
                        </p>
                      </div>
                    ))}
                    <div className="pr-52">
                      <Discuss
                        visible={isLoadingChat}
                        height="80"
                        width="80"
                        ariaLabel="discuss-loading"
                        wrapperStyle={{ maxHeight: '200px', overflowY: 'auto' }} // Add this style
                        wrapperClass="align-right"
                        colors={['#20a7a1', '#20a7a1']}
                        backgroundColor="#11111"
                      />
                    </div>
                  </div>
                  <div className="p-4 border-t flex">
                    <input
                      type="text"
                      value={userInput}
                      onChange={handleUserInput}
                      onKeyDown={(e) => e.key === 'Enter' ? handleSendMessage(e) : null}
                      placeholder="Type a message"
                      className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button onClick={handleSendMessage} className="bg-main-teal text-white px-4 py-2 rounded-r-md hover:bg-main-teal-400 transition duration-300">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col alignItems-center">
        <div className="flex flex-col items-center">
          {/* Single grid container for all buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-xl mx-auto mt-3">
            {/* First three buttons with 100% width for each */}
            <button
              onClick={handlePreviousQuestionClick}
              className="btn btn-dark md:col-span-1" // Explicitly define col-span for clarity
              disabled={currentQuestionIndex === 0}
            >
              Previous Question
            </button>
            <button
              onClick={handleNextQuestionClick}
              className="btn btn-dark md:col-span-1"
              disabled={currentQuestionIndex === questionDataArray.length - 1}
            >
              Next Question
            </button>
            <button
              onClick={handleSubmit}
              className={`btn btn-success md:col-span-1 ${isSubmitting ? 'disabled' : ''}`}
              disabled={isSubmitting || !answers.every(answer => answer !== '')}
            >
              {isSubmitting ? <Oval color="#fff" secondaryColor="#fff" height={20} width={20} /> : 'Submit'}
            </button>
            {/* AI Assisted Tutor button spanning across all columns on larger screens */}
            <button
              onClick={toggleChat}
              className="bg-main-teal text-white py-2 px-4 rounded-md hover:bg-main-teal-400 transition duration-300 md:col-span-3 mt-3 md:mt-0 h-12"
            >
              AI Assisted Tutor
            </button>
          </div>
          <div className="w-84 align-center pt-4">
            Found an issue with a question? Click <Link to="/contact">here</Link> and report it. Please give details on the exact question and what is wrong
          </div>
        </div>


        {/* {(isCorrect === "correct") && (
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
        )} */}
      </div>
    </>
  );
}

export default Homework;

