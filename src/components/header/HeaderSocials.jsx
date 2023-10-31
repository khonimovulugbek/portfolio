import React from 'react';
import {BsLinkedin, BsTelegram} from 'react-icons/bs'
import {FaGithub} from "react-icons/fa";

const HeaderSocials = () => {
    return (
            <div className='header_socials'>
                <a href="https://www.linkedin.com/in/khonimovulugbek" target="_blank"><BsLinkedin/></a>
                <a href="https://github.com/ulugbek9909" target="_blank"><FaGithub/></a>
                <a href="https://t.me/Senior_khan" target="_blank"><BsTelegram/></a>
            </div>
    );
};

export default HeaderSocials;