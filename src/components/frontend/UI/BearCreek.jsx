import React from "react";
import { Link } from "react-router-dom";

export default function BearCreek() {
    const buttonStyle = {
        color: '#fff',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        width: '300px',
    };

    const containerStyle = {
        border: '1px solid #20a7a1',
        backgroundColor: '#000000',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px auto',
        fontFamily: 'poppins',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
    };

    const bannerStyle = {
        backgroundColor: '#ff0000', // Bright red background
        color: '#ffffff', // White text color
        width: '100%', // Full width
        textAlign: 'center', // Center the text
        padding: '10px 0', // Padding top and bottom
        fontSize: '24px', // Larger font size
        fontWeight: 'bold', // Bold font weight
    };

    return (
        <div className="d-flex flex-column bg-light" style={containerStyle}>
            <div style={bannerStyle}>Class tomorrow 3/14 cancelled due to snow day</div>
            <div style={bannerStyle}>Rescheduled to 4/4 at 8-9AM</div>
            <div className="container py-5">
                <h1 className="text-center fw-bold mb-3">Welcome to the Bear Creek Group SAT Program</h1>
                
                <p className="text-center fs-5 mb-4">
                    Group sessions on February 22nd, February 29th and March 7th, 14th from 8-9AM.
                </p>

                <div className="text-center my-4">
                    <h2 className="fw-bold">This class includes:</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h4>Before the program:</h4>
                                <ul className="list-unstyled ps-3">
                                    <li>1 Diagnostic Test</li>
                                </ul>
                            </li>
                            <li className="list-group-item">
                                <h4>During the program:</h4>
                                <ul className="list-unstyled ps-3">
                                    <li>Four 1-hour group sessions</li>
                                    <li>Customized homeworks for each student after each session</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center mt-4">
                            <Link to="/checkout?plan=bearcreek" className="btn btn-primary btn-lg bg-main-teal hover:bg-main-teal-400 font-bold" style={buttonStyle}>
                                Sign Up Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
