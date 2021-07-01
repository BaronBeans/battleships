// export const ship1: Ship = {
//   start: { x: 0, y: 0 },
//   end: { x: 3, y: 0 },
//   length: 4,
//   points: [
//     { x: 0, y: 0 },
//     { x: 1, y: 0 },
//     { x: 2, y: 0 },
//     { x: 3, y: 0 },
//   ],
// };

import { Ship } from "./ship";
import { Orientation } from "./types";

// export const ship2: Ship = {
//   start: { x: 5, y: 3 },
//   end: { x: 5, y: 4 },
//   length: 2,
//   points: [
//     { x: 5, y: 3 },
//     { x: 5, y: 4 },
//   ],
// };

export const ship1 = new Ship({ x: 1, y: 1 }, 3, Orientation.VERTICAL);
export const ship2 = new Ship({ x: 3, y: 2 }, 5, Orientation.VERTICAL);
export const ship3 = new Ship({ x: 0, y: 0 }, 3, Orientation.HORIZONTAL);
