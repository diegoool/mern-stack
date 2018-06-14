import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import createStore from './app/store/createStore';
import { Provider } from 'react-redux';

// Store Initialization
// ------------------------------------
const initialState = window.__INITIAL_STATE__

const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

render (
    <Provider store={store}>
        <App />
    </Provider>,
    MOUNT_NODE
);