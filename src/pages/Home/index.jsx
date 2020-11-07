import React from 'react';
import './styles.css';

import Logo from '../../assets/logo.png'

const Home = () => {

    return (
        <section className="section has-main-image">
            <img className="image landing-image" src={Logo} alt="SFERA Soluções Renováveis" />
            <span className="credits">
                Photo by <a href="https://unsplash.com/@publicpowerorg?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">
                    American Public Power Association
                </a> on <a href="https://unsplash.com/s/photos/solar-panel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">
                    Unsplash
                </a>
            </span>
        </section>
    );
};

export default Home;