import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Advantages from './pages/Advantages';

const Routes = () => {

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/advantages" component={Advantages} />
                </Switch>
            </Router>
        </>
    );
};

export default Routes;