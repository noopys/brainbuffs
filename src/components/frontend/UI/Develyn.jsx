import React from "react";
import { Link } from "react-router-dom";

export default function Develyn() {
    const buttonStyle = {
        backgroundColor: '#20a7a1',
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
        margin: '50px auto',
        fontFamily: 'poppins',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center horizontally
      };

    return (
        <div className="d-flex flex-column bg-light" style={containerStyle}>
            <div className="container py-5">
                <h1 className="text-center fw-bold mb-3">Welcome to the D'Evelyn Group SAT Program</h1>
                
                <p className="text-center fs-5 mb-4">
                    Group sessions on March 5th, 12th and April 2nd, 9th.
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
                                    <li>Four 1.5-hour group sessions</li>
                                    <li>Customized homeworks for each student after each session</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center mt-4">
                            <Link to="/checkout?plan=develyn" className="btn btn-primary btn-lg" style={buttonStyle}>
                                Sign Up Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}