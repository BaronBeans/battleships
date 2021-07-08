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

import { Board } from "./board";
import { Game } from "./game";
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
export const ship3 = new Ship({ x: 8, y: 10 }, 3, Orientation.HORIZONTAL);

export const board1 = new Board([ship1, ship2, ship3]);

export const game1 = new Game("Sean", board1);
