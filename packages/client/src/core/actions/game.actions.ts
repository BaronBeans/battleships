export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const endGame = () => {
  return {
    type: END_GAME,
  };
};
