import React from 'react';
import PricingCard from './PricingCard';
import { Link } from 'react-router-dom';
import PersonCard from './PersonCard';

const Frame = () => {
  const freePlan = [
    "Diagnostic Test",
    "Full test breakdown",
    "Consultation from an expert tutor",
  ];
  const practicePlan = [
    "Diagnostic Test",
    "Full test breakdown",
    "Consultation from an expert tutor",
    "Access to our Adaptive Homework System"
  ];
  const proPlan = [
    "Diagnostic Test",
    "Full test breakdown",
    "Consultation from an expert tutor",
    "Access to our Adaptive Homework System",
    "One hour a week 1 on 1 instruction with an expert tutor",
    "24/7 Support from our team of experts"
  ];
  return (
    <div className="flex justify-center items-center mt-5%">
      <div className="w-full max-w-[1920px] ">
        <div className="relative w-full text-left text-21xl text-gray-300 font-inter">


          <div className="flex flex-col items-center justify-start">

            {/* Section 1 */}
            <div className="flex items-center justify-center">
              {/* Content for Section 1 */}
              <div className="self-stretch xl:flex xl:flex-col xl:items-start xl:justify-start xl:gap-48 xl:text-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-1 px-0 pb-0.0000152587890625px">
                  <div className="self-stretch bg-gray-300 flex flex-col lg:flex-row items-center justify-start lg:h-[560px]">
                    {/* Section 1.1: Top SAT tutoring program text */}
                    <div className="xl:w-full xl:h-full lg:w-full bg-gray-100 xl:flex xl:flex-col xl:items-start xl:justify-start xl:pt-10 xl:px-12 xl:pb-2 lg:flex lg:items-start lg:justify-start lg:p-8">
                      <div className="xl:w-full lg:w-full bg-gray-100 xl:flex xl:flex-col xl:items-start xl:justify-end xl:pt-5 xl:px-12 xl:pb-2 lg:flex lg:items-start lg:justify-start lg:p-8">
                        <h1 className="self-stretch relative xl:h-full text-whitesmoke-200 text-12xl md:text-6xl lg:text-7xl xl:text-16xl">
                          Get Into Your Dream School With SAT Practice Tailored To You
                        </h1>
                      </div>
                      <div className="self-stretch xl:flex xl:flex-col xl:items-start xl:justify-start xl:py-2 xl:px-2">
                        <div style={{ fontSize: "25px" }} className="mx-auto w-full self-stretch relative leading-24 text-whitesmoke-200 mt-5 pl-10">
                          Use AI and big data to give you completely personalized practice. Our system tags 500+ datapoints from each student to customize their homework like no other provider
                        </div>
                      </div>
                      <div className="self-stretch xl:h-146.4px flex flex-col items-start justify-start px-0 box-border xl:gap-21px text-base text-gray-300">
                        <div className="xl:w-6 xl:h-6 overflow-hidden shrink-0 ml-134px" />
                      </div>
                      <div className="pt-2 pl-12 pb-2">
                        <Link as={Link} to="/" style={{ textDecoration: 'none' }}>
                          <button
                            className="hover:bg-transparent text-white text-sm font-bold py-4 px-8"
                            style={{ backgroundColor: '#20a7a1' }}
                          >
                            <span style={{ fontSize: "18px" }}>Sign Up -></span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    {/* Section 1.2: Image */}
                    <div className="xl:w-full lg:w-full bg-gray-300 xl:flex xl:flex-col xl:items-center xl:justify-center p-12">
                      <video
                        className="w-full h-auto object-cover rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={"https://demovideobucketbb.s3.amazonaws.com/demo_video.mp4"} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  {/* Section 1.3: "All the SAT tools you need in one plan" */}
                  <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start gap-16px text-center text-13xl text-whitesmoke-200 mt-0">
                    <div className="self-stretch relative bg-whitesmoke-200 xl:h-72px" />
                    <div className="relative xl:w-full lg:w-full sm:w-full mt-8">
                      <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start gap-16px text-center text-13xl text-black xl:mt-0">
                        <div className="leading-36.4 text-center">
                          All the SAT tools you need in one plan
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch xl:h-50px overflow-hidden shrink-0 flex flex-col items-center justify-end">
                      <div className="relative xl:w-827.1px xl:h-6" />
                      <div className="self-stretch relative bg-whitesmoke-200 xl:h-72px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex items-center justify-center p-0">
              {/* Content for Section 2 */}
              <div className="relative bg-white">
                <div className="flex flex-col md:flex-row container mx-auto px-4 pt-2 pb-5 lg:py-12 xl:py-16">
                  <PricingCard rows={freePlan} title="Free" price="0" />
                  <PricingCard rows={practicePlan} title="Practice" price="50" />
                  <PricingCard rows={proPlan} title="Pro" price="200" />
                </div>
                <div className="relative bg-white h-16 mt-[-16px]" />
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col items-center justify-center p-0 w-full">
              {/* Content for Section 3 */}
              {/* ... */}

              <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start gap-16px text-center text-13xl text-darkslategray-200 mt-0 w-full">
                <div className="self-stretch relative bg-whitesmoke-200 xl:h-72px w-full" />
                <div className="relative xl:w-full lg:w-full sm:w-full mt-8">
                  <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start gap-16px text-center text-13xl text-darkslategray-200 xl:mt-0 lg:mt-0 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 w-full">
                    {/* Your text content here */}
                    <div className="leading-36.4 text-center">
                      BrainBuffs supports you and your journey at every stage
                    </div>
                  </div>
                </div>
                <div className="self-stretch xl:h-50px overflow-hidden shrink-0 flex flex-col items-center justify-end w-full">
                  {/* This div provides the gray background with dynamic height */}
                  <div className="relative xl:w-827.1px xl:h-6 w-full" />
                  <div className="self-stretch relative bg-whitesmoke-200 xl:h-72px w-full" />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col md:flex-row items-center justify-center p-0 w-full">
              {/* Content for Section 4 */}
              {/* Section 4.1 - SAT Tutoring */}
              <div className="self-stretch bg-whitesmoke-200 flex-1 flex flex-col items-center justify-start py-4 px-4 md:py-[0.0498046875px] md:px-[23.8900146484375px] pb-4 md:pb-0 gap-4 md:gap-[24px] text-base" >
                <div className="flex-1 flex flex-col items-center justify-start py-4 px-4 md:py-[0.0498046875px] md:px-[23.8900146484375px] pb-4 md:pb-0 gap-4 md:gap-[24px] text-base" style={{ maxWidth: '500px' }}>
                  <div className="w-[197px] h-[151px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[11px]">
                    <img
                      className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/people.png"
                    />
                    <div className="relative leading-[19.2px] font-medium flex items-center w-[197px] h-5 shrink-0">
                      SAT Tutoring
                    </div>
                  </div>
                  <div className="self-stretch relative text-base-8 leading-[24px]">
                    Boost your SAT score with personalized 1-on-1 tutoring. Our tutors provide targeted guidance to improve your understanding and performance. Excel in SAT preparation and achieve academic success
                  </div>
                </div>
              </div>

              {/* Section 4.2 - Manage your Homework */}
              <div className="self-stretch bg-whitesmoke-200 flex-1 flex flex-col items-center justify-start py-4 px-4 md:py-[0.0498046875px] md:px-[23.8900146484375px] pb-4 md:pb-0 gap-4 md:gap-[24px] text-base" >
                <div className="flex-1 flex flex-col items-center justify-start py-4 px-4 md:py-[0.0498046875px] md:px-[23.8900146484375px] pb-4 md:pb-0 gap-4 md:gap-[24px] text-base" style={{ maxWidth: '500px' }}>
                  <div className="w-[197px] h-[151px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[11px]">
                    <img
                      className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/paper.png"
                    />
                    <div className="relative leading-[19.2px] font-medium flex items-center w-[197px] h-5 shrink-0">
                      Manage your Homework
                    </div>
                  </div>
                  <div className="self-stretch relative text-base-8 leading-[24px]">
                    Explore self-paced learning with instant feedback on generated homework. Our user-friendly platform empowers personalized education, unlocking your academic potential seamlessly.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="flex flex-col items-center justify-center p-10">
              {/* Content for Section 5 */}
              {/* <div className="absolute w-full top-[2066px] right-[-4px] left-[4px] bg-white flex flex-col items-start justify-start py-[68px] px-[171px] box-border gap-[85px] text-[48px] text-darkslategray-200 font-roboto"> */}
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[50px] lg:flex-col lg:items-center">
                <div className="leading-[55.2px] font-small flex items-center w-[355.1px] h-14 shrink-0 ml-[133px]">
                  Meet the Team
                </div>
                <div className="self-stretch grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-[42px] text-5xl text-gray-200">
                  <PersonCard
                    name="Logan Schottland"
                    role="President"
                    description="Logan, a computer science student at CU Boulder, excels academically, scoring above the 99th Percentile on the SAT. As a National Merit Scholar with engineering experience at NASA, he merges theoretical knowledge with practical applications. Logan's refined problem-solving skills are vital for testing success. His tutoring approach is ideal for high schoolers aiming for SAT excellence and improved test-taking abilities."
                    imageSrc="/loganvab-1@2x.png"
                  />

                  <PersonCard
                    name="Sandy Dinegar"
                    role="Director of Tutors"
                    description="Sandy, a double major in Economics and Philosophy at the University of Colorado Boulder, brings a unique approach to SAT tutoring with strong adaptability and refined problem-solving skills. Notably, Sandy excelled on the basketball court, achieving 1st Team All-Conference honors in high school. Applying this dedication to SAT tutoring, he guides students with analytical skills for success."
                    imageSrc="/sandy-headshot-1@2x.png"
                  />

                  <PersonCard
                    name="Matt Schottland"
                    role="Director of Operations"
                    description="Sandy, a double major in Economics and Philosophy at the University of Colorado Boulder, brings a unique approach to SAT tutoring with strong adaptability and refined problem-solving skills. Notably, Sandy excelled on the basketball court, achieving 1st Team All-Conference honors in high school. Applying this dedication to SAT tutoring, he guides students with analytical skills for success."
                    imageSrc="/mattHeadshot.jpg"
                  />
                </div>


              </div>
            </div>


            {/* Section 6 */}
            <div className="flex items-center justify-center p-4">
              {/* Content for Section 6 */}
              <div className="flex-1 relative leading-[48px] font-medium" style={{ paddingRight: '20px' }}>
                Try BrainBuffs for yourself and see what's possible
              </div>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button
                  className="flex-1 rounded-[10px] bg-darkslateblue shadow-[0px_0px_1px_rgba(0,_0,_0,_0.32),_0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_1px_3px_rgba(45,_127,_249,_0.28),_0px_0px_0px_0.5px_rgba(0,_0,_0,_0.06)_inset] 
               h-[43px] overflow-hidden flex flex-col items-center justify-center text-center text-[20px] text-white"
                  style={{ maxWidth: '300px' }}
                >
                  <div className="relative tracking-[0.1px] leading-[27px] font-medium flex items-center justify-center w-[149.1px] h-6 shrink-0">
                    Sign Up
                  </div>
                </button>
              </Link>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
