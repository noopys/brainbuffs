import logo from './logo.svg';
import './App.css';
import NavigationRight from './ui-components/NaviationRight';
import FeatureSplitLeft from './ui-components/FeatureSplitLeft';
import HeroCenter from './ui-components/HeroCenter';
import FAQ from './components/FAQ'
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{
      overflowX: "hidden",
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
          <Route path="/about" element={<FeatureSplitLeft/>}/>
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