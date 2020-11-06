import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// import Logo from '../../assets/Logo.png';

const Header = () => {
    const [isActive, setActive] = useState(false);

    return (
        <>
            <nav className="navbar header-nav">
                <div className="navbar-brand">
                    <Link replace to="/" onClick={() => setActive(false)} className="navbar-item">
                        {/* <img className="logo" src={Logo} alt="SFERA Soluções Renováveis" /> */}
                    </Link>
                    <div className={'navbar-burger burger header-burger' + (isActive ? ' is-active' : '')} onClick={() => setActive(!isActive)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={'navbar-menu' + (isActive ? ' is-active' : '')}>
                    <div className="navbar-end">
                        <Link className="navbar-item" onClick={() => setActive(false)} to="/advantages">Vantagens da Energia Solar</Link>
                        <Link className="navbar-item" onClick={() => setActive(false)} to="">Quem somos nós?</Link>
                        <Link className="navbar-item" onClick={() => setActive(false)} to="">Trabalhos concluídos</Link>
                        <Link className="navbar-item" onClick={() => setActive(false)} to="">Contato</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;