import React from 'react';
import './testimonials.css'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {AiOutlineCloudDownload} from "react-icons/ai";

const pro = [
    {
        id: 1,
        img: 'https://drive.google.com/uc?id=14Y0HDcIZEm8ygk6b7rePlQfD_xgztATN&export=download',
        url: 'https://codewithmosh.com/courses/606251/certificate?pdf=true'
    },
    {
        id: 2,
        img: 'https://drive.google.com/uc?id=1-9vAOBZtQyg2h_lCvUpuEP0Y7TBy0tkl&export=download',
        url: 'https://amigoscode.com/courses/267273/certificate?pdf=true'
    },
    {
        id: 3,
        img: 'https://drive.google.com/uc?id=1iBJLsbV4Q33DNWlE4rizNuOweg5qrtR-&export=download',
        url: 'https://codewithmosh.com/courses/1260591/certificate?pdf=true'
    },
    {
        id: 4,
        img: 'https://drive.google.com/uc?id=1cbjIbqIYziehjHFLcScee2GKOg8v8fNf&export=download',
        url: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/4ebdab36-66ec-492a-9831-b71e7124888d.pdf'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Academic achievement</h5>
            <h2>Certificates</h2>
            <Swiper className="container testimonials_container"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{clickable: true}}
            >
                {
                    pro.map(({id, img,url}) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">

                                    <div className="testimonial_me-image">
                                        <img src={img} alt=""/>
                                    </div>
                                <a href={url} target='_blank'><AiOutlineCloudDownload/></a>

                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;