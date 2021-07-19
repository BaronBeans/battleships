import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { HitsAndMisses } from "../../types/game.types";
import { Board } from "../logic/board";
import { gameReducer } from "../reducers/game.reducer";
import { rootSaga } from "../sagas";

export class Player {
  public name: string;
  public board: Board;
  public turns: HitsAndMisses[];
  public state: HitsAndMisses[];

  constructor(name: string) {
    this.name = name;
    this.board = {} as Board;
    this.turns = [];
    this.state = [];
  }
}

export const enum GameStates {
  UNDEFINED,
  STARTING,
  IN_PROGRESS,
  FINISHED,
}
export class GameObject {
  public players: Player[];
  public state: GameStates;
  public turn: 1 | 2;

  constructor() {
    this.players = [];
    this.state = GameStates.UNDEFINED;
    this.turn = 1;
  }

  public addPlayer(player: Player): GameObject {
    this.players.push(player);
    return this;
  }
}
export interface AppState {
  game: GameObject;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers<AppState>({
    game: gameReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
