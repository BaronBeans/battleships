import { GameState } from "../store/game.store";

type HasGameState = { game: GameState };

export const isInProgress = (state: HasGameState): boolean =>
  state.game.inProgress;
