import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Coordinate } from "../../core/logic/types";
import {
  player1HitsAndMisses,
  player1Ships,
  player2HitsAndMisses,
  player2Ships,
} from "../../core/selectors/game.selectors";
import { AppState } from "../../core/store/index";
import { HitsAndMisses } from "../../types/game.types";
import { Cell } from "./Cell";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 2rem);
  grid-template-columns: repeat(10, 2rem);
`;

export interface GridProps {
  own: boolean;
}

export const GridObject = ({ own }: GridProps) => {
  const { hits, misses } = useSelector<AppState, HitsAndMisses>(
    own ? player1HitsAndMisses : player2HitsAndMisses
  );
  const ownCells = useSelector<AppState, Coordinate[][]>(
    own ? player1Ships : player2Ships
  );
  const createGrid = () => {
    let grid = [];

    // Outer loop to create rows:
    for (let i = 1; i < 11; i++) {
      let children = [];
      //Inner loop to create cells
      for (let j = 1; j < 11; j++) {
        children.push(
          <Cell
            row={i}
            column={j}
            key={`${i},${j}`}
            hit={hits.some((h) => h.x === i && h.y === j)}
            miss={misses.some((m) => m.x === i && m.y === j)}
            occupied={
              own && ownCells.flat().some((s) => s.x === i && s.y === j)
            }
            own={own}
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
