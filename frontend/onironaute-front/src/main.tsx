import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalStyle }  from './styles/global';
import App from './App';
import { AnimatedScreen } from './components/AnimatedScreen';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <App />
    <AnimatedScreen/>
  
  </React.StrictMode>,
  document.getElementById('root')
);
