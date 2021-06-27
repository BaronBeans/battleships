import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

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

  const createGame = async () => {
    if (!name) return;
    const response = await fetch(
      "https://us-central1-battleships-cfcc6.cloudfunctions.net/createGame?" +
        name,
      {
        headers: [["Access-Control-Allow-Origin", "true"]],
      }
    );
    console.log(response);
  };

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
