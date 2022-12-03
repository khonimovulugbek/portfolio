import React from 'react';
import './experience.css'
import {BsFillBootstrapFill} from "react-icons/bs";
import {
    SiApachecassandra,
    SiApachekafka,
    SiCss3,
    SiDocker,
    SiHtml5,
    SiPostgresql,
    SiPostman,
    SiRabbitmq,
    SiReact,
    SiSpring,
    SiThymeleaf
} from "react-icons/si";
import {MdMiscellaneousServices} from "react-icons/md";
import {FaJava} from "react-icons/fa";
import {TbBrandJavascript} from "react-icons/tb";
import {DiRedis} from "react-icons/di";

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
                            <SiHtml5 className="experience_details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiCss3 className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsFillBootstrapFill className="experience_details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <TbBrandJavascript className="experience_details-icon"/>
                            <div>
                                <h4>Java Script</h4>
                                <small>Pre Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiThymeleaf className="experience_details-icon"/>
                            <div>
                                <h4>Thymeleaf</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiReact className="experience_details-icon"/>
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
                            <FaJava className="experience_details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiSpring className="experience_details-icon"/>
                            <div>
                                <h4>Spring framework</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiRabbitmq className="experience_details-icon"/>
                            <div>
                                <h4>RabbitMQ</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiPostgresql className="experience_details-icon"/>
                            <div>
                                <h4>Postgresql</h4>
                                <small>Advance</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiPostman className="experience_details-icon"/>
                            <div>
                                <h4>Postman</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <MdMiscellaneousServices className="experience_details-icon"/>
                            <div>
                                <h4>Microservices</h4>
                                <small>Pre Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiDocker className="experience_details-icon"/>
                            <div>
                                <h4>Docker</h4>
                                <small>Pre Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiApachekafka className="experience_details-icon"/>
                            <div>
                                <h4>Apache Kafka</h4>
                                <small>Elementary</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <SiApachecassandra className="experience_details-icon"/>
                            <div>
                                <h4>Apache Cassandra</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <DiRedis className="experience_details-icon"/>
                            <div>
                                <h4>Redis</h4>
                                <small>Intermediate</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;