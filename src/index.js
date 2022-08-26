import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import 'react-toastify/dist/ReactToastify.css';
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {configureStore} from "@reduxjs/toolkit";
import {store} from "./stores/store";
//
// const persistConfig = {
//     key: 'root',
//     storage,
// }
//
// const persistedReducer = persistReducer(persistConfig, rootReducer)
//
// export const store = createStore(
//     persistedReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

