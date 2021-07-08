export const START_GAME = "START_GAME";
import { Coordinate } from "../logic/types";
export const JOIN_GAME = "JOIN_GAME";
export const SET_GAME_REF = "SET_GAME_REF";
export const END_GAME = "END_GAME";
export const GAME_ENDED = "GAME_ENDED";
export const CHECK_CELL = "CHECK_CELL";

export const startGame = (name: string) => ({
  type: START_GAME,
  payload: name,
});

export const joinInProgressGame = (code: string) => ({
  type: JOIN_GAME,
  payload: code,
});

export const setGameRef = (ref: string) => ({
  type: SET_GAME_REF,
  payload: ref,
});

export const endGame = (ref: string) => ({
  type: END_GAME,
  payload: ref,
});

export const gameEnded = () => ({
  type: GAME_ENDED,
});

export const checkCell = (coords: Coordinate) => ({
  type: CHECK_CELL,
  payload: coords,
});
