import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  appId: process.env.VITE_APP_DEV_APP_ID,
  apiKey: process.env.VITE_APP_DEV_API_KEY,
  authDomain: process.env.VITE_APP_DEV_AUTH_DOMAIN,
  databaseURL: process.env.VITE_APP_DEV_DATABASE_URL,
  projectId: process.env.VITE_APP_DEV_PROJECT_ID,
  storageBucket: process.env.VITE_APP_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_APP_DEV_MESSAGING_SENDER_ID,
  measurementId: process.env.VITE_APP_DEV_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);