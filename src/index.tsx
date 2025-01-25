import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseOptions, initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig: FirebaseOptions = {
  appId: import.meta.env.VITE_APP_DEV_API_KEY,
  apiKey: import.meta.env.VITE_APP_DEV_API_KEY,
  authDomain: import.meta.env.VITE_APP_DEV_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_DEV_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_DEV_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_DEV_MESSAGING_SENDER_ID,
  measurementId: import.meta.env.VITE_APP_DEV_MEASUREMENT_ID
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Initialize firebase instance
if (import.meta.env.MODE === 'production'){
  fetch('/__/firebase/init.json').then(async response => {
    initializeApp(await response.json());
    //const analytics = getAnalytics(app);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
}
else{
  initializeApp(firebaseConfig);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();
