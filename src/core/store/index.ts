import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { GameState } from "../../types/game.types";
import { gameReducer } from "../reducers/game.reducer";
import { rootSaga } from "../sagas";
export interface AppState {
  game: GameState;
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
