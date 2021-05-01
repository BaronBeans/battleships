import React from "react";
import styled from "styled-components";
import { Board } from "./Board";

const GameContainer = styled.div`
  padding: 1rem 2rem;
`;

export const Game = () => {
  return (
    <>
      <GameContainer>
        <Board visible={false} />
      </GameContainer>
      <GameContainer>
        <Board visible={true} />
      </GameContainer>
    </>
  );
};
