import { GameObject, Player } from "../store";

type HasGameState = { game: GameObject };

// import { GameState, HitsAndMisses } from "../../types/game.types";
// import { Game, Player } from "../logic/game";
// import { Ship } from "../logic/ship";
// import { Coordinate } from "../logic/types";

// export const getGameId = (state: HasGameState): string => state.game.id;
export const getGame = (state: HasGameState): GameObject => state.game;
export const player1 = (state: HasGameState): Player[] => state.game.players;
// export const player2 = (state: HasGameState): Player => state.game.players[1];
// export const isWaitingForOpponent = (state: HasGameState): boolean =>
//   state.game.players.length === 1;
// export const isGameStarted = (state: HasGameState): boolean =>
//   state.game.players.length === 2;
// export const player1HitsAndMisses = (state: HasGameState): HitsAndMisses =>
//   state.game.players[1].checkedCells;
// export const player2HitsAndMisses = (state: HasGameState): HitsAndMisses =>
//   state.game.players[0].checkedCells;

// export const player1Ships = (state: HasGameState): Coordinate[][] =>
//   state.game.players[0].board._ships.map((s) => s.calculatePoints());
// export const player2Ships = (state: HasGameState): Coordinate[][] =>
//   state.game.players[1].board._ships.map((s) => s.calculatePoints());
