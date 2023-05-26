import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//1. Class Component
//import App from './Ex01';

//2. Function Component - useEffect
//import App from './Ex02'

//3. useState, useEffect 복습 - 참참참
//import App from './Ex03'

//4. useEffect를 통해 영화 open API 가져오기 (Fetch, Axios)
//import App from './Ex04'

import App from './Ex05'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
