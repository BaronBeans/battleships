import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { endGame } from "../../core/actions/game.actions";
import { Board } from "./Board";

const GameContainer = styled.div`
  padding: 1rem 2rem;
`;

export const Game = () => {
  const dispatch = useDispatch();

  const endGameClick = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(endGame());
  };
  return (
    <>
      <button onClick={endGameClick}>End Game</button>
      <GameContainer>
        <Board visible={false} />
      </GameContainer>
      <GameContainer>
        <Board visible={true} />
      </GameContainer>
    </>
  );
};
