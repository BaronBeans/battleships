import { call, put, select, takeLatest } from "redux-saga/effects";
import { db } from "../../utils/fire";
import {
  END_GAME,
  gameEnded,
  setGameRef,
  START_GAME,
} from "../actions/game.actions";
import { getGame } from "../selectors/game.selectors";
import { GameState } from "../../types/game.types";

const addGameToDB = async (player1Name: string) => {
  return await db.collection("games").add({
    inProgress: true,
    started: new Date(),
    player1Name,
  });
};

const removeGameFromDB = async (ref: string, game: GameState) => {
  return await db
    .collection("games")
    .doc(ref)
    .set({
      ...game,
    });
};

export function* startNewGame({ payload }) {
  const gameRef = yield call(addGameToDB, payload);
  console.log(gameRef);
  yield put(setGameRef(gameRef.id));
}

export function* endGame({ payload }) {
  const game = yield select(getGame);
  const result = yield call(removeGameFromDB, payload, game);
  console.log(result);
  yield put(gameEnded());
}

export function* gameSaga() {
  yield takeLatest(START_GAME, startNewGame);
  yield takeLatest(END_GAME, endGame);
}
