import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="107944836752-gakk2f1ovj5s003u9uts3ijl3hig27tg.apps.googleusercontent.com">
    <App />
     </GoogleOAuthProvider>
  </React.StrictMode>
);


