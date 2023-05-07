import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './monserrat/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '../src/css/fonts.css'
import Applink from './components/Applink';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Applink/>
      {/* <Login/> */}
   
    </BrowserRouter>
    
  </React.StrictMode>
);

