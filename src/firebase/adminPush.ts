// Config for Firebase Admin SDK, used for locally push data in bulk

const admin = require("firebase-admin");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const serviceAccount = require("../../e-k-wedding-website-firebase-adminsdk-tpk2b-3f0dcd0ec9.json");

// Initialize Firebase Admin SDK with the service account key
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export const firebaseAdminPush = { db };
export { db };
