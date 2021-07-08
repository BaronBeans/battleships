import React from "react";
import styled from "styled-components";
import { Cell } from "./Cell";
import { HitsAndMisses } from "../../types/game.types";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 2rem);
  grid-template-columns: repeat(10, 2rem);
`;

export const GridObject = ({ hits, misses }: HitsAndMisses) => {
  const createGrid = () => {
    let grid = [];

    // Outer loop to create rows:
    for (let i = 1; i < 11; i++) {
      let children = [];
      //Inner loop to create cells
      for (let j = 1; j < 11; j++) {
        // const isChecked = (): boolean => checks.includes({ x: i, y: j });
        const isHit = (): boolean => hits.includes({ x: i, y: j });
        const isMiss = (): boolean => misses.includes({ x: i, y: j });

        children.push(
          <Cell
            row={i}
            column={j}
            key={`${i},${j}`}
            hit={isHit()}
            missed={isMiss()}
          />
        );
      }
      //Create the parent and add the children
      grid.push(<React.Fragment key={`${i}`}>{children}</React.Fragment>);
    }
    return grid;
  };

  return <Container>{createGrid()}</Container>;
};
