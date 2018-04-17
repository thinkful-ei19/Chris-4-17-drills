import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import Email from './components/email';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const initialState = {
    inbox: {
        id: 'inbox',
        name: "Inbox",
        emails: {
            0: {
                id: 0,
                from: "billg@microsoft.com",
                to: "TeamWoz@Woz.org",
                title: "Possible work opportunity",
                content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
            },
            1: {
                id: 1,
                from: "zuck@facebook.com",
                to: "TeamWoz@Woz.org",
                title: "Do you know PHP?",
                content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
            }
        }
    },
    spam: {
        id: 'spam',
        name: "Spam",
        emails: {
            0: {
                id: 0,
                from: "ChEaPFl1ghTZ@hotmail.com",
                to: "TeamWoz@Woz.org",
                title: "WaNt CHEEp FlitZ",
                content: "Theyre CheEp"
            },
            1: {
                id: 1,
                from: "NiKEAIRJordanZ@hotmail.com",
                to: "TeamWoz@Woz.org",
                title: "JorDanz For SAle",
                content: "Theyre REELY CheEp"
            }
        }
    }
};

const store = createStore(state => state, initialState);


ReactDOM.render(
    <Provider store={store}>
        <Email />
    </Provider>,
    document.getElementById('root')
);
