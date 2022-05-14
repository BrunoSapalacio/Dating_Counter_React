import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './main/Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>
);
reportWebVitals();
