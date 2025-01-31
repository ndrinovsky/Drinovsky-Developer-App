import { FirebaseOptions, initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { databaseURL, projectID, storageBucket } from 'firebase-functions/params';

const firebaseConfig: FirebaseOptions = {
  // appId,
  // apiKey,
  // authDomain,
  databaseURL: databaseURL.value(),
  projectId : projectID.value(),
  storageBucket: storageBucket.value(),
  // messagingSenderId,
  // measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);