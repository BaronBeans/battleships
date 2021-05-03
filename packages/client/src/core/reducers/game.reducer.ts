import { END_GAME, START_GAME } from "../actions/game.actions";
import { Game, GameState } from "../store/game.store";

const initialState: GameState = {
  inProgress: false,
  currentTurn: "p",
  gameState: {} as Game,
};

export const gameReducer = (state: GameState = initialState, action: any) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        inProgress: true,
      };
    case END_GAME:
      return {
        ...state,
        inProgress: false,
      };
    default:
      return state;
  }
};
