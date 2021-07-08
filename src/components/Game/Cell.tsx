import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { isPropertyAccessChain } from "typescript";
import { checkCell } from "../../core/actions/game.actions";
import {
  getCheckedCells,
  isCellHit,
  isCellMissed,
} from "../../core/selectors/game.selectors";
import { AppState } from "../../core/store";
import { HitsAndMisses } from "../../types/game.types";

export const CellStyle = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  height: 100%;
  width: 100%;

  button {
    height: 100%;
    width: 100%;
  }
`;

export interface CellProps {
  row: number;
  column: number;
  hit: boolean;
  miss: boolean;
}

const ButtonStyle = styled.button`
  background: ${(props) =>
    props.isHit === true ? "red" : props.isMiss === true ? "blue" : "white"};
`;

export const Cell = ({ row, column, hit, miss }: CellProps) => {
  const { hits, misses } = useSelector<AppState, HitsAndMisses>(
    getCheckedCells
  );
  const isHit = useSelector<AppState, Boolean>(
    isCellHit({ x: row, y: column })
  );
  const isMiss = useSelector<AppState, Boolean>(
    isCellMissed({ x: row, y: column })
  );
  const dispatch = useDispatch();
  const buttonClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (hit || miss) return;
    console.log(`${row},${column}`);
    //     TODO: dispatch a strike on this cell.
    dispatch(checkCell({ x: row, y: column }));
  };
  // const checks = [...hits, ...misses];

  return (
    <CellStyle row={row} column={column}>
      <ButtonStyle
        onClick={buttonClick}
        isHit={isHit}
        isMiss={isMiss}
      ></ButtonStyle>
    </CellStyle>
  );
};
