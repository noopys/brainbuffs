import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import Chart from 'react-google-charts';

const ProfilePage = () => {
    const { user, userData, updateUserData } = useAuth();

    // for changing fields 
    const [newGoalScore, setgoalScore] = useState(null);
    const [newNextTestDate, setNextDate] = useState(null);
    const [changesMade, setChangesMade] = useState(false);

    // charts and insights
    const [missedMathConceptsChartData, setMissedMathConceptsChartData] = useState([]);
    const [missedEnglishConceptsChartData, setMissedEnglishConceptsChartData] = useState([]);
    const [shouldShowLegend, setShouldShowLegend] = useState(true);

    // user messages
    const [updateInfoSuccessMessage, setupdateInfoSuccessMessage] = useState('');

    // Style
    const inputStyle = {
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        fontSize: '16px',
        maxWidth: '300px',
        width: '80%',
        marginBottom: '10px',
        fontFamily: 'poppins',
        alignItems: 'flex-end', 
    };

    const buttonStyle = {
        backgroundColor: '#20a7a1',
        color: '#fff',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        width: '50%',
        maxWidth: '300px'
    };

    const containerStyle = {
        border: '1px solid #20a7a1',
        maxWidth:'800px',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px auto',
        fontFamily: 'poppins',
        borderBottom: '1px solid #20a7a1',
    };

    const graphContainerStyles = {
        width: '95%',
        maxWidth: '700px',
        margin: '20px auto',
        backgroundColor: '#20a7a1',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
    };

    const graphStyles = {
        width: '100%',
        height: '350px',
        // minHeight: '350px',
        backgroundColor: 'f3f3f3',
        border: '1px solid #ccc',
        borderRadius: '5px',
        paddingBottom: '30px'
    };

    const chartOptions = {
        chartArea: {
            left: 10, // Adjust the left margin of the chart area
            top: 20, // Adjust the top margin of the chart area
            width: '90%', // Set the width of the chart area
            height: '90%', // Set the height of the chart area
        },
        backgroundColor: '#f3f3f3',
        is3D: true, // Enable a 3D effect for the pie chart
        legend: shouldShowLegend ? {
            position: 'left',
            textStyle: {
                fontSize: 14,
            },
        } : { position: 'none' }, // An empty object if shouldShowLegend is false
        pieSliceText: 'percentage', // Display percentage values on pie slices
        pieSliceTextStyle: {
            fontSize: 14, // Customize the font size of percentage values
        },
        colors: ["#2ECC71", "#3498DB", "#1ABC9C", "#27AE60", "#F1C40F", "#A5694F", "#9B59B6", "#FF5733"],
    }

    // handle resizing for smaller screens
    useEffect(() => {
        // Function to handle screen size changes and update shouldShowLegend
        const handleResize = () => {
            const screenSize = window.innerWidth;
            setShouldShowLegend(screenSize >= 550);
        };

        // Add event listener to track window resize
        window.addEventListener('resize', handleResize);

        // Initial check and set shouldShowLegend
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // change the user profile into correct data form for chart
    useEffect(() => {
        // console.log("USERDATA:", userData);
        if (userData[0]) {
            // format math
            const formattedMathData = [['Concept', 'Weight']];
            for (const category in userData[0].UserProfile.M) {
                const value = parseInt(userData[0].UserProfile.M[category].N);
                formattedMathData.push([category, value]);
            }
            setMissedMathConceptsChartData(formattedMathData);
            // console.log('chartData', formattedData);

            // format English
            const formattedEnglishData = [['Concept', 'Weight']];
            for (const category in userData[0].EnglishUserProfile.M) {
                const value = parseInt(userData[0].EnglishUserProfile.M[category].N);
                formattedEnglishData.push([category, value]);
            }
            setMissedEnglishConceptsChartData(formattedEnglishData);
        }
    }, [userData]);

    // If there are changes on the screen, notify them before naviagting away
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            console.log('inside event handler');
            if (changesMade) {
                // Display the confirmation message when there are unsaved changes
                console.log('changesMade is true');
                e.preventDefault();
                e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
            }
        };

        // Add a 'beforeunload' event listener to show a confirmation dialog
        window.addEventListener('beforeunload', handleBeforeUnload);
        // console.log('changesMade has chaged to', changesMade);

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [changesMade]); // Listen to changesMade state changes

    // Whenever the 'newPhoneNumber' variable changes, update the context
    useEffect(() => {
        if (newGoalScore !== null) {
            const updatedContext = { ...userData[0], GoalScore: { N: newGoalScore } };
            const updatedUserData = [...userData];
            updatedUserData[0] = updatedContext;

            updateUserData(updatedUserData);
            setChangesMade(true);
            setupdateInfoSuccessMessage('');
            // console.log('updated goal score', updatedUserData);
        }
    }, [newGoalScore]);

    useEffect(() => {
        if (newNextTestDate !== null) {
            const updatedContext = { ...userData[0], NextTestDate: { S: newNextTestDate } };
            const updatedUserData = [...userData];
            updatedUserData[0] = updatedContext;

            updateUserData(updatedUserData);
            setChangesMade(true);
            setupdateInfoSuccessMessage('');
            // console.log('updated newNextTestDate', updatedUserData);
        }
    }, [newNextTestDate]);

    

    // Handle submit changes to Dynamo database
    const updateUserAttributesDynamo = async () => {
        if (!/^[0-9]*$/.test(userData[0].GoalScore.N)) {
            setupdateInfoSuccessMessage('Goal Score can only contain numbers. (No spaces, hyphens, or parenthesis)');
            return;
        }
        if (!/^[a-zA-Z0-9 /]*$/.test(userData[0].NextTestDate.S)) {
            setupdateInfoSuccessMessage('Next Test Date can only contain letters, forward slash (/), apostrophe (\'), dashes (—), and spaces.');
            return;
        }

        const apiGatewayEndpoint = 'https://fm407nxajh.execute-api.us-west-2.amazonaws.com/getUserData'; // Replace with your API Gateway endpoint

        const requestData = {
            username: user.username,
            goalScore: userData[0].GoalScore.N,
            nextTestDate: userData[0].NextTestDate.S,
            func: "updateData",
        };

        try {
            const response = await fetch(apiGatewayEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Specify that you're sending JSON data
                },
                body: JSON.stringify(requestData), // Convert the data object to a JSON string
            });
            // console.log(response);

            if (response.ok) {
                setChangesMade(false);
                console.log("changes made:", newGoalScore, newNextTestDate);
                setupdateInfoSuccessMessage('Statistics updated successfully!');
            } else {
                console.error('Failed to fetch data from API Gateway');
                // Handle the error case
                setupdateInfoSuccessMessage('Make sure none of the fields are empty');
            }
        } catch (error) {
            console.error('Error putting data to API Gateway:', error);
            setupdateInfoSuccessMessage('Error putting data to API Gateway');
        }

        const messageDelay = 5000; // 5 seconds delay (adjust as needed)
        const messageTimer = setTimeout(() => {
            setupdateInfoSuccessMessage('');
        }, messageDelay);

        return () => clearTimeout(messageTimer); // Clear timeout if component unmounts
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ fontSize: '3em', fontWeight: 'bold' }}>My Dashboard</h2>
            {/* <p>Note: This page is a work in progress. Some items may not be fully functional yet. This does not impact the performance of the adaptive practice.</p> */}

            {/* <a href="./homework-intermediate"><button style={buttonStyle}>Go Practice!</button></a><br></br><br></br> */}

            <h2 style={{ fontSize: '2.3em', fontWeight: 'bold', margin: '30px', marginBottom: '10px' }}>Statistics</h2>
            <h5 style={{ fontSize: '1em' }}> View and edit your statistics</h5>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingRight: '20%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="MRDS" style={{ minWidth: '120px', marginRight: '10px', textAlign: 'right' }}> Diagnostic Score out of 1600: </label>
                        <input type="text" name="MRDS" defaultValue={userData.MRDS} style={{ ...inputStyle, backgroundColor: 'lightgray' }} placeholder="Most recent Score" readOnly />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="goalScore" style={{ minWidth: '120px', marginRight: '10px', textAlign: 'right' }}>  Goal Score out of 1600: </label>
                        <input type="text" defaultValue={(userData.length > 0 && userData[0].GoalScore !== undefined) ? (userData[0].GoalScore.N || '') : ('')} name="goalScore" onChange={(e) => setgoalScore(e.target.value)} style={inputStyle} placeholder="Goal Score" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="nextTest" style={{ minWidth: '120px', marginRight: '10px', textAlign: 'right' }}>  Date of Next Test: </label>
                        <input type="text" name="nextTest" defaultValue={(userData.length > 0 && userData[0].NextTestDate !== undefined) ? (userData[0].NextTestDate.S || '') : ('')} onChange={(e) => setNextDate(e.target.value)} style={inputStyle} placeholder="MM/DD/YYYY" />
                    </div>
                </div>
                <button style={{ ...buttonStyle, backgroundColor: '#20a7a1', marginBottom: '10px' }} onClick={() => updateUserAttributesDynamo()}>Update my Info</button>
                {changesMade ? (<p style={{ color: '#dd0000' }}>*There are some changes that are not yet saved.* </p>) : ('')}
                {updateInfoSuccessMessage && <p style={{ color: '#20a7a1' }}> {updateInfoSuccessMessage}</p>}
            </div>
            
            <h2 style={{ fontSize: '2.3em', fontWeight: 'bold', margin: '30px', marginBottom: '10px' }}>Insights</h2>
            <h5 style={{ fontSize: '1em' }}> Detailed analytics to help you improve faster</h5>
  
            {/* PIE CHART FOR MISSED CONCEPTS */}
            <div style={graphContainerStyles}>
                <h2> Missed Math Concepts</h2>
                <div style={graphStyles}>
                    <div style={{ backgroundColor: '#f3f3f3', zIndex: '9999', color: '#000',}}>
                        {shouldShowLegend ? (
                            <div style={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '10px', paddingTop: '5px' }}>Concepts</div>
                            ): (
                            <div >Click or hover to view categories</div> 
                        ) }
                    </div>
                    <Chart
                        chartType="PieChart"
                        width='100%' // Ensure it uses 100% of container width
                        height='100%' // Set a fixed or appropriate height
                        data={missedMathConceptsChartData}
                        options={chartOptions}
                    />
                </div>
            </div>
            <div style={graphContainerStyles}>
                <h2> Missed English Concepts</h2>
                <div style={graphStyles}>
                    <div style={{ backgroundColor: '#f3f3f3', zIndex: '9999', color: '#000', }}>
                        {shouldShowLegend ? (
                            <div style={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '10px', paddingTop: '5px' }}>Concepts</div>
                        ) : (
                            <div >Click or hover to view categories</div>
                        )}
                    </div>
                    <Chart
                        chartType="PieChart"
                        width='100%' // Ensure it uses 100% of container width
                        height='100%' // Set a fixed or appropriate height
                        data={missedEnglishConceptsChartData}
                        options={chartOptions}
                    />
                </div>
            </div>
            {/* POSSIBLE ADDITIONAL CHARTS */}
            {/* <div style={graphContainerStyles}>
                <h2>Concepts that you nail</h2>
                <div style={graphStyles}>Insert Graph Component Here</div>
            </div> */}
            {/* <div style={graphContainerStyles}>
                <h2>Progress Towards your goal</h2>
                <div style={graphStyles}>Maybe a simple bar graph that shows progress from 0-1600 and then has markers from their first diagnostic test, the bar shows "projected score", and the end shows goal score</div>
            </div> */}
            <a href="./homework-intermediate"><button style={buttonStyle}>Go Practice!</button></a><br></br>
        </div>
    );
};

export default ProfilePage;