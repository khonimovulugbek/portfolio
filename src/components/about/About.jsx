import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

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
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>

                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium earum illum impedit
                        inventore laudantium nihil sapiente tempore totam? Dolorum eum eveniet hic illo inventore
                        iusto laudantium minus quisquam tempore vitae!</p>
                    <a href={"#contact"} className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;