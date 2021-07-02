import React from "react";

export const Board = () => {
  return (
    <div>
      <h1>Board</h1>
    </div>
  );
};

// import React, { MouseEvent, useState } from "react";
// import styled from "styled-components";

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, auto);
//   grid-template-rows: repeat(3, auto);
//   height: 300px;
//   width: 300px;
// `;

// const GridItem = styled.div`
//   border: 1px solid black;
//   display: flex;

//   button {
//     color: none;
//     border: none;
//     width: 100%;
//     height: 100%;
//   }
// `;

// export interface BoardProps {
//   visible: boolean;
// }

// export const Board = ({ visible }: BoardProps) => {
//   const [config, setConfig] = useState([
//     [
//       { l: "a", n: 1, v: 0 },
//       { l: "b", n: 1, v: 0 },
//       { l: "c", n: 1, v: 0 },
//     ],
//     [
//       { l: "a", n: 2, v: 0 },
//       { l: "b", n: 2, v: 1 },
//       { l: "c", n: 2, v: 0 },
//     ],
//     [
//       { l: "a", n: 3, v: 0 },
//       { l: "b", n: 3, v: 0 },
//       { l: "c", n: 3, v: 0 },
//     ],
//   ]);
//   const labelPrefix = visible ? "p" : "o";
//   const clickSquare = (e: MouseEvent) => {
//     // console.log(JSON.parse(e.target.dataset.itemstring).v);
//     if (JSON.parse(e.target.dataset.itemstring).v === 1) {
//       console.log("HIT");
//     } else {
//       console.log("MISS");
//     }
//   };
//   return (
//     <Grid>
//       {config.map((row) =>
//         row.map((item) => {
//           return (
//             <GridItem
//               // background={visible && item.v}
//               key={config.flat().indexOf(item)}
//               data-itemstring={JSON.stringify(item)}
//               data-item={item}
//               onClick={clickSquare}
//             >
//               {/* <button onClick={clickSquare}></button> */}
//             </GridItem>
//           );
//         })
//       )}
//     </Grid>
//   );
// };
