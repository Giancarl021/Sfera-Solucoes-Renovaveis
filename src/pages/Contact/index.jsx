import React from 'react';
import './styles.css';
import * as Fa from 'react-feather';

import contacts from '../../data/contacts.json';
import ContactInfo from '../../components/ContactInfo';

const Contact = () => {

    return (
        <section className="section container contact-container">
            {
                contacts.map(({ name, value, link, icon }, i) => (
                    <ContactInfo name={name} value={value} link={link} Icon={Fa[icon]} key={i} />
                ))
            }
        </section>
    );
};

export default Contact;