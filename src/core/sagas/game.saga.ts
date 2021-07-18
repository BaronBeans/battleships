import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { db } from "../../utils/fire";
import {
  addGameToDatabase,
  ADD_GAME,
  ADD_PLAYER,
  JOIN_GAME,
  overwriteGame,
} from "../actions/game.actions";
import { Game } from "../logic/game";
import { getGame } from "../selectors/game.selectors";
import { GameState } from "../../types/game.types";

const addGameToDB = async (game: Game) => {
  return await db.collection("games").add({
    inProgress: true,
    started: new Date(),
    state: JSON.parse(JSON.stringify(game)),
  });
};

const getGameFromDB = async (code: string): Promise<Game> => {
  const data = await db.collection("games").where("state.id", "==", code).get();
  const game = await data.docs[0].data();
  return game as Game;
};

const updateGame = async (code: string, game: Game): Promise<void> => {
  const dbGame = await db
    .collection("games")
    .where("state.id", "==", code)
    .get();
  const dbGameId = dbGame.docs[0].id;
  const result = await db
    .collection("games")
    .doc(dbGameId)
    .update({
      state: JSON.parse(JSON.stringify(game)),
    })
    .then((result) => console.log(result));
  console.log(result);
};

export function* addGame() {
  const game = yield select(getGame);
  yield call(addGameToDB, game);
}

export function* addPlayer() {
  const game: Game = yield select(getGame);
  if (game.players.length === 2) {
    return;
  }
  yield put(addGameToDatabase());
}

export function* joinGame({ payload }) {
  const { code, name, board } = payload;
  console.log(`${code}-${name}-${JSON.stringify(board)}`);
  const game = yield call(getGameFromDB, code);
  console.log(game);
  yield put(overwriteGame(game.state as Game));
  const newGame = new Game(game.state).addPlayer(name, board);
  console.log(newGame);
  yield put(overwriteGame(newGame as Game));
  // yield put(addPlayer2ToGame(name, board));
  // yield put(addPlayerToGame(name, board));
  // const newGame = yield select(getGame);
  // yield call(updateGame, code, newGame);
}

export function* gameSaga() {
  yield takeLatest(ADD_PLAYER, addPlayer);
  yield takeLatest(ADD_GAME, addGame);
  yield takeLatest(JOIN_GAME, joinGame);
}
