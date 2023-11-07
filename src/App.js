import vab from './resources/loganvab.jpg';
import sandy from './resources/sandy_headshot.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavigationBar from './components/NavigationBar';
import TutorPage from './components/TutorPage';
import Homepage from './components/Homepage';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="App d-flex flex-column h-100 w-100" style={{overflowX:'hidden'}}>
  <Router>
    <header className="bg-white py-3">
      <div className="container" style={{position:'sticky'}}>
        <NavigationBar />
      </div>
    </header>
    <div className="container-fluid flex-grow-1 d-flex flex-column vw-100" >
      <Routes className="d-flex flex-column flex-grow-1">
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Slideshow component1={<TutorPage description="Logan is a motivated computer science student and National Merit Scholar with a 
        background as a NASA intern, who excelled on the SAT and is now dedicated to helping others achieve the same success. Logan understands firsthand the strategies and 
        techniques needed to excel in each section. Combined with his strong problem-solving, logical reasoning, and analytical skills, he brings a unique perspective to his 
        tutoring approach. Logan provides students with the tools and guidance they need to achieve their own exceptional SAT scores. With his passion and expertise, Logan is 
        committed to empowering students to reach their full potential on the SAT." image={vab}/>} component2={<TutorPage description="Sandy is a dynamic student double majoring in Economics and Philosophy at the University of Colorado Boulder who brings a 
        unique approach to SAT tutoring. His diverse experiences have endowed him with a strong ability to adapt and refined problem-solving skills. Notably, Sandy's hard work and determination were proven on the basketball court, where he achieved 1st Team 
        All-Conference honors at D’Evelyn High School. He channels this same commitment into helping students excel on the SAT, utilizing his robust analytical skills and logical reasoning. His passion for education, coupled with an unwavering dedication to 
        student success, makes Sandy a perfect guide for students looking to boost their scores." image={sandy}/>} interval={5000} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  </Router>
</div>

  );
}

export default App;
