import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
//import logo from '../resources/brainbuffs.png';
import flatironslogo from '../resources/flatirons.png';
import { useAuth } from './AuthContext';

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { isLoggedIn, user, logout } = useAuth();
    const handleLogout = () => {
        // Perform logout action
        logout();
      };

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex mr-0">
                    <span className="mr-2" style={{fontWeight:"600", fontSize:"35px", font:'Georgia'}}>Brain Buffs</span>
                    <img src={flatironslogo} alt="Brain Buffs Logo" style={{ width: "110px", height: "60px" }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                <Navbar.Collapse id="responsive-navbar-nav" in={isMenuOpen}>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/about" onClick={() => setIsMenuOpen(false)} style={{ color: "black" }}>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/faq" onClick={() => setIsMenuOpen(false)} style={{ color: "black" }}>FAQ</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={() => setIsMenuOpen(false)} style={{ color: "black" }}>Contact</Nav.Link>
                        <Nav.Link classname="mr-9" as={Link} to="/develyn" onClick={() => setIsMenuOpen(false)} style={{ color: "black" }}>D'Evelyn Group Class</Nav.Link>
                        <Nav.Link classname="mr-9" as={Link} to="/homework" onClick={() => setIsMenuOpen(false)} style={{ color: "black" }}>Homework</Nav.Link>
                        {isLoggedIn ? (
                            <>
                            <Nav.Link style={{ color: "black" }}>Welcome, {user.email}! </Nav.Link>
                            <Nav.Link onClick={handleLogout} style={{ color: "black" }}>Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                            <Nav.Link as={Link} to="/signin" onClick={() => setIsMenuOpen(false)} style={{ color: "black" }}>Sign In</Nav.Link>
                            <Nav.Link as={Link} to="/signup" onClick={() => setIsMenuOpen(false)} style={{ color: "black" }}>Sign Up</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

