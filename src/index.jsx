import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for createRoot
import App from './App';
import './index.css'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
