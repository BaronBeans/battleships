import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getGameRef, isInProgress } from "../core/selectors/game.selectors";
import { AppState } from "../core/store";
import { endGame, startGame } from "../core/actions/game.actions";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  fieldset {
    display: flex;
    flex-direction: column;

    input,
    button {
      margin: 0.5rem;
    }
  }
`;

export const App = () => {
  const [name, setName] = useState<string>("");
  const inProgress = useSelector<AppState, boolean>(isInProgress);
  const gameRef = useSelector<AppState, string>(getGameRef);
  const dispatch = useDispatch();

  const createGame = async () => {
    if (!name) return;
    dispatch(startGame(name));
  };
  const destroyGame = async () => {
    dispatch(endGame(gameRef));
  };

  if (inProgress) {
    return (
      <AppContainer>
        <h1>Test</h1>
        <button onClick={destroyGame}>End Game</button>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <h1>Battleships</h1>
      <fieldset>
        <legend>Create Game</legend>
        <input
          placeholder="name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <button onClick={createGame}>Start New Online Game</button>
        <button>Start New Game with a Bot</button>
      </fieldset>
      <fieldset>
        <legend>Join Game</legend>
        <input placeholder="game code" type="text" />
        <button>Join Game</button>
      </fieldset>
    </AppContainer>
  );
};
