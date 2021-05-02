import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../core/actions/game.actions";
import { isInProgress } from "../core/selectors/game.selectors";
import { AppState } from "../core/store";
import { Game } from "./Game/Game";

export const App = () => {
  const inProgress = useSelector<AppState, boolean>(isInProgress);
  const dispatch = useDispatch();

  const startGameClick = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(startGame());
  };

  if (inProgress) {
    return <Game />;
  }

  return (
    <>
      <button onClick={startGameClick}>Start game</button>
    </>
  );
};
