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

    const containerStyle = {
    border: '1px solid #20a7a1',
    maxWidth: '800px',
    padding: '20px',
    borderRadius: '10px',
    margin: '50px auto',
    fontFamily: 'poppins',
    borderBottom: '1px solid #20a7a1',
    };

    const headerStyles = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
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
        <h2 style={{fontSize: '3em', fontWeight: 'bold'}}>My Insights </h2>

        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <label htmlFor="MRDS" style={{ marginRight: '5px' }}>      Most Recent Diagnostic Score: </label>
                  <input type="text" name="MRDS" value={MRDS}style={{...inputStyle, backgroundColor: 'lightgray' }} placeholder="Most recent Score" readOnly/>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label htmlFor="goalScore" style={{ marginRight: '5px' }}>  Goal Score: </label>
                <input type="text" name="goalScore" value={goalScore} style={inputStyle } placeholder="Goal Score"/>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <label htmlFor="goalScore" style={{ marginRight: '5px',  }}>  Date of Next Test: </label>
                <input type="text" name="nextTest" value={nextDate} style={inputStyle } placeholder="Next Test Date"/>
            </div>
        </div>

        <div style={graphContainerStyles}>
            <h2>Concepts that nail</h2>
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
        </div>
    );
};

export default ProfilePage;