import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Develyn() {
    return (
        <div className="d-flex flex-column position-relative" style={{ backgroundColor: "rgba(242,242,242,1)", width: "100%", overflowX: "hidden", overflowY: "hidden" }}>
            <h1 className="mt-1 text-center" style={{ lineHeight: "1" }}>Welcome to the Develyn Group SAT Program</h1>
            {/* <h2 className="text-center mb-4 display-6" style={{ paddingTop: "15px" }}>
                Your Gateway to an Advanced Learning Experience
            </h2> */}

            <div className="text-center h4 mb-1">Group sessions on March 5th, 12th and April 2nd, 9th.</div>
            <div className="container-fluid d-flex flex-column flex-grow-1 py-5 justify-content-center align-items-center">

                <div className="row justify-content-center">
                <div className="text-center h1 mb-1">This class includes</div>

                    <div className="col-md-8 mb-4 mx-auto text-center">
                        <ul className="list-unstyled">
                            <li>
                                <h4 className="font-weight-bold">Before the program:</h4>
                                <ul className="list-unstyled pl-3">
                                    <li>1 Diagnostic Test</li>
                                </ul>
                            </li>
                            <li>
                                <h4 className="font-weight-bold mt-2">During the program:</h4>
                                <ul className="list-unstyled pl-3">
                                    <li>Four 1.5-hour group sessions</li>
                                    <li>Customized homeworks for each student after each session</li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            {/* Wrap the button with Link */}
                            <Link to="/checkout" className="btn btn-primary">
                                Sign Up Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    h1 {
                        font-size: 10vw;
                        line-height: 40px;
                    }

                    h2 {
                        font-size: 18px;
                        line-height: 20px;
                    }
                }
            `}</style>
        </div>
    );
}
