
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
import { useAuth } from './AuthContext';


const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const { isLoggedIn, user, logout } = useAuth();

    const handleLogout = () => {
        // Perform logout action from AuthContext.jsx
        logout();
    };

    return (
        <nav className="bg-white shadow-lg rounded-lg shadow" style={{}}>
            <div >
                <div className="flex justify-start items-center py-2 w-full">
                    <Link as={Link} to="/" style={{ textDecoration: 'none' }}>

                        <div className="flex items-center gap-3 px-3">
                            <img className="w-20 h-10" src={logo} alt="Logo" />
                            <span className="text-lg font-medium text-gray-800" style={{ fontSize: "25px" }}>BrainBuffs</span>
                        </div>
                    </Link>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden items-end" style={{ marginLeft: "26vw", backgroundColor: "white" }}>
                        {/* Hamburger icon */}
                        <img className="relative w-5 h-5" src={Hamburger} />
                    </button>
                    <div className={`${isMenuOpen ? 'hidden' : 'hidden'} lg:flex items-center justify-between px-10 flex-grow w-full`}>
                        <div className="flex items-center gap-[2px]">
                            <Link as={Link} to="/about" style={{ textDecoration: 'none' }}>
                                <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5"
                                        alt=""
                                        src={AboutUs}
                                    />
                                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left inline-block">
                                        About Us
                                    </button>
                                </button>
                            </Link>
                            <Link as={Link} to="/faq" style={{ textDecoration: 'none' }}>
                                <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5"
                                        alt=""
                                        src={FAQIcon}
                                    />
                                    <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                                        FAQ
                                    </div>
                                </button>
                            </Link>
                            <Link as={Link} to="/contact" style={{ textDecoration: 'none' }}>
                                <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5"
                                        alt=""
                                        src={Contact}
                                    />
                                    <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                                        Contact
                                    </div>
                                </button>
                            </Link>
                            <Link as={Link} to="/homework" style={{ textDecoration: 'none' }}>
                                <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                                    <img
                                        className="relative w-5 h-5"
                                        alt=""
                                        src={Homework}
                                    />
                                    <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                                        Homework
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div className="relative">
                        <button
                            className="cursor-pointer border-none py-2.5 px-3 bg-transparent rounded-lg flex items-center gap-2"
                            onClick={toggleDropdown}
                        >
                            <img className="w-5 h-5" alt="" src={DownArrow} />
                            <div className="text-sm font-poppins text-light-theme-subheading-text">
                            {isLoggedIn ? `Hello, ${user.email}` : 'Hello, Sign in'}
                            </div>
                        </button>
                        {isOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-lg">
                            <ul className="list-none p-0">
                                {isLoggedIn ? (
                                <>
                                    <li>
                                    <Link
                                        to="/manageAccount"
                                        style={{ textDecoration: 'none', display: 'block', padding: '8px 16px' }}
                                        onClick={toggleDropdown}
                                    >
                                        Manage Account
                                    </Link>
                                    </li>
                                    <li>
                                    <button
                                        onClick={handleLogout}
                                        style={{ border: 'none', background: 'none', display: 'block', padding: '8px 16px' }}
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
                                        style={{ textDecoration: 'none', display: 'block', padding: '8px 16px 8px 16px' , textAlign: 'left', color: 'black'}} 
                                        onClick={toggleDropdown}
                                    >
                                        Sign In
                                    </Link>
                                    </li>
                                    <li>
                                    <Link 
                                        to="/signup" 
                                        style={{ textDecoration: 'none', display: 'block', padding: '8px 16px 8px 16px', textAlign: 'left', color: 'black' }} 
                                        onClick={toggleDropdown}
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
                    </div>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center lg:hidden`}>
                <Link as={Link} to="/about" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                        <img
                            className="relative w-5 h-5"
                            alt=""
                            src={AboutUs}
                        />
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left inline-block">
                            About Us
                        </button>
                    </button>
                </Link>
                <Link as={Link} to="/faq" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                        <img
                            className="relative w-5 h-5"
                            alt=""
                            src={FAQIcon}
                        />
                        <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                            FAQ
                        </div>
                    </button>
                </Link>
                <Link as={Link} to="/contact" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                        <img
                            className="relative w-5 h-5"
                            alt=""
                            src={Contact}
                        />
                        <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                            Contact
                        </div>
                    </button>
                </Link>
                <Link as={Link} to="/homework" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <button className="cursor-pointer [border:none] py-2.5 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                        <img
                            className="relative w-5 h-5"
                            alt=""
                            src={Homework}
                        />
                        <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                            Homework
                        </div>
                    </button>
                </Link>
                <Link as={Link} to="/signin" style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <button className="cursor-pointer [border:none] py-2.5 px-3 bg-[transparent] rounded-lg flex flex-row items-center justify-start gap-[12px]">
                        <img
                            className="relative w-5 h-5"
                            alt=""
                            src={DownArrow}
                        />
                        <div className="relative text-sm leading-[20px] font-poppins text-light-theme-subheading-text text-left">
                            Sign In/Sign Up
                        </div>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default NavigationBar;
