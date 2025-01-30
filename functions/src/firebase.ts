import * as admin from 'firebase-admin';

// Initialize our project application
admin.initializeApp({storageBucket: ''});

// Set up database connection
const firestoreDb: FirebaseFirestore.Firestore = admin.firestore();
firestoreDb.settings({timestampsInSnapshots: true, ignoreUndefinedProperties: true});
// Export our references
export const db = firestoreDb;