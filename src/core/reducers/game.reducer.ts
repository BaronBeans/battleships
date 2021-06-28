import { GameState } from "../../types/game.types";
import { END_GAME, SET_GAME_REF, START_GAME } from "../actions/game.actions";

export const initialGameState: GameState = {
  inProgress: false,
};

export const gameReducer = (
  state: GameState = initialGameState,
  action: any
) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        inProgress: true,
        player1Name: action.payload,
      };
    case SET_GAME_REF:
      return {
        ...state,
        gameRef: action.payload,
      };
    case END_GAME:
      return {
        inProgress: false,
      };
    default:
      return state;
  }
};
