import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../resources/flatirons.png';
import HomeIcon from '../../../resources/icons/home.svg';
import FAQIcon from '../../../resources/icons/faq.svg';
import Contact from '../../../resources/icons/contact.svg';
import Homework from '../../../resources/icons/homework.svg';
import DownArrow from '../../../resources/icons/downarrow.svg';
import Hamburger from '../../../resources/icons/hamburger.svg';
import newlogo from '../../../resources/revisedlogo.png';
import { useAuth } from '../accounts/AuthContext';


const NavigationBar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Event handlers for the dropdown menu
  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const dropdownStyle = {
    textDecoration: 'none',
    display: 'block',
    textAlign: 'left',
    fontFamily: 'Poppins',
    backgroundColor: '#ffffff'
  };

  const hoverStyle = {
    ...dropdownStyle,
    backgroundColor: '#e0e0e0',
  };

  const handleSignOut = async () => {
    try {
      logout();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

    return (
    <nav className="bg-white rounded-lg" style={{zIndex:9999}}>
      <div className="lg:flex lg:justify-between lg:items-center">
        {/* Logo and Hamburger button */}
        <div className="flex items-center">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="flex items-center gap-3 px-3">
              <img className="w-30 h-9" src={newlogo} alt="Logo" />
            </div>
          </Link>
          {/* Hamburger icon for md and smaller screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden  ml-auto"
            style={{ backgroundColor: 'white' }}
          >
            <img className="relative w-5 h-5" src={Hamburger} alt="Hamburger" />
          </button>
        </div>

        {/* Navigation links for larger screens */}
        <div className="hidden lg:flex items-center gap-[1px] justify-start w-full">
          <Link to="/homework" style={{ textDecoration: 'none' }}>
            <button className="cursor-pointer py-2.5 px-3 bg-[transparent] rounded-lg flex flex-row items-center justify-center gap-[12px]">
              <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                Adaptive Practice
              </div>
            </button>
          </Link>
          <Link to="/faq" style={{ textDecoration: 'none' }}>
            <button className="cursor-pointer py-2.5 px-3 bg-[transparent] rounded-lg flex flex-row items-center justify-center gap-[12px]">
              <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                FAQ
              </div>
            </button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="cursor-pointer py-2.5 px-3 bg-[transparent] rounded-lg flex flex-row items-center justify-center gap-[12px]">
              <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                Contact
              </div>
            </button>
          </Link>
          <Link to="/develyn" style={{ textDecoration: 'none' }}>
            <button className="cursor-pointer py-2.5 px-3 bg-[transparent] rounded-lg flex flex-row items-center justify-center gap-[12px]">
              <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                D'Evelyn Group Class
              </div>
            </button>
          </Link>
        </div>

        {/* User dropdown for larger screens */}
        <div className="relative hidden lg:block">
          <div className="py-3 px-6 bg-transparent rounded-lg flex gap-1 items-center justify-end" onMouseEnter={() => setIsOpen(true)}>
            <img className="w-4 h-4" alt="" src={DownArrow} />
            <div
              className="text-sm font-poppins text-light-theme-subheading-text"
              style={{ whiteSpace: 'nowrap' }}
            >
              {isLoggedIn ? `Hello, ${user.email}` : 'Hello, Sign in'}
            </div>
          </div>
          {isOpen && (
            <div
              className="absolute right-0 top-full left-0 bg-white shadow-lg rounded-lg justify-end"
              onMouseLeave={() => setIsOpen(false)}
              onClick={() => setIsOpen(false)}
            >
              <ul className="list-none p-0">
                {isLoggedIn ? (
                  <>
                    <li><Link to="/profile" onMouseEnter={() => handleMouseEnter('ins')} onMouseLeave={handleMouseLeave} style={{ ...dropdownStyle, padding: '8px 16px', color: 'teal', ...(hoveredItem === 'ins' ? hoverStyle : {})}}>
                      Dashboard
                      </Link></li>
                      <li><Link to="/manageAccount" onMouseEnter={() => handleMouseEnter('acc')} onMouseLeave={handleMouseLeave} style={{ ...dropdownStyle, padding: '8px 16px', color: 'teal', ...(hoveredItem === 'acc' ? hoverStyle : {})}}>
                      My Account
                      </Link></li>
                    <li><Link onClick={handleSignOut} onMouseEnter={() => handleMouseEnter('so')} onMouseLeave={handleMouseLeave} style={{ ...dropdownStyle, border: 'none', padding: '8px 16px', color: '#dd0000', ...(hoveredItem === 'so' ? hoverStyle : {}) }}>
                      Sign Out
                    </Link></li>
                  </>
                ) : (
                  <>
                    <li><Link to="/signin" onMouseEnter={() => handleMouseEnter('si')} onMouseLeave={handleMouseLeave} style={{ ...dropdownStyle, padding: '8px 16px', color: 'teal', ...(hoveredItem === 'si' ? hoverStyle : {}) }}>
                      Sign In
                    </Link></li>
                    <li><Link to="/signup" onMouseEnter={() => handleMouseEnter('su')} onMouseLeave={handleMouseLeave} style={{ ...dropdownStyle, padding: '8px 16px', color: 'teal', ...(hoveredItem === 'su' ? hoverStyle : {}) }}>
                      Sign Up
                    </Link></li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile navigation links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
          <Link
            to="/faq"
            style={{ textDecoration: 'none' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <button className="cursor-pointer py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
              <img className="relative w-5 h-5" alt="" src={FAQIcon} />
              <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                FAQ
              </div>
            </button>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: 'none' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <button className="cursor-pointer py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
              <img className="relative w-5 h-5" alt="" src={Contact} />
              <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                Contact
              </div>
            </button>
          </Link>
          <Link
            to="/homework"
            style={{ textDecoration: 'none' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <button className="cursor-pointer py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
              <img className="relative w-5 h-5" alt="" src={Homework} />
              <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                Adaptive Practice
              </div>
            </button>
          </Link>
          {/* Conditional depending if logged in or not */}
          { isLoggedIn ? (
              <div>
              <Link to="/profile" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <button className="cursor-pointer py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                <img className="relative w-5 h-5" alt="" src={DownArrow} />
                <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                Dashboard
                </div>
              </button>
              </Link>
              <Link to="/manageAccount" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <button className="cursor-pointer py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                <img className="relative w-5 h-5" alt="" src={DownArrow} />
                <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                  My Account
                </div>
              </button>
              </Link>
              <Link onClick={handleSignOut} style={{ textDecoration: 'none' }}>
                <button className="cursor-pointer py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                  <img className="relative w-5 h-5" alt="" src={DownArrow} />
                  <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                    Sign Out
                  </div>
                </button>
              </Link>
            </div>
          ) : (

            <Link
              to="/signin"
              style={{ textDecoration: 'none' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <button className="cursor-pointer py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                <img className="relative w-5 h-5" alt="" src={DownArrow} />
                <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                  Sign In/Sign Up
                </div>
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
