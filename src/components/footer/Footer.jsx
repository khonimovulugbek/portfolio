import React from 'react';
import './footer.css'
import {FaFacebook} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {BsLinkedin} from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">KHAN</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experience"}>Experience</a></li>
                <li><a href={"#services"}>Services</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#testimonials"}>Certificates</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>
            <div className="footer_socials">
                <a href="https://www.facebook.com/ulugbek.khanimov" target='_blank'><FaFacebook/></a>
                <a href="https://www.instagram.com/senior_khan_u/" target='_blank'><FiInstagram/></a>
                <a href="https://www.linkedin.com/in/khonimov-ulugbek/"><BsLinkedin/></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; KHAN Portfolio. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;