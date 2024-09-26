import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
require('dotenv').config();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


