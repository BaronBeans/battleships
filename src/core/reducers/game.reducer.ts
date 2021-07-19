import { ADD_PLAYER } from "../actions/game.actions";
import { GameObject } from "../store";

export const initialGameState: GameObject = {} as GameObject;
export const gameReducer = (
  state: GameObject = initialGameState,
  action: any
) => {
  switch (action.type) {
    case ADD_PLAYER:
      const newState = (state as GameObject).addPlayer(action.payload.player);
      return newState;
    default:
      return state;
  }
};
