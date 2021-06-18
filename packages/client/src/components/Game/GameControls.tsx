import React from "react";
import { useDispatch } from "react-redux";
import { endGame } from "../../core/actions/game.actions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 1rem;
  }
`;

export const GameControls = () => {
  const dispatch = useDispatch();

  const endGameClick = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(endGame());
  };

  return (
    <Container>
      <button onClick={endGameClick}>End game</button>
      <p>id goes here</p>
      <button>?</button>
    </Container>
  );
};
