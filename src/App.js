import logo from './logo.svg';
import './App.css';
import NavigationRight from './ui-components/NaviationRight';
import FeatureSplitLeft from './ui-components/FeatureSplitLeft';
import HeroCenter from './ui-components/HeroCenter';
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header style={{
            paddingBottom: "10px",
            height: "100px",
            width: "100%"
          }}>
          <NavigationRight/>
        </header>
        <Routes>
          <Route path="/" element={<HeroCenter/>}/>
          <Route path="/about" element={<FeatureSplitLeft/>}/>
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