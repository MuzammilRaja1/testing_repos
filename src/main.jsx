// // src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Use `react-dom/client` for React 18
import { Provider } from 'react-redux';
import { store } from './store/store'; // Import the store
import App from './App';

// Create a root and render your app
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root
root.render(  // Use the `render` method on the root instance
  <Provider store={store}>
    <App />
  </Provider>
);
