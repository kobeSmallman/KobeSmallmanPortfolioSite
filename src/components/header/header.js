// src/components/header/header.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>my Portfolio</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : undefined}>projects</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
