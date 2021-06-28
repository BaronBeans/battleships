import firebase from "firebase/app";
import "firebase/firestore";

export const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  //   databaseURL: process.env.PROJECT_ID,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const fire = firebase.initializeApp(config);
export const db = fire.firestore();
// // local test
// if (location.hostname === "localhost") {
//   db.useEmulator("localhost", 8080);
// }
// //
db.enablePersistence().catch((err) => {
  if (err.code === "unimplemented") {
    console.log(`Persistence is not supported in the current browser.`);
  }
});
export default fire;
