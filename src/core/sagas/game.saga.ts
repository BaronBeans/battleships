import { call, put, select, takeLatest } from "redux-saga/effects";
import { db } from "../../utils/fire";
import { exampleBoard, generateRandomBoard } from "../../utils/game.utils";
import {
  END_GAME,
  gameEnded,
  JOIN_GAME,
  setGameRef,
  START_GAME,
} from "../actions/game.actions";
import { Game } from "../logic/game";
import { getGame } from "../selectors/game.selectors";

const addGameToDB = async (player1Name: string, game?: Game) => {
  return await db.collection("games").add({
    inProgress: true,
    started: new Date(),
    player1Name,
    board: game || "",
  });
};

const getGameFromDB = async (ref: string) => {
  return await (await db.collection("games").doc(ref).get()).data();
};

// const getDataFromGame

const removeGameFromDB = async (ref: string, game: any) => {
  game.inProgress = false;
  return await db
    .collection("games")
    .doc(ref)
    .set({
      ...game,
    });
};

export function* startNewGame({ payload }) {
  const game = yield select(getGame);
  console.log(game);
  const gameRef = yield call(addGameToDB, payload);
  console.log(gameRef);
  yield put(setGameRef(gameRef.id));
}

export function* joinInProgressGame({ payload }) {
  const game = yield call(getGameFromDB, payload);
  console.log(game);
  yield put(setGameRef(JSON.stringify(game)));
}

export function* endGame({ payload }) {
  // const game = yield select(getGame);
  const game = yield call(getGameFromDB, payload);
  const result = yield call(removeGameFromDB, payload, game);
  console.log(result);
  yield put(gameEnded());
}

export function* gameSaga() {
  yield takeLatest(START_GAME, startNewGame);
  yield takeLatest(JOIN_GAME, joinInProgressGame);
  yield takeLatest(END_GAME, endGame);
}
