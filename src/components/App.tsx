import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { joinInProgressGame, startGame } from "../core/actions/game.actions";
import { isInProgress, isLoading } from "../core/selectors/game.selectors";
import { AppState } from "../core/store";
import { Game } from "../components/Game/Game";

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
  const [code, setCode] = useState<string>("");
  const inProgress = useSelector<AppState, boolean>(isInProgress);
  const loading = useSelector<AppState, boolean>(isLoading);
  const dispatch = useDispatch();

  const createGame = async () => {
    if (!name) return;
    dispatch(startGame(name));
  };

  const joinGame = async () => {
    if (!code) return;
    dispatch(joinInProgressGame(code));
  };

  // return <SetupBoard />;

  if (loading) return <h1>Loading...</h1>;

  if (inProgress) {
    return (
      <AppContainer>
        <Game />
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
          type="text"
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
        <input
          placeholder="game code"
          type="text"
          value={code}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
        />
        <button onClick={joinGame}>Join Game</button>
      </fieldset>
    </AppContainer>
  );
};
