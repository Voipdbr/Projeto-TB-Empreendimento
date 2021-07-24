import React from 'react';
import ReactDom from 'react-dom';
import BodyApp from './body/bodyapp.js';
import './css/body.css';
import './store/store.js';


ReactDom.render(
    <BodyApp/>,
    document.getElementById('root')
)