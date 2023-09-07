import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
// import Auth0ProviderWithNavigate from './components/Auth/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* <Auth0ProviderWithNavigate> */}
      <App />
    {/* </Auth0ProviderWithNavigate> */}
  </Router>
);
