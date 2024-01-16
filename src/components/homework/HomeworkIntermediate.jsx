import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MissedConceptsChart from './MissedConceptsChart'; // Import the MissedConceptsChart component
import { useAuth } from '../frontend/accounts/AuthContext';

const HomeworkIntermediate = () => {
  const navigate = useNavigate();
  const { userData, updateUserData } = useAuth();

  const handleNavigateToSubject = (subject) => {
    // Customize the routes based on your actual route structure
    if (subject === 'Math') {
      navigate('/homework');
    } else if (subject === 'English') {
      navigate('/homework');
    } else if (subject === 'Both') {
      navigate('/homework');
    } else if (subject === 'PreviousAssignments') {
      navigate('/homework');
    }
  };

  const [missedConceptsChartData, setMissedConceptsChartData] = useState([]);
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
    if (userData[0]) {
      setMissedConceptsChartData(
        Object.entries(JSON.parse(userData[0].UserProfile.S)).map(([task, hours]) => [task, hours])
      );
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

  return (
    <div style={containerStyle}>
      <h1 className="font-poppins text-3xl font-bold capitalize">Welcome to Adaptive Practice</h1>

      <div style={chartContainerStyle} className="lg:flex">
        {/* Include the MissedConceptsChart component with actual data */}
        <div style={{ width: '95%', maxWidth: '700px' }}>
          <h2 style={chartTitleStyle}>Missed Concepts</h2>
          <div style={{ width: '100%', height: '350px', backgroundColor: '#f3f3f3', border: '1px solid #ccc', borderRadius: '5px', paddingBottom: '30px' }}>
            <MissedConceptsChart chartData={missedConceptsChartData} shouldShowLegend={shouldShowLegend} />
          </div>
        </div>

        {/* Content Container */}
        <div style={{ ...contentContainerStyle, ...buttonContainerStyle }}>

          <h2 className="text-2xl font-bold my-4">Select Subject to Study or Review Previous Assignments</h2>

          {/* Button Container */}
          <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={() => handleNavigateToSubject('Math')}>
              Math
            </button>
            <button style={buttonStyle} onClick={() => handleNavigateToSubject('English')}>
              English
            </button>
            <button style={buttonStyle} onClick={() => handleNavigateToSubject('Both')}>
              Both
            </button>
            <button style={buttonStyle} onClick={() => handleNavigateToSubject('PreviousAssignments')}>
              Previous Assignments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkIntermediate;
