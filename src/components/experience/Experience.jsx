import React from 'react';
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Java Script</h4>
                                <small>Pre Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Thymeleaf</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small>Pre Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>OOP</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Spring framework</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Postgresql</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Data structure & Algorithms</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Microservices</h4>
                                <small>Pre Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Rabbit MQ</h4>
                                <small>Pre Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;