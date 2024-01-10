import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const ProfilePage = () => {
    const { isLoggedIn, user, login, logout } = useAuth();

    // const for 
    const [goalScore, setgoalScore] = useState('');
    const [MRDS, setMRDS] = useState('');
    const [nextDate, setNextDate] = useState('');

    const inputStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    width: '300px',
    marginBottom: '10px',
    alignItems: 'center', 
    fontFamily: 'poppins'
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
        width: '300px',
      };

    const containerStyle = {
    border: '1px solid #20a7a1',
    maxWidth: '800px',
    padding: '20px',
    borderRadius: '10px',
    margin: '50px auto',
    fontFamily: 'poppins',
    borderBottom: '1px solid #20a7a1',
    };

    const graphContainerStyles = {
        width: '80%',
        margin: '20px auto',
        backgroundColor: '#20a7a1',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
    };

    const graphStyles = {
        width: '100%',
        height: '400px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    return (
        <div style={containerStyle}>
        <h2 style={{fontSize: '3em', fontWeight: 'bold'}}>Dashboard</h2>
        <p>Note: This page is a work in progress. Some items may not be fully functional yet. This does not impact the performance of the adaptive practice.</p>

        <a href="./homework"><button style={buttonStyle}>Go Practice!</button></a><br></br><br></br>

        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <label htmlFor="MRDS" style={{ marginRight: '5px', minWidth: '300px' }}>      Most Recent Diagnostic Score: </label>
                  <input type="text" name="MRDS" value={MRDS} style={{...inputStyle, backgroundColor: 'lightgray' }} placeholder="Most recent Score" readOnly/>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label htmlFor="goalScore" style={{ marginRight: '5px', minWidth: '300px' }}>  Goal Score: </label>
                <input type="text" name="goalScore" value={goalScore} style={inputStyle } placeholder="Goal Score"/>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label htmlFor="goalScore" style={{ marginRight: '5px', minWidth: '300px' }}>  Date of Next Test: </label>
                <input type="text" name="nextTest" value={nextDate} style={inputStyle } placeholder="Next Test Date"/>
            </div>
        </div>

        <h2 style={{fontSize: '2em', fontWeight: 'bold', marginTop: '50px'}}>My Insights</h2>

        <div style={graphContainerStyles}>
            <h2>Concepts that you nail</h2>
            <div style={graphStyles}>Insert Graph Component Here</div>
        </div>
        <div style={graphContainerStyles}>
            <h2>Concepts that you miss</h2>
            <div style={graphStyles}>Insert Graph Component Here</div>
        </div>
        <div style={graphContainerStyles}>
            <h2>Progress Towards your goal</h2>
            <div style={graphStyles}>Maybe a simple bar graph that shows progress from 0-1600 and then has markers from their first diagnostic test, the bar shows "projected score", and the end shows goal score</div>
        </div>
        <a href="./homework"><button style={buttonStyle}>Go Practice!</button></a><br></br>
        </div>
    );
};

export default ProfilePage;