import React from "react";
import { useSelector } from "react-redux";
import { isInProgress } from "../core/selectors/game.selectors";
import { AppState } from "../core/store";
import { StartPage } from "./App/StartPage";
import { Game } from "./Game/Game";

export const App = () => {
  const inProgress = useSelector<AppState, boolean>(isInProgress);

  if (inProgress) {
    return <Game />;
  }

  return <StartPage />;
};
