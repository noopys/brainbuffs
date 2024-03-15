// General
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// amplify
import {Amplify} from 'aws-amplify';
import config from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { AuthProvider } from './components/frontend/accounts/AuthContext';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Frontend Pages
import NavigationBar from './components/frontend/UI/NavigationBar';
import TutorPage from './components/frontend/UI/TutorPage';
import Home from './pages/Home/Home';
import FAQ from './components/frontend/UI/FAQ';
import Pricing from './components/frontend/UI/Pricing';
import { CheckoutForm, Return } from './components/frontend/UI/PaymentPage';
import Contact from './components/frontend/UI/Contact';
import Success from './components/frontend/UI/Success';
//School pages for group classes
import Develyn from './components/frontend/UI/Develyn';
import BearCreek from './components/frontend/UI/BearCreek'
import Homework from './pages/Homework/Homework'
import Slideshow from './components/frontend/UI/Slideshow';
import SignIn from './pages/SignIn/signin';
import SignUp from './pages/SignIn/signup';
import SignOutSuccess from './pages/SignIn/signoutSuccess';
import VerificationCodeEntry from './pages/SignIn/verificationCode';
import AccountManagement from './components/frontend/accounts/AccountManagement';
import ResetPassword from './components/frontend/accounts/ResetPassword';
import Profile from './components/frontend/accounts/ProfilePage';

import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import ViewPreviousAssignments from './pages/Homework/PreviousAssignments';
import HomeworkReview from "./pages/Homework/HomeworkReview";


Amplify.configure(config);



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
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/return" element={<Return />} />
              <Route path="/develyn" element={<Develyn />} />
              <Route path="/bearcreek" element={<BearCreek/>}/>
              <Route path="/homework" element={<Homework/>}/>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/success" element={<Success/>}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/SuccessfulSignOut" element={<SignOutSuccess />} />
              <Route path="/verificationCode" element={<VerificationCodeEntry />} />
              <Route path="/manageAccount" element={<AccountManagement />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/student-dashboard" element={<StudentDashboard/>}/>
              <Route path="/view-previous-practice" element={<ViewPreviousAssignments />} />
              <Route path="/homework-answered" element={<HomeworkReview/>}/>

            </Routes>
          </div>
        </Router>
      </div>
    </AuthProvider>

  );
}

export default App;
