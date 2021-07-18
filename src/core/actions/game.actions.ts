import { Board } from "../logic/board";
import { Game } from "../logic/game";
import firebase from "firebase";

export const ADD_PLAYER = "ADD_PLAYER";
export const ADD_PLAYER_2 = "ADD_PLAYER_2";
export const ADD_GAME = "ADD_GAME";
export const JOIN_GAME = "JOIN_GAME";
export const OVERWRITE_GAME = "OVERWRITE_GAME";

export const addPlayerToGame = (user: firebase.User, board: Board) => ({
  type: ADD_PLAYER,
  payload: {
    user,
    board,
  },
});

export const addGameToDatabase = () => ({
  type: ADD_GAME,
});

export const joinGameInProgress = (
  code: string,
  name: string,
  board: Board
) => ({
  type: JOIN_GAME,
  payload: {
    code,
    name,
    board,
  },
});

export const overwriteGame = (game: Game) => ({
  type: OVERWRITE_GAME,
  payload: game,
});
