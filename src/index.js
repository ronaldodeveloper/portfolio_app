import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router'
import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

