import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={process.env.REACT_APP_AUTH_REDIRECT_URI}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider >,
  document.getElementById('root')
);

