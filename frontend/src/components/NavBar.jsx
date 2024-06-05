import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">Home</li>
                <li className="navbar-item">About</li>
                <li className="navbar-item">Services</li>
                <li className="navbar-item">Contact</li>
            </ul>
        </nav>
    );
};

export default NavBar;