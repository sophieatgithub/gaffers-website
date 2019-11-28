//importing the libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

//
import App from './App';

//importing css styles
import '../src/styles/font.css';


//funtion 'render' from the library of ReactDOM
ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'));