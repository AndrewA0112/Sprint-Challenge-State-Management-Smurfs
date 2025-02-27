import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'semantic-ui-css/semantic.min.css'
import App from "./components/App";
import { smurfReducer } from './reducers'
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import thunk from 'redux-thunk'

const store = createStore(smurfReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")
    );
