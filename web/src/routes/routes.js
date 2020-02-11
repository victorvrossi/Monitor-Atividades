import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './../pages/Main';
import Monitor from './../pages/Monitor';
import MonitorNovo from './../pages/NovoMonitor';
import NovoProjeto from '../pages/projeto/NovoProjeto';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/monitor/" exact component={Monitor} />
                <Route path="/monitor/novo/" exact component={MonitorNovo} />

                <Route path="/projeto/novo/" exact component={NovoProjeto} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;