import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/index.js';
import promise from 'redux-promise-middleware';
import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import routers from './router';
import  logger  from 'redux-logger';
const history = createHistory();
const middleware = routerMiddleware(history);



const store = createStore(rootReducer,
    {},
    applyMiddleware(
        logger,
        middleware,
        promise()));


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} >
            <App >{ routers }</App>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
