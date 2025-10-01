import React from 'react';
import reactlogo from "../../../assets/logo.svg";
import tclogo from "../../../assets/TCLogoOnly.png";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TopNav() {
    return (
        <Navbar 
            expand="lg" 
            className="modern-navbar"
            style={{
                background: 'var(--gradient-secondary)',
                boxShadow: 'var(--shadow-md)',
                borderBottom: '1px solid var(--neutral-200)'
            }}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                        alt="TrueCoders"
                        src={tclogo}
                        height="50"
                        className="d-inline-block align-top me-2"
                        style={{ borderRadius: 'var(--radius-sm)' }}
                    />
                    <span className="fw-bold" style={{ color: 'white', fontSize: '1.2rem' }}>
                        Studio Ghibli
                    </span>
                </Navbar.Brand>
                
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    style={{ borderColor: 'var(--react-blue)' }}
                />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink 
                            className="nav-link modern-nav-link" 
                            to="/"
                            style={{ 
                                color: 'white',
                                fontWeight: '500',
                                padding: '8px 16px',
                                borderRadius: 'var(--radius-sm)',
                                transition: 'all var(--transition-fast)'
                            }}
                        >
                            <i className="me-2">🏠</i>Home
                        </NavLink>
                        <NavLink 
                            className="nav-link modern-nav-link" 
                            to="/films"
                            style={{ 
                                color: 'white',
                                fontWeight: '500',
                                padding: '8px 16px',
                                borderRadius: 'var(--radius-sm)',
                                transition: 'all var(--transition-fast)'
                            }}
                        >
                            <i className="me-2">🎬</i>Films
                        </NavLink>
                    </Nav>
                    
                    <Navbar.Brand className="d-flex align-items-center">
                        <span className="me-2" style={{ color: 'white', fontSize: '1rem' }}>
                            Powered by React
                        </span>
                        <img 
                            src={reactlogo} 
                            height="35" 
                            alt="React" 
                            style={{ 
                                borderRadius: 'var(--radius-sm)',
                                animation: 'spin 3s linear infinite'
                            }}
                        />
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;