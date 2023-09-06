import logo from './logo.svg';
import './App.css';
import NavigationRight from './ui-components/NaviationRight';
import FeatureSplitLeft from './ui-components/FeatureSplitLeft';
import FeatureListLeft from './ui-components/FeatureListLeft';
import HeroCenter from './ui-components/HeroCenter';
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import FeatureSplitRight from './ui-components/FeatureSplitRight';
import Slideshow from './components/Slideshow';

function App() {
  return (
    <div className="App" style={{
      //overflowX: "hidden",
      //display:'flex',
      //justifyContent:'center',
    }}>
      <Router>
        <header style={{
            paddingBottom: "10px",
            height: "100px",
            width: "100%",
            overflow: "hidden",
          }}>
          <NavigationRight/>
        </header>
        <Routes className="App">
          <Route path="/" element={<HeroCenter/>}/>
          {/* <Route path="/about" element={<FeatureSplitLeft/>}/> */}
          <Route path="/about" element={<Slideshow component1={<FeatureSplitLeft />} component2={<FeatureSplitRight />} interval={5000} />}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </Router>
      {/* <div style={{
          width: "100%"
        }}>
        <HeroCenter/>
      </div> */}
    </div>
  );
}


export default App;