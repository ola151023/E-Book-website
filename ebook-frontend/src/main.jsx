import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import AppRouter from './AppRouter';
import { Auth0Provider } from '@auth0/auth0-react';
import { domain, clientId } from '../auth0-config.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,


   

  </React.StrictMode>,
)
