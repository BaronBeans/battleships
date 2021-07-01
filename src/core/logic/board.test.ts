import { Board } from "./board";
import { ship1, ship2, ship3 } from "./testHelpers";

describe("Board logic tests", () => {
  it("can return it's ships", () => {
    const board = new Board([ship1, ship2]);
    expect(board.numberOfShips()).toBe(2);
  });

  it("can get a HIT from one of it's ships", () => {
    const board = new Board([ship1, ship2, ship3]);
    expect(board.checkPointWithShips({ x: 1, y: 1 })).toBe("H");
  });

  it("can get a MISS from all of it's ships", () => {
    const board = new Board([ship2, ship3]);
    expect(board.checkPointWithShips({ x: 1, y: 1 })).toBe("M");
  });

  it("can get a SUNK from one of it's ships", () => {
    const board = new Board([ship3]);
    expect(board.checkPointWithShips({ x: 0, y: 0 })).toBe("H");
    expect(board.checkPointWithShips({ x: 1, y: 0 })).toBe("H");
    expect(board.checkPointWithShips({ x: 2, y: 0 })).toBe("S");
  });
});
