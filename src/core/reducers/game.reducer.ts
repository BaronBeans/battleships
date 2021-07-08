import { GameState, GameStates } from "../../types/game.types";
import {
  CHECK_CELL,
  END_GAME,
  GAME_ENDED,
  JOIN_GAME,
  SET_GAME_REF,
  START_GAME,
} from "../actions/game.actions";
import { game1 } from "../logic/testHelpers";

export const initialGameState: GameState = {
  state: GameStates.NOT_STARTED,
  game: game1,
};

export const gameReducer = (
  state: GameState = initialGameState,
  action: any
) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        state: GameStates.STARTING,
        player1Name: action.payload,
      };
    case JOIN_GAME:
      return {
        ...state,
        state: GameStates.JOINING,
        player2Name: action.payload,
      };
    case SET_GAME_REF:
      return {
        ...state,
        state: GameStates.STARTED,
        gameRef: action.payload,
      };
    case END_GAME:
      return {
        ...state,
        state: GameStates.ENDING,
      };
    case GAME_ENDED:
      return {
        state: GameStates.ENDED,
      };
    case CHECK_CELL:
      state.game.checkCell(action.payload);
      return state;
    default:
      return state;
  }
};
