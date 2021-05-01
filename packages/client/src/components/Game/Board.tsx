import React, { useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  height: 300px;
  width: 300px;
`;

const GridItem = styled.div`
  border: 1px solid black;
  display: flex;
  background-color: ${(props) => (props.background ? "black" : "")};
`;

export interface BoardProps {
  visible: boolean;
}

export const Board = ({ visible }: BoardProps) => {
  const [config, setConfig] = useState([
    [
      { l: "a", n: 1, v: 0 },
      { l: "a", n: 1, v: 0 },
      { l: "a", n: 1, v: 0 },
    ],
    [
      { l: "a", n: 1, v: 0 },
      { l: "a", n: 1, v: 1 },
      { l: "a", n: 1, v: 0 },
    ],
    [
      { l: "a", n: 1, v: 0 },
      { l: "a", n: 1, v: 0 },
      { l: "a", n: 1, v: 0 },
    ],
  ]);
  const labelPrefix = visible ? "p" : "o";
  return (
    <Grid>
      {config.map((row) =>
        row.map((item) => {
          return (
            <GridItem
              background={visible && item.v}
              key={config.flat().indexOf(item)}
            />
          );
        })
      )}
    </Grid>
  );
};
