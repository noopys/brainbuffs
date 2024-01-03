import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/flatirons.png';
import HomeIcon from '../resources/icons/home.svg';
import FAQIcon from '../resources/icons/faq.svg';
import AboutUs from '../resources/icons/aboutus.svg';
import Contact from '../resources/icons/contact.svg';
import Homework from '../resources/icons/homework.svg';
import DownArrow from '../resources/icons/downarrow.svg';
import Hamburger from '../resources/icons/hamburger.svg';
import newlogo from '../resources/revisedlogo.png';
import { useAuth } from './AuthContext';


const NavigationBar = () => {
    const { isLoggedIn, user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


    return (
    <nav className="bg-white rounded-lg border-b-10 border-green-500">
      <div className="lg:flex lg:justify-between lg:items-center">
        {/* Logo and Hamburger button */}
        <div className="flex items-center gap-3 px-3">
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
        </div>

        {/* User dropdown for larger screens */}
        <div className="relative hidden lg:block">
          <div className="border-1 border-teal-500 py-2.5 px-6 bg-transparent rounded-lg flex gap-1 items-center justify-end">
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
              className="absolute right-0 top-full left-0 mt-2 bg-white shadow-md rounded-lg border border-green-300 justify-end"
              style={{ zIndex: 9010 }}
              onMouseLeave={() => setIsOpen(false)}
            >
              <ul className="list-none p-0">
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link
                        to="/manageAccount"
                        style={{
                          textDecoration: 'none',
                          display: 'block',
                          padding: '8px 16px 8px 16px',
                          textAlign: 'left',
                          fontFamily: 'Poppins',
                          color: 'teal',
                        }}
                      >
                        Manage Account
                      </Link>
                    </li>
                    <li>
                      <button
                        style={{
                          border: 'none',
                          background: 'none',
                          display: 'block',
                          padding: '8px 16px 0px 16px',
                          fontFamily: 'Poppins',
                          color: 'red',
                        }}
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/signin"
                        style={{
                          textDecoration: 'none',
                          display: 'block',
                          padding: '8px 16px 8px 16px',
                          textAlign: 'left',
                          fontFamily: 'Poppins',
                          color: 'teal',
                        }}
                      >
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        style={{
                          textDecoration: 'none',
                          display: 'block',
                          padding: '8px 16px 0px 16px',
                          textAlign: 'left',
                          fontFamily: 'Poppins',
                          color: 'teal',
                        }}
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Mobile navigation links */}
         <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
          {/* <Link
            to="/about"
            style={{ textDecoration: 'none' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <button className="cursor-pointer py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
              <img className="relative w-5 h-5" alt="" src={AboutUs} />
              <button
                className="cursor-pointer p-0 bg-[transparent] relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left inline-block"
              >
                About Us
              </button>
            </button>
          </Link> */}
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
          <Link
            to="/signin"
            style={{ textDecoration: 'none' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <button className="cursor-pointer py-2.5 px-3 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
              <img className="relative w-5 h-5" alt="" src={DownArrow} />
              <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                Sign In/Sign Up
              </div>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
