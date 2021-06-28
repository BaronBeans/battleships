import { END_GAME, setGameRef, START_GAME } from "../actions/game.actions";
import { call, put, takeLatest } from "redux-saga/effects";
import { db } from "../../utils/fire";

const addGameToDB = async (player1Name: string) => {
  return await db.collection("games").add({
    inProgress: true,
    started: new Date(),
    player1Name,
  });
};

const removeGameFromDB = async (ref: string) => {
  return await db.collection("games").doc(ref).delete();
};

export function* startNewGame({ payload }) {
  const gameRef = yield call(addGameToDB, payload);
  console.log(gameRef);
  yield put(setGameRef(gameRef.id));
}

export function* endGame({ payload }) {
  const result = yield call(removeGameFromDB, payload);
  console.log(result);
}

export function* gameSaga() {
  yield takeLatest(START_GAME, startNewGame);
  yield takeLatest(END_GAME, endGame);
}
