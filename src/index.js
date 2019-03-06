import React from 'react';
import ReactDOM from 'react-dom';
import './components/home/css/custom.css';
import './components/p2p/css/p2p.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/stylesheet.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const app = (
        <BrowserRouter>
            <App />
        </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
