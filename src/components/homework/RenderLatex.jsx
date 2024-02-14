import React, { useEffect, useState } from 'react';
import { InlineMath } from 'react-katex';

function RenderLatex() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('https://fm407nxajh.execute-api.us-west-2.amazonaws.com/testLatex', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <div>
            <h1>Hello!</h1>
            {questions.map(question => (
                <div key={question.recordID}>
                    {question.questionText && (
                        <div>
                            <InlineMath math={question.questionText} />
                        </div>
                    )}
                    {question.questionImage && <img src={question.questionImage} alt="Question" />}
                </div>
            ))}
        </div>
    );
}

export default RenderLatex;
