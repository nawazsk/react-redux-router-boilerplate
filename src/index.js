import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import './index.css';
import App from './App';

const store = createStore(rootReducer) || {};

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path='/:filter?' component={App} />
        </Router>
    </Provider>, 

document.getElementById('root'));

