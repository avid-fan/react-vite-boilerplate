import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const a = 5;
console.log(a);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
