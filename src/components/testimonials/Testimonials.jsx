import React from 'react';
import './testimonials.css'

// import Swiper core and required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import pdp from "../../assets/certificate/pdp.webp";
import mohirdev from "../../assets/certificate/mohirdev.webp";
import html from "../../assets/certificate/html.png";
import js from "../../assets/certificate/js.png";
import docker from "../../assets/certificate/docker.png";
import java from "../../assets/certificate/java.png";


const pro = [
    {
        id: 1,
        img: pdp,
        url: 'https://codewithmosh.com/courses/606251/certificate?pdf=true'
    },
    {
        id: 2,
        img: html,
        url: 'https://amigoscode.com/courses/267273/certificate?pdf=true'
    },
    {
        id: 3,
        img: js,
        url: 'https://codewithmosh.com/courses/1260591/certificate?pdf=true'
    },
    {
        id: 4,
        img: docker,
        url: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/4ebdab36-66ec-492a-9831-b71e7124888d.pdf'
    },
    {
        id: 5,
        img: mohirdev,
        url: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/4ebdab36-66ec-492a-9831-b71e7124888d.pdf'
    },
    {
        id: 6,
        img: java,
        url: 'https://codewithmosh.com/courses/606251/certificate?pdf=true'
    },

]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Academic achievement</h5>
            <h2>Certificates</h2>
            <div className="container portfolio_container">
                {
                    pro.map(({id, img, title, github, demo, short}) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={img} alt={title}/>
                                </div>

                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Testimonials;