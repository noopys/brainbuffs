import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
// import { Pie } from 'react-chartjs-2';
import { Oval } from 'react-loader-spinner'; // Import the loader component
import { Chart } from 'react-google-charts';

const ProfilePage = () => {
    const { user, userData, updateUserData, isLoggedIn } = useAuth();

    // charts and insights
    const [missedMathConceptsChartData, setMissedMathConceptsChartData] = useState([]);
    const [missedEnglishConceptsChartData, setMissedEnglishConceptsChartData] = useState([]);
    const [shouldShowLegend, setShouldShowLegend] = useState(true);
    const [noAssignmentsFound, setNoAssignmentsFound] = useState({});
    const [homeworkSets, setHomeworkSets] = useState({});

    const [percentageCorrect, setPercentageCorrect] = useState([]);

    // user messages


    // Style

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
        // border: '1px solid #20a7a1',
        // maxWidth: '800px',//'100%',
        padding: '20px 0px',
        // borderRadius: '10px',
        margin: '20px auto',
        fontFamily: 'poppins',
        backgroundColor: '#fff',
    };

    const graphContainerStyles = {
        width: '95%',
        minHeight: '300px',
        maxWidth: '700px',
        margin: '20px auto',
        backgroundColor: '#000',//'#20a7a1',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
    };

    const graphStyles = {
        width: '100%',
        height: '350px',
        // minHeight: '350px',
        backgroundColor: '#f3f3f3',
        // border: '1px solid #ccc',
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
        // is3D: true, // Enable a 3D effect for the pie chart
        legend: shouldShowLegend ? {
            position: 'left',
            textStyle: {
                fontSize: 14,
            },
        } : { position: 'none' }, // An empty object if shouldShowLegend is false
        pieSliceText: 'none', // Display percentage values on pie slices
        pieSliceTextStyle: {
            fontSize: 14, // Customize the font size of percentage values
        },
        colors: ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"],
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
                if (!(category === "Easy" || category === "Medium" || category === "Hard" || category === "Foundations" )) {
                    formattedMathData.push([category, value]);
                }
            }
            formattedMathData.sort((a, b) => b[1] - a[1]);
            const limitedMathData = formattedMathData.slice(0, 8);
            setMissedMathConceptsChartData(limitedMathData);
            // console.log('chartData', formattedData);

            // format English
            const formattedEnglishData = [['Concept', 'Weight']];
            for (const category in userData[0].EnglishUserProfile.M) {
                const value = parseInt(userData[0].EnglishUserProfile.M[category].N);
                if (!(category === "easy" || category === "medium" || category === "hard" || category === "very hard" || category === "Long")){
                    formattedEnglishData.push([category, value]);
                }
            }
            formattedEnglishData.sort((a, b) => b[1] - a[1]);
            // Limit to the top 8 elements
            const limitedEnglishData = formattedEnglishData.slice(0, 8);
            setMissedEnglishConceptsChartData(limitedEnglishData);
        }
    }, [userData]);

    useEffect(() => {
        const fetchPreviousAssignments = async () => {
            try {
                if (isLoggedIn && user && user.username) {
                    const userId = user.username;

                    const requestData = {
                        userId: userId,
                        // ... other request data if needed
                    };
                    // setLoading(true); // Set loading to true before making the API call
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

                    // Calculate percentageCorrect based on the updated homeworkSets state
                    const newPercentageCorrect = [];
                    for (const key in data) {
                        if (Object.prototype.hasOwnProperty.call(data, key)) {
                            const array = data[key];
                            let correctCount = 0;
                            let totalCount = array.length;

                            array.forEach(item => {
                                if (item.IsCorrect) {
                                    correctCount++;
                                }
                            });

                            const perCorr = (correctCount / totalCount) * 100;
                            newPercentageCorrect.push(perCorr);
                            // console.log(`Percentage of correct answers for array ${key}: ${perCorr}%`);
                        }
                    }

                    // Update states with the new data
                    setHomeworkSets(data);
                    setPercentageCorrect(newPercentageCorrect);
                    console.log(percentageCorrect);

                    const noData = Object.keys(data).length === 0;
                    setNoAssignmentsFound(noData);
                    // setLoading(false); // Set loading to false after data is fetched
                    // Set the homework sets data to state for rendering
                } else {
                    // Handle case when the user is not logged in
                    console.log('User is not logged in.');
                }
            } catch (error) {
                console.error('Error fetching previous assignments:', error);
            }
        };

        fetchPreviousAssignments();
    }, [isLoggedIn, user]);

    /*---------------------------------------
    
    CIRCLE GRAPH COMPONENT

    ---------------------------------------*/

    const CircleGraph = ({ percentage }) => {
        // Calculate the remaining percentage for the empty space
        const remainingPercentage = 100 - percentage;

        // Define data for the pie chart
        const data = [
            ['Category', 'Percentage'],
            ['Correct', percentage],
            ['Incorrect', remainingPercentage],
        ];

        // Define options for the pie chart
        const options = {
            legend: 'none', // Hide the legend
            backgroundColor: '#000000',
            pieSliceText: 'none', // Disable percentage labels on pie slices
            pieSliceTextStyle: {
                color: 'white',
            },
            pieStartAngle: 0, // Rotate the pie chart to center the 'Correct' slice
            slices: {
                0: { color: '#20a7a1' }, // Color for 'Correct' slice
                1: { color: '#d45087' }, // Color for 'Incorrect' slice
            },
            pieHole: 0.7, // Adjust the size of the center hole
            chartArea: { left: '5%', top: '5%', width: '90%', height: '90%' }, // Expand the chart area to allow space for custom text
        };

        return (
            <Chart
                chartType="PieChart"
                width={'100%'}
                height={'100%'}
                data={data}
                options={options}
                // chartEvents={chartEvents}
                loader={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}><Oval color="#20a7a1" secondaryColor="#20a7a1" /></div>}
            />
        );
    };


    return (
        <div style={containerStyle}>
            <div style={{ backgroundColor: '#fff', padding: '0px'}}>
                <h2 style={{ fontSize: '3em', fontWeight: 'bold' }}>My Dashboard</h2>
                {/* <p>Note: This page is a work in progress. Some items may not be fully functional yet. This does not impact the performance of the adaptive practice.</p> */}

                {/* <a href="./homework-intermediate"><button style={buttonStyle}>Go Practice!</button></a><br></br><br></br> */}

                {/* <h2 style={{ fontSize: '2.3em', fontWeight: 'bold', margin: '30px', marginBottom: '10px' }}>Insights</h2> */}
                <h5 style={{ fontSize: '1em' }}> Detailed analytics to help you improve faster</h5>
            </div>
            
  
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
                        loader={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', }}><Oval color="#20a7a1" secondaryColor="#20a7a1" /></div>}
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
                        loader={<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100%', }}><Oval color="#20a7a1" secondaryColor="#20a7a1" /></div>}
                    />
                </div>
            </div>

            {/* HORIZONTAL BAR CHART */}
            {/* <HorizontalBarChart /> */}

            <div style={{ ...graphContainerStyles, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1>Most Recent Homework Accuracy</h1>
                <div style={{ marginTop: '10px', backgroundColor: '#ffffff'}}>
                    {/* Render the CircleGraph component with the percentage */}
                    {(percentageCorrect.length > 0) ? 
                        (
                            <div style={{...graphStyles, paddingBottom: '0px'}}><CircleGraph percentage={percentageCorrect[percentageCorrect.length - 1]} /></div>
                        // 0
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                < Oval color="#20a7a1" secondaryColor="#20a7a1" />
                            </div>
                        )}
                </div>
            </div>

            {/* <div style={graphContainerStyles}>
                <h2> Missed English Concepts</h2>
                <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="Bar"
                    loader={<div>Loading Chart...</div>}
                    data={chartData}
                    options={{
                        title: 'Horizontal Bar Chart',
                        legend: { position: 'none' },
                        colors: ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"],
                        chartArea: {
                            width: '70%',
                            height: '80%',
                            backgroundColor: '#000000' // black background color
                        },
                        hAxis: {
                            title: 'Value',
                            textStyle: { color: '#ffffff' } // white text color
                        },
                        vAxis: {
                            textStyle: { color: '#ffffff' } // white text color
                        }
                    }}
                />
            </div> */}
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