import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { checkCell } from "../../core/actions/game.actions";

export const CellStyle = styled.div<{
  row: number;
  column: number;
  cellBackground: string;
  background: string;
}>`
  grid-row: ${(props) => props.row};
  grid-column: ${(props) => props.column};
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.cellBackground};

  button {
    height: 75%;
    width: 75%;
    border-radius: 50%;

    background-color: ${(props) => props.background};
  }
`;

export interface CellProps {
  row: number;
  column: number;
  hit?: boolean;
  miss?: boolean;
  own?: boolean;
}

export const Cell = ({ row, column, hit, miss, own }: CellProps) => {
  const dispatch = useDispatch();
  const buttonClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (hit || miss) return;
    // console.log(`${row},${column}`);
    dispatch(checkCell({ x: row, y: column }));
  };

  return (
    <CellStyle
      row={row}
      column={column}
      background={hit ? "red" : miss ? "blue" : ""}
      cellBackground={own ? "black" : ""}
    >
      <button onClick={buttonClick}></button>
    </CellStyle>
  );
};
