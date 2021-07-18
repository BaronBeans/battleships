import { ADD_PLAYER, OVERWRITE_GAME } from "../actions/game.actions";
import { Game } from "../logic/game";

export const initialGameState: Game = new Game();

export const gameReducer = (state: Game = initialGameState, action: any) => {
  switch (action.type) {
    case ADD_PLAYER:
      const newState = state.addPlayer(
        action.payload.name,
        action.payload.board
      );
      return newState;
    case OVERWRITE_GAME:
      const exisitingGame = action.payload as Game;
      return exisitingGame;
    default:
      return state;
  }
};
