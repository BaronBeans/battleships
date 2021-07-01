import { Ship } from "./ship";
import { Coordinate } from "./types";

export class Board {
  private _ships: Ship[];

  constructor(ships: Ship[]) {
    this._ships = ships;
  }

  checkPointWithShips(queryPoint: Coordinate) {
    for (let ship of this._ships) {
      const result = ship.checkPoint(queryPoint);
      if (result === "H" || result === "S") return result;
    }
    return "M";
  }
  numberOfShips() {
    return this._ships.length;
  }
  ships() {
    return this._ships;
  }
}
