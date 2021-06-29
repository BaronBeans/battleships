export interface GameState {
  state: GameStates;
  gameRef?: string;
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
