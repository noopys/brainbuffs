import React, { useState } from 'react';

function HomeworkQestion() {
    const [response, setResponse] = useState(null);

    const handleSubmit = async () => {
        const data = {
            UserId: 'userq23', // replace with actual data
            RecordId: 'rec456', // replace with actual data
            Answer: 'UserAnswer', // replace with actual data
            CorrectAnswer: 'CorrectAnswer', // replace with actual data
            IsCorrect: true // replace with actual data
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

    return (
        <div>
            <button onClick={handleSubmit}>Grade Homework</button>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
}

export default GradeHomework;
