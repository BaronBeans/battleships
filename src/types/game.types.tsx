import { Game } from "../core/logic/game";
import { Coordinate } from "../core/logic/types";

export interface GameState {
  state: GameStates;
  gameRef?: string;

  game: Game;
}

export enum GameStates {
  NOT_STARTED,
  STARTING,
  JOINING,
  STARTED,
  JOINED,
  ENDING,
  ENDED,
}

export interface HitsAndMisses {
  hits: Coordinate[];
  misses: Coordinate[];
}
