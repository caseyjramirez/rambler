import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const pos = { x : 0, y : 0 };

const saveCursorPosition = function(x, y) {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x', pos.x);
    document.documentElement.style.setProperty('--y', pos.y);
}

document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
