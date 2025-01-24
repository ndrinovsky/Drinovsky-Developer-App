import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  appId: process.env.REACT_APP_DEV_API_KEY,
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
  measurementId: process.env.REACT_APP_DEV_MEASUREMENT_ID
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Initialize firebase instance
if (process.env.NODE_ENV === 'production'  ){
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
