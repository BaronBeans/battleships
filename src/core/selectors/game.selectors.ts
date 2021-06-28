import { GameState } from "../../types/game.types";
type HasGameState = { game: GameState };

export const isInProgress = (state: HasGameState): boolean =>
  state.game.inProgress;
export const getGameRef = (state: HasGameState): string => state.game.gameRef;
