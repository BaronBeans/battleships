import { HitsAndMisses } from "../../types/game.types";
import { Board } from "./board";
import { Coordinate } from "./types";

export class Game {
  private _player1Name: string;
  public _checkedCells: HitsAndMisses;

  private _board: Board;
  constructor(player1Name: string, board: Board) {
    if (!player1Name) throw new Error("No player specified");
    this._player1Name = player1Name;
    this._board = board;
    this._checkedCells = { hits: [], misses: [] };
  }

  checkCell(coords: Coordinate) {
    this._board.checkPointWithShips(coords);
    this.getCheckedCells();
  }
  getCheckedCells() {
    const { hits, misses } = this._board.getCheckedCells();
    this._checkedCells = {
      hits,
      misses,
    };
  }
  checkedCells() {
    return this._checkedCells;
  }
}
