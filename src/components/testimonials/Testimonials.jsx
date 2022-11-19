import React from 'react';
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const pro = [
    {
        id: 1,
        img: AVTR1,
        name: 'Ernest Achiever',
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet dolor esse impedit neque
                 praesentium sed sequi sunt ullam, ut?`
    },
    {
        id: 2,
        img: AVTR2,
        name: 'Ernest Achiever',
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet dolor esse impedit neque
                 praesentium sed sequi sunt ullam, ut?`
    },
    {
        id: 3,
        img: AVTR3,
        name: 'Ernest Achiever',
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet dolor esse impedit neque
                 praesentium sed sequi sunt ullam, ut?`
    },
    {
        id: 4,
        img: AVTR4,
        name: 'Ernest Achiever',
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet dolor esse impedit neque
                 praesentium sed sequi sunt ullam, ut?`
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials_container"
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{clickable: true}}
            >
                {
                    pro.map(({id, img, name, review}) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">
                                <div className="client_avatar">
                                    <img src={img} alt="Avatar One"/>
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;