import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Get the root element where you want to render your app
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render your root component using the root object
root.render(<App />);



