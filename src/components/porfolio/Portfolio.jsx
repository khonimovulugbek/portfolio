import React from 'react';
import './portfolio.css'
import SV from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        short: 'Caravan',
        image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/camel-train-in-danakil-desert-arterra-picture-library.jpg',
        title: 'Caravan',
        github: 'https://github.com/ulugbek9909/caravanback',
        demo: null
    },
    {
        id: 2,
        short: 'YouTube',
        image: 'https://routenote.com/blog/wp-content/uploads/2022/08/profile-124823467-12584882851192598979.jpeg',
        title: 'YouTube',
        github: 'https://github.com',
        demo: 'https://'
    },
    {
        id: 3,
        short: 'Kun.uz',
        image: 'https://storage.kun.uz/source/thumbnails/_medium/4/o0LdxtGQj8e0r21Y1bZ9_DQ3Zui8-0aa_medium.jpg',
        title: 'KunUz',
        github: 'https://github.com',
        demo: 'https://'
    },
    {
        id: 4,
        short: 'Evos',
        image: 'https://www.afisha.uz/uploads/media/2016/07/0039781.jpeg',
        title: 'Evos',
        github: 'https://github.com',
        demo: 'https://t.me/evosfakebot'
    },
    {
        id: 5,
        short: 'SVG',
        image: 'https://drive.google.com/uc?id=1QQHR5qQs0pAXJntAQez8q0f2P7OCQGoy&export=download',
        title: 'c',
        github: 'https://github.com',
        demo: 'https://'
    },
    {
        id: 6,
        short: 'Caravan',
        image: SV,
        title: 'c',
        github: 'https://github.com',
        demo: 'https://'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, github, demo,short}) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{short}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} target='_blank'
                                       className={demo == null ? 'portfolio_btn-hidden' : 'btn btn-primary'}>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;