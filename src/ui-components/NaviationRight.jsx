import * as React from "react";
import { Link } from 'react-router-dom';
import logo from '../resources/brainbuffs.png';

export default function NaviationRight() {
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 1rem"}}>
      <Link to="/" style={{display: "flex", alignItems: "center", textDecoration: "none", color: "rgba(0,0,0,1)"}}>
        <img src={logo} alt="Brain Buffs Logo" style={{width: '110px', height: '60px', marginRight: '10px'}} />
        <h1>BrainBuffs</h1>
      </Link>

      <div style={{display: "flex", gap: "1rem"}}>
          <Link to="/about" style={{ textDecoration: "none", color: "rgba(0,0,0,1)", paddingTop:"20px" }}>About Us</Link>
          <Link to="/pricing" style={{ textDecoration: "none", color: "rgba(0,0,0,1)", paddingTop:"20px" }}>Pricing</Link>
          <Link to="/faq" style={{ textDecoration: "none", color: "rgba(0,0,0,1)" , paddingTop:"20px"}}>FAQ</Link>
        <div style={{fontWeight:'bolder'}}>Contact Us: <br/>brainbuffstutoring@gmail.com</div>
      </div>
    </div>
  );
}
