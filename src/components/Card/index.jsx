import React from 'react';
import './styles.css';

const Advantages = ({ Icon, text, subtext }) => {

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <Icon size={48} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{text}</p>
                            <p className="subtitle is-6">{subtext || text }</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Advantages;