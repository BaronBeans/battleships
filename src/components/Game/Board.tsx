import React from "react";
import styled from "styled-components";
import { GridObject } from "./Grid";
import { useSelector } from "react-redux";
import { AppState } from "../../core/store/index";
import { HitsAndMisses } from "../../types/game.types";
import { getCheckedCells } from "../../core/selectors/game.selectors";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-content: center;

  .header {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  .side {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
  .grid {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
`;

const LabelGroup = styled.div<{ direction: "row" | "column" }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-evenly;
  margin: 0.2rem;

  p {
    margin: auto;
    padding: auto;
    font-family: "Lato", sans-serif;
  }
`;

export const Board = () => {
  const { hits, misses } = useSelector<AppState, HitsAndMisses>(
    getCheckedCells
  );
  return (
    <>
      <Container>
        <LabelGroup className="header" direction="row">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </LabelGroup>
        <LabelGroup className="side" direction="column">
          <p>A</p>
          <p>B</p>
          <p>C</p>
          <p>D</p>
          <p>E</p>
          <p>F</p>
          <p>G</p>
          <p>H</p>
          <p>I</p>
          <p>J</p>
        </LabelGroup>
        <div className="grid">
          <GridObject />
        </div>
      </Container>
      <hr />
      <p>Hits:</p>
      <ul>
        {hits.map((h) => (
          <li key={JSON.stringify(h)}>{JSON.stringify(h)}</li>
        ))}
      </ul>
      <p>Misses:</p>
      <ul>
        {misses.map((m) => (
          <li key={JSON.stringify(m)}>{JSON.stringify(m)}</li>
        ))}
      </ul>
    </>
  );
};
