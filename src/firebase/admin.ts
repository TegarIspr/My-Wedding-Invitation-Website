import admin from "firebase-admin";

const privateKey = process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n") : undefined;

let db: admin.firestore.Firestore;

try {
  if (privateKey && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PROJECT_ID) {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          privateKey,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          projectId: process.env.FIREBASE_PROJECT_ID,
        }),
      });
    }
    db = admin.firestore();
  } else {
    db = {} as admin.firestore.Firestore;
  }
} catch {
  db = {} as admin.firestore.Firestore;
}

export { db };
