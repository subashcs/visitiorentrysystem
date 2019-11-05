import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter  } from 'react-router-dom';


import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';

import rootSaga from './sagas';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware=createSagaMiddleware();
const store = createStore(rootReducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga,store.dispatch)

ReactDOM.render(
    <Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>	
		</Provider>
,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
