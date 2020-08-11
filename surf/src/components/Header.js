import React from 'react';
import '../App.css';
import Logo from './Logo';
import Hero from './Hero';

function Header() {
    return (
        <div className="header">
            <Hero />
            <Logo />
        </div>
    );
}

export default Header;