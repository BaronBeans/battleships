import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { endGame } from "../../core/actions/game.actions";
import styled from "styled-components";
import { AppState } from "../../core/store";
import { getGameRef } from "../../core/selectors/game.selectors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 1rem;
  }
`;

export const GameControls = () => {
  const gameRef = useSelector<AppState, string>(getGameRef);
  const dispatch = useDispatch();

  const endGameClick = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(endGame(gameRef));
  };

  return (
    <Container>
      <button onClick={endGameClick}>End game</button>
      <p>id goes here</p>
      <button>?</button>
    </Container>
  );
};
