import React from 'react';
import './styles.css';

const ContactInfo = ({ name, value, link, Icon }) => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <Icon size={48} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <a className="is-6" href={link} target="_blank" rel="noopener noreferrer">{value}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;