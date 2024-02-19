import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MissedConceptsChart from './MissedConceptsChart'; // Import the MissedConceptsChart component
import { useAuth } from '../frontend/accounts/AuthContext';
import { Link } from 'react-router-dom';

const HomeworkIntermediate = () => {
  /*------------------------------------------------------
  Constants
  --------------------------------------------------------*/
  // Import auth
  const { isLoggedIn, userData } = useAuth();

  // Const for naviagtion
  const navigate = useNavigate();
  const handleNavigateToSubject = (subject) => {
    // console.log('Subject before navigation:', subject);
    if (subject === 'Math' || subject === 'English' || subject === 'Both') {
      // Update the navigate function to include the subject in the request body
      setTimeout(() => {
        navigate(`/homework`, {
          state: { subject: subject }
        });
      }, 0);
    } else if (subject === 'ViewPreviousAssignments') {
      navigate('/view-previous-practice');
    }
  };

  // Page Functionality
  const isInCurrSess = userData[0]?.InCurrSess?.BOOL;
  const [missedMathConceptsChartData, setMissedMathConceptsChartData] = useState([]);
  const [missedEnglishConceptsChartData, setMissedEnglishConceptsChartData] = useState([]);

  // Conditional Rendering
  const [shouldShowLegend, setShouldShowLegend] = useState(true);
  const [shouldStack, setShouldStack] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isProSubscription, setIsProSubscription] = useState(false);

  /*------------------------------------------------------
    UseEffects
    --------------------------------------------------------*/

  // Function to see if they should have access to homework system
  useEffect(() => {
    // Your logic to check if SubscriptionLevel is "pro" or "practice"
    // For demonstration purposes, I'm assuming your data is stored in a variable called "data"
    if (userData && userData.length > 0) {
      const subscriptionLevel = userData[0]?.SubscriptionLevel?.S;
      if (subscriptionLevel === 'pro' || subscriptionLevel === 'practice') {
        setIsProSubscription(true);
      } else {
        setIsProSubscription(false);
      }
    }
  }, [userData]);

  // Function to handle screen size changes and update shouldShowLegend
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShouldShowLegend(window.innerWidth >= 960);
      setShouldStack(window.innerWidth <= 600);
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

  useEffect(() => {
    // console.log("HEEEEEEEEEEEEERRRRRRRRREEEEEEEEEEEEE");
    // console.log("EnglishUserprof: ", userData[0].EnglishUserProfile);
    // console.log("Userprof: ", userData[0].userProfile);
    //  console.log("OldUserProf: ", userData[0].UserProfile);
    //  console.log("USERDATA:", userData);
    if (userData[0]) {
      // format math
      const formattedMathData = [['Concept', 'Weight']];
      for (const category in userData[0].UserProfile.M) {
        const value = parseInt(userData[0].UserProfile.M[category].N);
        formattedMathData.push([category, value]);

        // const rawValue = userData[0].UserProfile.M[category].N;
        // const dataType = typeof rawValue;
        // console.log(`Data type for UserProfile - ${category}: ${dataType}`);
      }
      setMissedMathConceptsChartData(formattedMathData);
      // console.log('chartData', formattedMathData);

      // format English
      const formattedEnglishData = [['Concept', 'Weight']];
      for (const category in userData[0].EnglishUserProfile.M) {
        const value = parseInt(userData[0].EnglishUserProfile.M[category].N);
        formattedEnglishData.push([category, value]);

        // const rawValue = userData[0].UserProfile.M[category].N;
        // const dataType = typeof rawValue;
        // console.log(`Data type for EnglishUserProfile - ${category}: ${dataType}`);
      }
      setMissedEnglishConceptsChartData(formattedEnglishData);
    }
  }, [userData]);

  /*------------------------------------------------------
    STYLING
  --------------------------------------------------------*/

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px auto',
    fontFamily: 'poppins',
    // borderBottom: '1px solid #20a7a1',
    maxWidth: '1920px', // Set the max width to 1920px
    width: '100%', // Make the width 100% for responsiveness
  };

  const chartContainerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // Default to column for vertical stacking
    alignItems: 'center',
    justifyContent: 'space-between', // Spacing between chart and content
    marginBottom: '20px', // Add margin to separate from content
  };

  const chartTitleStyle = {
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 'bold',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: windowWidth >= 960 ? 'row' : 'column', // Dynamic flexDirection based on screen size
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap', // Allow wrapping for smaller screens
    marginTop: '20px',
    width: '100%',
  };

  const buttonStyle = {
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '0', // Set to 0 for rectangle shape
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '400px',
    margin: '8px',
  };
  /*------------------------------------------------------
    HTML
  --------------------------------------------------------*/

  if (!isLoggedIn || isProSubscription===false) {
    return (
      <div>
        <div style={{ paddingBottom: "50px", paddingTop: "50px", fontSize: "30px", fontFamily: 'poppins' }}>Please choose one of our plans to use the adaptive practice system.</div>
        <Link to="/#PricingCards" >
          <button style={{ ...buttonStyle, backgroundColor: '#20a7a1' }}>Check out our Plans &nbsp; &rarr;</button>
        </Link>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      <h1 className="font-poppins font-bold ">My Practice Dashboard</h1>
      <h4 className="font-bold">Select a subject to study or review previous practice.</h4>
      <div style={chartContainerStyle} className="lg:flex">


        {/* Content Container */}
        <div style={{ ...contentContainerStyle }}>

          

          {/* Button Container */}
          <div style={buttonContainerStyle}>
            {isInCurrSess ? (
              <div>
                <button style={buttonStyle} className="bg-main-teal hover:bg-main-teal-400 text-white font-bold" onClick={() => handleNavigateToSubject('Math')}>
                  Resume Previous Session
                </button>
                <div>
                  Please finish your previous assignment before starting a new one
                </div>
                {/* <button style={{ ...buttonStyle, backgroundColor: '#ccc', cursor: 'not-allowed' }} disabled>
                  Math
                </button>
                <button style={{ ...buttonStyle, backgroundColor: '#ccc', cursor: 'not-allowed' }} disabled>
                  English
                </button>
                <button style={{ ...buttonStyle, backgroundColor: '#ccc', cursor: 'not-allowed' }} disabled>
                  Both
                </button>
                <button style={{ ...buttonStyle, backgroundColor: '#ccc', cursor: 'not-allowed' }} disabled>
                  Previous Assignments
                </button> */}
              </div>
            ) : (
                <div style={{ display: shouldStack ? 'flex' : 'grid', gridTemplateColumns: shouldStack ? '': 'repeat(2, 1fr)', gap: '10px', flexDirection: 'column' }}>
                <button style={buttonStyle} className="bg-main-teal hover:bg-main-teal-400 font-bold" onClick={() => handleNavigateToSubject('Math')}>
                  Math
                </button>
                <button style={buttonStyle} className="bg-main-teal hover:bg-main-teal-400 font-bold" onClick={() => handleNavigateToSubject('English')}>
                  English
                </button>
                <button style={buttonStyle} className="bg-main-teal hover:bg-main-teal-400 font-bold" onClick={() => handleNavigateToSubject('Both')}>
                  Math and English
                </button>
                <button  className="bg-main-teal hover:bg-main-teal-400 font-bold" style={buttonStyle} onClick={() => handleNavigateToSubject('ViewPreviousAssignments')}>
                  Review Previous Practice
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div>
          <h2 style={{ fontSize: '2.3em', fontWeight: 'bold', margin: '30px', marginBottom: '10px' }}>Insights</h2>
        </div>

        {/* Include the MissedConceptsChart component with actual data */}
        <div style={{ width: '95%', maxWidth: '700px', margin: '20px auto', backgroundColor: '#20a7a1', color: '#fff', padding: '20px', borderRadius: '10px', }}>
          <h2 style={chartTitleStyle}>Missed Math Concepts</h2>
          <div style={{ backgroundColor: '#f3f3f3', zIndex: '9999', color: '#000', }}>
            {shouldShowLegend ? (
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '10px', paddingTop: '5px' }}>Concepts</div>
            ) : (
              <div >Click or hover to view categories</div>
            )}
          </div>
          <div style={{ width: '100%', height: '450px', backgroundColor: '#f3f3f3', border: '1px solid #f3f3f3', borderRadius: '5px', paddingBottom: '30px' }}>
            <MissedConceptsChart chartData={missedMathConceptsChartData} shouldShowLegend={shouldShowLegend} />
          </div>
        </div>
        <div style={{ width: '95%', maxWidth: '700px', margin: '20px auto', backgroundColor: '#20a7a1', color: '#fff', padding: '20px', borderRadius: '10px', }}>
          <h2 style={chartTitleStyle}>Missed English Concepts</h2>
          <div style={{ backgroundColor: '#f3f3f3', zIndex: '9999', color: '#000', }}>
            {shouldShowLegend ? (
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingLeft: '10px', paddingTop: '5px' }}>Concepts</div>
            ) : (
              <div >Click or hover to view categories</div>
            )}
          </div>
          <div style={{ width: '100%', height: '450px', backgroundColor: '#f3f3f3', border: '1px solid #f3f3f3', borderRadius: '5px', paddingBottom: '30px' }}>
            <MissedConceptsChart chartData={missedEnglishConceptsChartData} shouldShowLegend={shouldShowLegend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkIntermediate;

