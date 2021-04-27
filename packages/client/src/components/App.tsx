import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../core/actions/game.actions";
import { isInProgress } from "../core/selectors/game.selectors";
import { AppState } from "../core/store";

export const App = () => {
  const inProgress = useSelector<AppState, boolean>(isInProgress);
  const dispatch = useDispatch();

  const startGameClick = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(startGame());
  };
  return (
    <>
      <h1>{inProgress ? "Started" : "Test"}</h1>
      {!inProgress && <button onClick={startGameClick}>Start game</button>}
    </>
  );
};
