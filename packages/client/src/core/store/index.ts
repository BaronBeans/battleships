import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { gameReducer } from "../reducers/game.reducer";
import { GameState } from "./game.store";

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

// sagaMiddleware.run(rootSaga);

export default store;
