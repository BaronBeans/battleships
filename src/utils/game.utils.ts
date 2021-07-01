export const generateRandomBoard = () => {
  return exampleBoard;
};

export interface BoardObject {
  state: number[][];
  ships: ShipInfo[];
}

export interface ShipInfo {
  length: number;
  orientation: "VERTICAL" | "HORIZONTAL";
  front: Coord;
}

export interface Coord {
  x: number;
  y: number;
}

export const exampleBoard: BoardObject = {
  state: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  ships: [
    { length: 2, orientation: "HORIZONTAL", front: { x: 2, y: 0 } },
    { length: 3, orientation: "VERTICAL", front: { x: 3, y: 1 } },
  ],
};
