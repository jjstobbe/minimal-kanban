import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { LoginPage } from './LoginPage';
import { RegistrationPage } from './RegistrationPage';
import { BoardPage } from './BoardPage';
import { NotFoundPage } from './NotFoundPage';

import graphqlClient from './graphql/graphqlClient';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const routing = (
    <ApolloProvider client={graphqlClient}>
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegistrationPage} />
                <Route path="/board" component={BoardPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </ApolloProvider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
