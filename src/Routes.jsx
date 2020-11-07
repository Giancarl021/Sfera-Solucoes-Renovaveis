import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Advantages from './pages/Advantages';
import Who from './pages/Who';
import Contact from './pages/Contact';
import Concluded from './pages/Concluded';

const Routes = () => {

    return (
        <>
            <Router baseRoute={process.env.PUBLIC_URL}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/advantages" component={Advantages} />
                    <Route path="/who" component={Who} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/concluded" component={Concluded} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
};

export default Routes;