import React, { ChangeEvent, MouseEvent, useState } from "react";
import styled from "styled-components";
import { startGame } from "../../core/actions/game.actions";
import { useDispatch } from "react-redux";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const JoinGame = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

export const StartPage = () => {
  const [joining, setJoining] = useState(false);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const startNewGame = (e: MouseEvent<HTMLButtonElement>) => {
    setJoining(true);
    console.log("new game");
    dispatch(startGame());
  };
  const joinGame = (e: MouseEvent<HTMLButtonElement>) => {
    setJoining(true);
    console.log(`joining game ${input}`);
    setInput("");
  };
  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <Container>
      <h1>Battleships</h1>
      <button onClick={startNewGame} disabled={joining}>
        Start new game
      </button>
      <JoinGame>
        <input
          value={input}
          onChange={updateInput}
          placeholder="enter code"
          readOnly={joining}
          disabled={joining}
        />
        <button onClick={joinGame} disabled={joining}>
          Join game
        </button>
      </JoinGame>
    </Container>
  );
};
