import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './../pages/Main';
import Monitor from './../pages/Monitor';
import MonitorNovo from './../pages/NovoMonitor';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/monitor/" exact component={Monitor} />
                <Route path="/monitor/novo/" exact component={MonitorNovo} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;