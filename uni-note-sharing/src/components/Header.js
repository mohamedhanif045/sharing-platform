// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this CSS file for styling

const Header = () => {
    return (
        <header>
            <h1>Educational Access Platform</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/tutoring">Tutoring</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
