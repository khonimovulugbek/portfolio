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
                <HeaderSocial/>

                <div className="me">
                    <img src="https://drive.google.com/uc?id=1fUb3JFpU3ugzOBs7_UTgHDSettXD_PCO&export=download"/>
                </div>

                <a href={"#contact"} className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;