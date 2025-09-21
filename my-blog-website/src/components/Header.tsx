import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="logo">My Blog</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;