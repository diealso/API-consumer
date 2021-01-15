import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import queryReducer from './store/reducers/queryReducer';

import createSagaMiddleware from 'redux-saga';
import { fetchDataSaga } from './store/sagas/querySaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(queryReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchDataSaga);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
