export interface GameState {
  inProgress: boolean;
  gameState: {};
  currentTurn: "p" | "o";
}

export interface Game {
  player: Player;
  opponent: Player;
  turns: number;
  time: number;
}

export interface Player {}

export interface BoardStatus {}
