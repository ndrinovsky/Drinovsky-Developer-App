import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { type FirebaseOptions, initializeApp } from 'firebase/app';
import { HydratedRouter } from 'react-router/dom';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig: FirebaseOptions = {
  appId: import.meta.env.VITE_APP_DEV_APP_ID,
  apiKey: import.meta.env.VITE_APP_DEV_API_KEY,
  authDomain: import.meta.env.VITE_APP_DEV_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_DEV_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_DEV_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_DEV_MESSAGING_SENDER_ID,
  measurementId: import.meta.env.VITE_APP_DEV_MEASUREMENT_ID
};
initializeApp(firebaseConfig);

// Initialize firebase instance
if (import.meta.env.MODE === 'production'){
  ReactDOM.hydrateRoot(
    document,
    <HydratedRouter />
  );
}
else{
  ReactDOM.hydrateRoot(
    document,
    <React.StrictMode>
      <HydratedRouter />
    </React.StrictMode>
  );
}
