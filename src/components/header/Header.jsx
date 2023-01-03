import React from 'react';
import './header.css'
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Khonimov Ulugbek</h1>
                <h5 className="text-light">Java Backend Developer</h5>
                <CTA/>
            </div>
        </header>
    );
};

export default Header;