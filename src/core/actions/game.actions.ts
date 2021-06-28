export const START_GAME = "START_GAME";
export const SET_GAME_REF = "SET_GAME_REF";
export const END_GAME = "END_GAME";

export const startGame = (name: string) => ({
  type: START_GAME,
  payload: name,
});

export const setGameRef = (ref: string) => ({
  type: SET_GAME_REF,
  payload: ref,
});

export const endGame = (ref: string) => ({
  type: END_GAME,
  payload: ref,
});
