import { React, useEffect } from 'react';
import PricingCard from '../../cards/PricingCard';
import { Link, useLocation } from 'react-router-dom';
import PersonCard from '../../cards/PersonCard';

const Frame = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract the hash from the URL
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);

      // Check if the element with the specified ID exists
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
    "One hour per week 1-on-1 instruction with an expert tutor",
    "24/7 Support from our team"
  ];

  return (
    <div className="flex justify-center items-center mt-5%" style={{zIndex: 1}}>
      <div className="w-full max-w-[1920px] ">
        <div className=" w-full text-left text-21xl text-gray-300 font-inter">


          <div className="flex flex-col items-center justify-start">

            {/* Section 1 */}
            <div className="flex items-center justify-center">
              {/* Content for Section 1 */}
              <div className="self-stretch xl:flex xl:flex-col xl:items-start xl:justify-start xl:gap-48 xl:text-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
                  <div className="self-stretch bg-gray-300 flex flex-col xl:flex-row justify-start xl:h-[560px]">

                    {/* Section 1.1: Top SAT tutoring program text */}
                    <div className="xl:w-full xl:h-full bg-gray-100 xl:flex xl:flex-col xl:items-start xl:justify-start xl:pt-10 xl:px-12 xl:pb-2">
                      <div className="xl:w-full bg-gray-100 xl:flex xl:flex-row xl:items-start xl:justify-end xl:pt-2 xl:pb-2">
                        <h1 className="self-stretch xl:h-full text-whitesmoke-200 text-12xl md:text-6xl lg:text-7xl xl:text-16xl pl-12 pt-3 pr-10">
                          <b>Personalized SAT Prep to get into your Dream School</b>
                        </h1>
                      </div>
                      <div className="self-stretch xl:flex xl:flex-row xl:items-start xl:justify-start xl:py-2">
                        <div style={{ fontSize: "20px" }} className=" mx-auto self-stretch  leading-24 text-whitesmoke-200 mt-1 pl-12 pt-3 pr-10">
                          We leverage proprietary AI and advanced big data tools to craft custom SAT practice. By analyzing over 500 data points per student, we create unique practice tailored to you.
                        </div>
                      </div>
                      <div className="self-stretch xl:h-146.4px flex flex-row items-start justify-start px-0 box-border xl:gap-21px text-base text-gray-300">
                        <div className="xl:w-6 xl:h-6 overflow-hidden shrink-0 ml-134px" />
                      </div>
                      <div className="pt-1 pl-12 pb-4">
                        <Link as={Link} to="/signup" style={{ textDecoration: 'none' }}>
                          <button
                            className="hover:bg-transparent text-white text-sm font-bold py-4 px-6 rounded-lg mt-4"
                            style={{ backgroundColor: '#20a7a1' }}
                          >
                            <span style={{ fontSize: "18px" }}>Sign Up &nbsp; &rarr;</span>
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Section 1.2: Image */}
                    <div className="xl:w-full bg-gray-300 xl:flex xl:flex-col xl:items-center xl:justify-center p-12">
                      <video
                        className="w-full h-auto object-cover rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={"https://demovideobucketbb.s3.amazonaws.com/homepage_explainer.mp4"} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  {/* Section 1.3: "All the SAT tools you need in one plan" */}
                  <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start gap-16px text-center text-13xl text-whitesmoke-200 mt-0">
                    <div className="self-stretch  bg-whitesmoke-200 xl:h-72px" />
                    <div className=" xl:w-full lg:w-full sm:w-full mt-8">
                      <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start gap-16px text-center text-13xl text-black xl:mt-0">
                        <div className="leading-36.4 text-center font-poppins pl-5 pr-5">
                          All the SAT tools you need in one place
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch xl:h-50px overflow-hidden shrink-0 flex flex-col items-center justify-end gap-16px">
                      <div className=" xl:w-827.1px xl:h-6" />
                      <div className="self-stretch  bg-whitesmoke-200 xl:h-72px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex items-center justify-center p-0" id='PricingCards'>
              {/* Content for Section 2 */}
              <div className=" bg-white">
                <div className="flex flex-col md:flex-row container mx-auto px-4 pt-2 pb-5 lg:py-12 xl:py-16">
                  <PricingCard plan="free" rows={freePlan} title="Free" price="0" />
                  <PricingCard plan="practice" rows={practicePlan} title="Practice" price="50" />
                  <PricingCard plan="pro" rows={proPlan} title="Pro" price="200" />
                </div>
                <div className=" bg-white h-16 mt-[-16px]" />
              </div>
            </div>


            {/* Section 5 */}
            <div className="flex flex-col items-center justify-center p-10 font-poppins">
              {/* Content for Section 5 */}
              {/* <div className="absolute w-full top-[2066px] right-[-4px] left-[4px] bg-white flex flex-col items-start justify-start py-[68px] px-[171px] box-border gap-[85px] text-[48px] text-darkslategray-200 font-roboto"> */}
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[50px] lg:flex-col lg:items-center">
                <div className="font-small flex items-center h-14 shrink-0">
                  <b>Meet the Team</b>
                </div>
                <div className="self-stretch grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-[42px] text-5xl text-gray-200">
                  <PersonCard
                    name="Logan Schottland"
                    role="President and Cofounder"
                    description="Logan, a computer science student at CU Boulder, excels academically, scoring above the 99th Percentile on the SAT. As a National Merit Scholar with engineering experience at NASA, he merges theoretical knowledge with practical applications. Logan's refined problem-solving skills are vital for testing success. His tutoring approach is ideal for high schoolers aiming for SAT excellence and improved test-taking abilities."
                    imageSrc="/loganvab-1@2x.png"
                  />

                  <PersonCard
                    name="Sandy Dinegar"
                    role="Chief Business Officer and Cofounder"
                    description="Sandy, a double major in Economics and Philosophy at the University of Colorado Boulder, brings a unique approach to SAT tutoring with strong adaptability and refined problem-solving skills. Notably, Sandy excelled on the basketball court, achieving 1st Team All-Conference honors in high school. Applying this dedication to SAT tutoring, he guides students with analytical skills for success."
                    imageSrc="/sandy-headshot-1@2x.png"
                  />

                  <PersonCard
                    name="Matt Schottland"
                    role="Director of Finance and Operations"
                    description="Matt is an ambitious double major in Finance and Accounting at the Leeds School of Business and top 1% SAT scorer. Matt has a wide breadth of skills, earning him internship offers from competitive companies, such as KPMG, Lockheed Martin, and Medtronic. Matt combines his experience taking and tutoring the SAT with his strong business skills to craft specialized tutoring programs that provide unique value to students."
                    imageSrc="/mattHeadshot.jpg"
                  />

                  <PersonCard
                    name="Isaac Li"
                    role="Lead Software Developer"
                    description="Isaac, a Cybersecurity graduate student at CU Boulder, holds a B.S. in Computer Science and boasts a remarkable 98th percentile SAT score. His proficiency in web development for students is a result of his unique fusion of academic depth and hands-on expertise, ensuring user-friendly platforms through a blend of theoretical understanding and practical application."
                    imageSrc="/isaac.jpg"
                  />
                </div>


              </div>
            </div>


            {/* Section 6 */}
            <div className="flex items-center justify-center p-4">
              {/* Content for Section 6 */}
              <div className="flex-1  leading-[48px] font-medium font-poppins" style={{ paddingRight: '20px' }}>
                Try BrainBuffs for yourself and see what's possible.
              </div>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button
                  className="flex-1 rounded-[10px] bg-teal-500 shadow-[0px_0px_1px_rgba(0,_0,_0,_0.32),_0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_1px_3px_rgba(45,_127,_249,_0.28),_0px_0px_0px_0.5px_rgba(0,_0,_0,_0.06)_inset] 
               h-[43px] overflow-hidden flex flex-col items-center justify-center text-center text-[20px] text-white"
                  style={{ maxWidth: '300px' }}
                >
                  <div className=" tracking-[0.1px] leading-[27px] font-medium flex items-center justify-center w-[149.1px] h-6 shrink-0" >
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
