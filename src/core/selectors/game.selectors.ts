import { GameState, GameStates, HitsAndMisses } from "../../types/game.types";
import { Game } from "../logic/game";
import { Coordinate } from "../logic/types";
type HasGameState = { game: GameState };

export const isInProgress = (state: HasGameState): boolean =>
  state.game.state === GameStates.STARTED ||
  state.game.state === GameStates.JOINED;
export const isLoading = (state: HasGameState): boolean =>
  state.game.state === GameStates.STARTING ||
  state.game.state === GameStates.JOINING ||
  state.game.state === GameStates.ENDING;
export const getGameRef = (state: HasGameState): string => state.game.gameRef;
export const getGame = (state: HasGameState): Game => state.game.game;
export const getCheckedCells = (state: HasGameState): HitsAndMisses =>
  state.game.game._checkedCells;
export const getShipsCells = (state: HasGameState): Coordinate[][] =>
  state.game.game.getShips();
