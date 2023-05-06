import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalStyle }  from './styles/global';
import App, { AnimatedScreen } from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <App />
    <AnimatedScreen/>
  </React.StrictMode>,
  document.getElementById('root')
);
