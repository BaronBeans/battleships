import { GameState, GameStates } from "../../types/game.types";
type HasGameState = { game: GameState };

export const isInProgress = (state: HasGameState): boolean =>
  state.game.state === GameStates.STARTED ||
  state.game.state === GameStates.JOINED;
export const isLoading = (state: HasGameState): boolean =>
  state.game.state === GameStates.STARTING ||
  state.game.state === GameStates.JOINING ||
  state.game.state === GameStates.ENDING;
export const getGameRef = (state: HasGameState): string => state.game.gameRef;
export const getGame = (state: HasGameState): GameState => state.game;
