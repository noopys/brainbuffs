import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../frontend/accounts/AuthContext';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Oval } from 'react-loader-spinner'; // Import the loader component

// latex
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

function ViewPreviousAssignments() {
  const { isLoggedIn, user } = useAuth();
  const [noAssignmentsFound, setNoAssignmentsFound] = useState({});
  const [homeworkSets, setHomeworkSets] = useState({});
  const [loading, setLoading] = useState(true);

  const latexContainerRef = useRef(null);

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

  useEffect(() => {
    adjustLatexFontSize(); // Call on mount and when the window is resized
    window.addEventListener('resize', adjustLatexFontSize);
    return () => window.removeEventListener('resize', adjustLatexFontSize);
  }, []);

  useEffect(() => {
    const fetchPreviousAssignments = async () => {
      try {
        if (isLoggedIn && user && user.username) {
          const userId = user.username;

          const requestData = {
            userId: userId,
          };
          setLoading(true);
          const response = await fetch('https://fm407nxajh.execute-api.us-west-2.amazonaws.com/getPreviousAssignments', {
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
          console.log('Fetched previous assignments data:', data);

          setHomeworkSets(data);

          const noData = Object.keys(data).length === 0;
          setNoAssignmentsFound(noData);
          setLoading(false);
        } else {
          console.log('User is not logged in.');
        }
      } catch (error) {
        console.error('Error fetching previous assignments:', error);
      }
    };

    fetchPreviousAssignments();
  }, [isLoggedIn]);

  return (
    <div className="w-full px-8 pt-10 font-poppins">
      <h1 style={{ fontFamily: 'poppins', fontSize: '3em', fontWeight: 'bold' }}>Previous Assignments</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Oval color="#20a7a1" secondaryColor="#20a7a1" />
        </div>
      ) : (
        <>
          {noAssignmentsFound && <p>No Previous Assignments Found</p>}
          {Object.keys(homeworkSets).map((homeworkSet, index) => (
            <Disclosure key={index}>
              {({ open, close }) => (
                <>
                  <Disclosure.Button
                    className={`flex w-full justify-between rounded-lg border-[1.5px] border-teal-500 px-4 py-4 text-left text-sm font-medium text-gray-900 bg-white focus:outline-none ${open ? 'border-b-1 ' : ''}`}
                  >
                    <span>Homework Set {homeworkSet}</span>
                    <ChevronUpIcon
                      className={`${open ? '' : 'rotate-180 transform'} h-5 w-5 text-black-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition-all duration-400 ease-out"
                    enterFrom="opacity-0 translate-y-[-30%]"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all duration-200 ease-out"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-[-30%]"
                    onTransitionEnd={() => adjustLatexFontSize()} // Trigger adjustment when transition ends
                  >
                    <Disclosure.Panel
                      key={index}
                      className="px-4 pb-3 pt-3 text-sm text-black text-center rounded-lg"
                      style={{ background: '#f3f4f6' }}
                    >
                      {homeworkSets[homeworkSet].map((question, questionIndex) => (
                        <div key={questionIndex} style={{ paddingTop: '20px', borderBottom: '1px solid #20a7a1', borderRadius: '0px', width: '100%' }}>
                          <h3 style={{ marginBottom: '10px', textDecoration: 'underline' }}>Question {questionIndex + 1}</h3>
                          {question.questionText ? (
                            <div style={{width: '100%',overflowX: 'auto'}}>
                              <div
                                className="latex-container" // Add class for LaTeX container
                                ref={latexContainerRef} // Ref for LaTeX container
                              >
                                <InlineMath math={question.questionText} />
                              </div>
                            </div>
                          ) : (
                            <div>
                              {question.questionImage && (
                                <img src={question.questionImage} alt={`Question ${questionIndex + 1}`} style={{ maxWidth: '100%', marginBottom: '15px', borderRadius: '8px' }} />
                              )}
                            </div>
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
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </>
      )}
    </div>
  );
}

export default ViewPreviousAssignments;
