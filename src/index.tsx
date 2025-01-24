import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBoFCNokQ3unyugF-Nj8elj1_ZeIZPLpkM',
  authDomain: 'drinovsky-developer-site.firebaseapp.com',
  projectId: 'drinovsky-developer-site',
  storageBucket: 'drinovsky-developer-site.firebasestorage.app',
  messagingSenderId: '948235055706',
  appId: '1:948235055706:web:812632acead4517e18de63',
  measurementId: 'G-WB51HW462H'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Initialize firebase instance
if (process.env.NODE_ENV === 'production'  ){
  fetch('/__/firebase/init.json').then(async response => {
    initializeApp(await response.json());
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
