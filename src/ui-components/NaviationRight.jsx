import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/brainbuffs.png';

export default function NavigationRight() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Brain Buffs Logo" className="logo" />
        <h1 className="brand-name">BrainBuffs</h1>
      </Link>

      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✖️' : '☰'}
      </div>

      <div className={isMenuOpen ? "navbar-links open" : "navbar-links"}>
        <div className="x" onClick={() => setIsMenuOpen(!isMenuOpen)} >{isMenuOpen ? '✖️' :''}</div>
        <Link  onClick={() => setIsMenuOpen(false)} to="/about" className="nav-link">About Us</Link>
        <Link onClick={() => setIsMenuOpen(false)} to="/pricing" className="nav-link">Pricing</Link>
        <Link onClick={() => setIsMenuOpen(false)} to="/faq" className="nav-link">FAQ</Link>
        <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="nav-link">Contact</Link>

        {/* <div className="contact-info">Contact Us: <br/>brainbuffstutoring@gmail.com</div> */}
      </div>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
        }

        .navbar-brand {
          display: flex;
          padding-top: 18px;
          align-items: center;
          text-decoration: none;
          color: rgba(0,0,0,1);
        }

        .logo {
          width: 110px;
          height: 60px;
          margin-right: 10px;
        }

        .x {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }

        .brand-name {
          margin: 0;
        }

        .menu-icon {
          padding-top: 18px;
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 5vw;
        }

        .navbar-links {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          z-index: 1000;
        }

        .navbar-links.open {
          display: flex;
        }

        .nav-link {
          text-decoration: none;
          color: rgba(0,0,0,1);
        }

        .contact-info {
          font-weight: bolder;
        }

        @media (min-width: 768px) {
          .menu-icon {
            display: none;
          }

          .navbar-links {
            flex-direction: row;
            position: initial;
            background: initial;
            top: initial;
            left: initial;
            right: initial;
            bottom: initial;
            display: flex;
          }

          .nav-link, .contact-info {
            padding-top: 20px;
          }

          .x {
            position: initial;
          }
        }
      `}</style>
    </div>
  );
}
