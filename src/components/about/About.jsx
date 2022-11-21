import React from 'react';
import './about.css'
import {FaAward} from "react-icons/fa";
import {VscFolderLibrary} from "react-icons/vsc";
import {MdOutlineWork} from "react-icons/md";

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src="https://drive.google.com/uc?id=1FEW7HFVJ7Hc0RtZOc7Ivaklj5YP4ZQaP&export=download" alt=""/>
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>5+ Month Working</small>
                        </article>
                        <article className="about_card">
                            <MdOutlineWork className='about_icon'/>
                            <h5>Work</h5>
                            <small>Ministry of Finance</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>

                    </div>
                    <p>An experienced Java Developer capable of creating web applications for various platforms in order to
                        make your business run more smoothly. Capable of web design, app creation, and the development of
                        tools for testing functionality, scheduling, analyzing logs, resolving information issues, and more.</p>
                    <a href={"#contact"} className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;