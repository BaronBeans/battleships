import { gameSaga } from "./game.saga";
import { all, fork } from "@redux-saga/core/effects";

export const rootSaga = function* () {
  yield all([yield fork(gameSaga)]);
};
