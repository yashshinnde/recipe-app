import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Avatar from './Avatar';
import Company from './Company';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
  <App></App>
  
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
