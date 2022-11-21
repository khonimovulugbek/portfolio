import React from 'react';
import './portfolio.css'

const data = [
    {
        id: 1,
        short: 'Caravan',
        image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/camel-train-in-danakil-desert-arterra-picture-library.jpg',
        title: 'Caravan',
        github: 'https://github.com/ulugbek9909/caravanback',
        demo: 'https://play.google.com/store/apps/details?id=com.caravan.caravan'
    },
    {
        id: 2,
        short: 'YouTube',
        image: 'https://routenote.com/blog/wp-content/uploads/2022/08/profile-124823467-12584882851192598979.jpeg',
        title: 'YouTube',
        github: 'https://github.com',
        demo: null
    },
    {
        id: 3,
        short: 'Kun.uz',
        image: 'https://storage.kun.uz/source/thumbnails/_medium/4/o0LdxtGQj8e0r21Y1bZ9_DQ3Zui8-0aa_medium.jpg',
        title: 'KunUz',
        github: 'https://github.com',
        demo: null
    },
    {
        id: 4,
        short: 'Evos',
        image: 'https://drive.google.com/uc?id=1yC95gTTTX8Ry907VM2CItmffJoJYqMV7&export=download',
        title: 'Evos',
        github: 'https://github.com/ulugbek9909/Evos',
        demo: 'https://t.me/evosfakebot'
    },
    {
        id: 5,
        short: 'Xarid.mf.uz (private)',
        image: 'https://drive.google.com/uc?id=1ma81_3SyW6rDbJ8UJ8PdtEifO6W2p3vj&export=download',
        title: 'c',
        github: null,
        demo: 'https://xarid.mf.uz'
    },
    {
        id: 6,
        short: 'Ochiq muloqot klubi',
        image: 'https://drive.google.com/uc?id=1txqh7RXqqoWmKLa1mopymgZrHzcu-E_5&export=download',
        title: 'Ochiq muloqot',
        github: 'https://github.com/ulugbek9909/Ochiq_muloqot_bot',
        demo: 'https://t.me/mv_ochiq_muloqot_bot'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, github, demo, short}) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{short}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className={github == null ? 'portfolio_btn-hidden' : 'btn'}
                                       target='_blank'>Github</a>
                                    <a href={demo} target='_blank'
                                       className={demo == null ? 'portfolio_btn-hidden' : 'btn btn-primary'}>Live
                                        Demo</a>
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