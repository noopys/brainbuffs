import React from "react";
import { NavLink } from 'react-router-dom';
import ProgramCard from './ProgramCard';
import ButtonPrimary from "../ui-components/ButtonPrimary";

export default function Homepage(props) {
    return (
        <div className="d-flex flex-column  position-relative" style={{ backgroundColor: "rgba(242,242,242,1)", width: "100%", overflowX: "hidden", overflowY: "hidden" }}>
            <h1 className="mt-1">Top SAT tutoring program in the Denver/Boulder area</h1>
            <h2 className="text-center mb-4 display-6" style={{ paddingTop: "15px" }}>
                Improve SAT your score today. Get into your dream school tomorrow.
            </h2>

            <div className="h4 mb-1">Our students improve their scores by 100+ points</div>

            <div className="container-fluid d-flex flex-column flex-grow-1 py-5 justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4 mx-auto">
                        <ProgramCard
                            title="Dream School Custom Tutoring Bundle"
                            bullets={[
                                "4 1-on-1 60 minute SAT tutoring sessions with one of our experts",
                                "4 custom weekly homeworks crafted by our team assisted by our in house AI software",
                                "24/7 support from our expert tutors",
                                "Best for students looking for a 100+ point improvement" 
                            ]}
                            price="$200"
                        />
                    </div>
                    <div className="col-md-4 mb-4 mx-auto">
                        <ProgramCard
                            title='Buff Boost "Homework Only" Program'
                            bullets={[
                                "4 custom weekly SAT homeworks crafted by our team assisted by our in house AI software",
                                "24/7 support from our expert tutors",
                                "Best for students who just want a little extra practice or want to stay sharp between tutoring and the test"
                            ]}
                            price="$50"
                        />

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

