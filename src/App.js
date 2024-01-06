//Pics of tutors
import vab from './resources/loganvab.jpg';
import matt from './resources/matt.jpg';
import sandy from './resources/sandy_headshot.jpg';
//
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavigationBar from './components/frontend/UI/NavigationBar';
import TutorPage from './components/frontend/UI/TutorPage';
import Homepage from './components/frontend/UI/Homepage';
import FAQ from './components/frontend/UI/FAQ';
import Pricing from './components/frontend/UI/Pricing';
import { CheckoutForm, Return } from './components/frontend/UI/PaymentPage';
import Contact from './components/frontend/UI/Contact';
import Develyn from './components/frontend/UI/Develyn';
import Homework from './components/homework/Homework'
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Slideshow from './components/frontend/UI/Slideshow';
import SignIn from './components/frontend/accounts/signin';
import SignUp from './components/frontend/accounts/signup';
import SignOutSuccess from './components/frontend/accounts/signoutSuccess';
import VerificationCodeEntry from './components/frontend/accounts/verificationCode';
import AccountManagement from './components/frontend/accounts/AccountManagement'
import ResetPassword from './components/frontend/accounts/ResetPassword'

import {Amplify} from 'aws-amplify';
import config from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { AuthProvider } from './components/frontend/accounts/AuthContext';

Amplify.configure(config);



const logan_desc = "Logan is a fourth year computer science student at "
  + "CU Boulder whose qualifications include: scoring above the 99th Percentile on " +
  "the SAT, being a Deans List recipient within the College of Engineering every semester " +
  "and earning the highly competitive National Merit Scholar title. His practical experience "
  + "working as an engineer at companies such as NASA has given him the unique ability to coalesce "
  + "his learned knowledge with logical applications. He possesses a host of unique problem-solving, " +
  "rationalization and analytical skills that serve as integral tools to testing success. These, combined" +
  " with his interest in helping students, makes his tutoring approach optimal for high schoolers hoping to "
  + "go beyond just excelling on the SAT, but improving their overall test taking ability and furthering their educational career."

const matt_desc = "Matt is an ambitious double major in Finance and Accounting at the Leeds School of Business and top 1% SAT scorer. Matt has a wide breadth of skills, earning him internship offers from competitive companies, such as KPMG, Lockheed Martin, and Medtronic. Matt combines his experience taking and tutoring the SAT with his strong business skills to craft specialized tutoring programs that provide unique value to students. Matt brings energy and excitement to the SAT studying process and loves to see his students excel!";


function App() {
  return (
    <AuthProvider>
      <div className="App d-flex flex-column h-100 w-100" style={{ overflowX: 'hidden' }}>
        <Router>
          <header className="bg-white">
            <div style={{ position: 'sticky' }}>
              <NavigationBar />
            </div>
          </header>
          <div className= "vw-100" >
            <Routes className="d-flex flex-column flex-grow-1">
              <Route path="/" element={<Homepage />} />
              <Route
                path="/about"
                element={
                  <Slideshow
                    component1={<TutorPage description={logan_desc} image={vab} />}
                    component2={
                      <TutorPage
                        description="Sandy is a dynamic student double majoring in Economics and Philosophy at the University of Colorado Boulder who brings a unique approach to SAT tutoring. His diverse experiences have endowed him with a strong ability to adapt and refined problem-solving skills. Notably, Sandy's hard work and determination were proven on the basketball court, where he achieved 1st Team All-Conference honors at D’Evelyn High School. He channels this same commitment into helping students excel on the SAT, utilizing his robust analytical skills and logical reasoning. His passion for education, coupled with an unwavering dedication to student success, makes Sandy a perfect guide for students looking to boost their scores."
                        image={sandy}
                      />
                    }
                    component3={<TutorPage description={matt_desc} image={matt} />}
                  />
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/return" element={<Return />} />
              <Route path="/develyn" element={<Develyn />} />
              <Route path="/homework" element={<Homework/>}/>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/SuccessfulSignOut" element={<SignOutSuccess />} />
              <Route path="/verificationCode" element={<VerificationCodeEntry />} />
              <Route path="/manageAccount" element={<AccountManagement />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
            </Routes>
          </div>
        </Router>
      </div>
    </AuthProvider>

  );
}

export default App;
