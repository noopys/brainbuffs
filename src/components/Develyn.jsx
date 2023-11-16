import React from "react";
import ButtonPrimary from "../ui-components/ButtonPrimary";

export default function Develyn() {
    return (
        <div className="d-flex flex-column position-relative" style={{ backgroundColor: "rgba(242,242,242,1)", width: "100%", overflowX: "hidden", overflowY: "hidden" }}>
            <h1 className="mt-1" style={{ lineHeight: "1" }}>Welcome to Develyn's Special Enrollment</h1>
            <h2 className="text-center mb-4 display-6" style={{ paddingTop: "15px" }}>
                Your Gateway to an Advanced Learning Experience
            </h2>

            <div className="h4 mb-1">Enroll now and take the first step towards exceptional education at Develyn.</div>

            <div className="container-fluid d-flex flex-column flex-grow-1 py-5 justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-md-6 mb-4 mx-auto text-center">
                        <p>
                            Join Develyn's exclusive program, designed to offer a comprehensive and engaging educational journey. Benefit from our tailored curriculum, expert faculty, and a community of passionate learners.
                        </p>
                        <ButtonPrimary>Sign Up Now</ButtonPrimary>
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
