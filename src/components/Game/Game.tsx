import React from "react";
import styled from "styled-components";
import { Board } from "./Board";
import { GameControls } from "./GameControls";

const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Game = () => {
  return (
    <>
      <GameControls />
      <Container>
        <Board />
      </Container>
      <Container>
        <Board />
      </Container>
    </>
  );
};
