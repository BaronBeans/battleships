import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const createGame = functions.https.onRequest(
    async (request, response) => {
      try {
        const {playerName} = request.query;
        if (!playerName) throw new Error("no playerName specified");
        const ref = await admin.firestore().collection("games").add({
          player1: playerName,
          started: new Date(),
          inProgress: true,
        });
        response.status(200).send(ref);
      } catch (error) {
        functions.logger.error(error);
        response.status(500).send(error.message);
      }
    }
);
