import { HitsAndMisses } from "../../types/game.types";
import { Ship } from "./ship";
import { Coordinate } from "./types";

export class Board {
  private _ships: Ship[];
  private _hits: Coordinate[];
  private _misses: Coordinate[];

  constructor(ships: Ship[]) {
    this._ships = ships;
    this._hits = [];
    this._misses = [];
  }

  checkPointWithShips(queryPoint: Coordinate) {
    for (let ship of this._ships) {
      const result = ship.checkPoint(queryPoint);
      if (result === "H" || result === "S") {
        this._hits.push(queryPoint);
        return result;
      }
    }
    this._misses.push(queryPoint);
    return "M";
  }
  numberOfShips() {
    return this._ships.length;
  }
  ships() {
    return this._ships;
  }
  getCheckedCells(): HitsAndMisses {
    return {
      hits: this._hits,
      misses: this._misses,
    };
  }
  getShipsPoints() {
    return this._ships.map((s) => s.calculatePoints());
  }
}
