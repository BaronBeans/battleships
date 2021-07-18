import * as shortid from "shortid";
import { HitsAndMisses } from "../../types/game.types";
import { Board } from "./board";

export interface Player {
  name: string;
  board: Board;
  checkedCells: HitsAndMisses;
}

export class Game {
  public id: string;
  public players: Player[];
  public turn: number;

  constructor(game?: Game) {
    this.id = game ? game.id : shortid.generate();
    this.turn = game ? game.turn : 1;
    this.players = game ? game.players : [];
  }

  addPlayer(playerName: string, board: Board) {
    if (this.players.length === 2) return;
    if (!playerName) throw new Error("no player name provided");
    if (!board) throw new Error("no board provided");
    this.players.push({
      name: playerName,
      board,
      checkedCells: { hits: [], misses: [] },
    });
    return this;
  }

  // constructor(player1Name: string, board: Board) {
  //   if (!player1Name) throw new Error("No player specified");
  //   this.players = [
  //     {
  //       name: player1Name,
  //       board,
  //       checkedCells: { hits: [], misses: [] },
  //     },
  //   ];
  // }

  // checkCell(coords: Coordinate) {
  //   this.players[0].board.checkPointWithShips(coords);
  //   this.getCheckedCells();
  // }
  // getCheckedCells() {
  //   const { hits, misses } = this.players[0].board.getCheckedCells();
  //   this.players[0].checkedCells = {
  //     hits,
  //     misses,
  //   };
  // }
  // checkedCells() {
  //   return this.players[0].checkedCells;
  // }
  // getShips() {
  //   return this.players[0].board.getShipsPoints();
  // }
  // addPlayer(name: string, board: Board) {
  //   this.players.push({ name, board, checkedCells: { hits: [], misses: [] } });
  // }
}
