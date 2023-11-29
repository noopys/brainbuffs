import React from "react";
import { Link } from "react-router-dom";

export default function Develyn() {
    return (
        <div className="d-flex flex-column position-relative bg-light min-vh-100">
            <div className="container py-5">
                <h1 className="text-center fw-bold mb-3">Welcome to the Develyn Group SAT Program</h1>
                
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
                            <Link to="/checkout" className="btn btn-primary btn-lg">
                                Sign Up Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
