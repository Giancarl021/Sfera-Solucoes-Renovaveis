import React from 'react';
import * as Fa from 'react-feather';
import './styles.css';

import Card from '../../components/Card';
import advantages from '../../data/advantages.json';

const Advantages = () => {

    return (
        <section className="section container card-container">
            {
                advantages.map(({ text, subtext, icon }, i) => (
                    <Card key={i} text={text} subtext={subtext} Icon={Fa[icon]} />
                ))
            }
        </section>
    );
};

export default Advantages;