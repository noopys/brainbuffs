import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MissedConceptsChart from './MissedConceptsChart'; // Import the MissedConceptsChart component
import { useAuth } from '../frontend/accounts/AuthContext';

const HomeworkIntermediate = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userData, updateUserData } = useAuth();
  const isInCurrSess = userData[0]?.InCurrSess?.BOOL;
  
  const handleNavigateToSubject = (subject) => {
    console.log('Subject before navigation:', subject);
  
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

  const [missedMathConceptsChartData, setMissedMathConceptsChartData] = useState([]);
  const [missedEnglishConceptsChartData, setMissedEnglishConceptsChartData] = useState([]);
  const [shouldShowLegend, setShouldShowLegend] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to handle screen size changes and update shouldShowLegend
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShouldShowLegend(window.innerWidth >= 960);
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
    // console.log("USERDATA:", userData);
    if (userData[0]) {
      // format math
      const formattedMathData = [['Concept', 'Weight']];
      for (const category in userData[0].UserProfile.M) {
        const value = parseInt(userData[0].UserProfile.M[category].N);
        formattedMathData.push([category, value]);
      }
      setMissedMathConceptsChartData(formattedMathData);
      console.log('chartData', formattedMathData);

      // format English
      const formattedEnglishData = [['Concept', 'Weight']];
      for (const category in userData[0].EnglishUserProfile.M) {
        const value = parseInt(userData[0].EnglishUserProfile.M[category].N);
        formattedEnglishData.push([category, value]);
      }
      setMissedEnglishConceptsChartData(formattedEnglishData);
    }
  }, [userData]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px auto',
    fontFamily: 'poppins',
    borderBottom: '1px solid #20a7a1',
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
    backgroundColor: '#20a7a1',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '0', // Set to 0 for rectangle shape
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    width: '300px',
    margin: '8px',
  };

  if (!isLoggedIn) {
    return <div style={{ paddingBottom: "100px", paddingTop: "50px", fontSize: "30px", fontFamily: 'poppins' }}>Please sign in to view the adaptive practice system.</div>;
  }

  return (
    <div style={containerStyle}>
      <h1 className="font-poppins text-3xl font-bold capitalize">Welcome to Adaptive Practice</h1>

      <div style={chartContainerStyle} className="lg:flex">
        

        {/* Content Container */}
        <div style={{ ...contentContainerStyle, ...buttonContainerStyle }}>

          <h2 className="text-2xl font-bold my-4">Select Subject to Study or Review Previous Assignments</h2>

          {/* Button Container */}
          <div style={buttonContainerStyle}>
            {isInCurrSess ? (
              <>
                <button style={{ ...buttonStyle, backgroundColor: '#20a7a1' }} onClick={() => handleNavigateToSubject('Math')}>
                  Continue Previous Practice
                </button>
                <button style={{ ...buttonStyle, backgroundColor: '#ccc', cursor: 'not-allowed' }} disabled>
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
                </button>
              </>
            ) : (
              <>
                <button style={buttonStyle} onClick={() => handleNavigateToSubject('Math')}>
                  Math
                </button>
                <button style={buttonStyle} onClick={() => handleNavigateToSubject('English')}>
                  English
                </button>
                <button style={buttonStyle} onClick={() => handleNavigateToSubject('Both')}>
                  Both
                </button>
                <button style={buttonStyle} onClick={() => handleNavigateToSubject('ViewPreviousAssignments')}>
                  Previous Assignments
                </button>
              </>
            )}
          </div>
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
