import React from 'react';
import './styles.css';

import Logo from '../../assets/logo.png'

const Home = () => {

    return (
        <section className="section has-main-image">
            <img className="image landing-image" src={Logo} alt="SFERA Soluções Renováveis" />
        </section>
    );
};

export default Home;