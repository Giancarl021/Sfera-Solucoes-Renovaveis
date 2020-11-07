import React from 'react';
import './styles.css';
import Gallery from 'react-photo-gallery';

import concluded from '../../data/concluded.json';

const Concluded = () => {

    return (
        <section className="section container contact-container">
            <Gallery photos={concluded} />
        </section>
    );
};

export default Concluded;