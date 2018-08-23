import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './utils/config-store';
import App from './components/app';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/app.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
