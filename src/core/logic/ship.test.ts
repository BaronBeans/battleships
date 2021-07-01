import { Ship } from "./ship";
import { Orientation } from "./types";

describe("Ship tests", () => {
  it("should be able to create a ship", () => {
    const ship = new Ship({ x: 3, y: 5 }, 4, Orientation.HORIZONTAL);
    expect(ship.sunk()).toBe(false);
  });

  it("should be able to HIT", () => {
    const ship = new Ship({ x: 3, y: 5 }, 4, Orientation.HORIZONTAL);
    const query = { x: 4, y: 5 };
    const points = ship.calculatePoints();
    expect(ship.checkPoint(query)).toBe("H");
  });

  it("should be able to MISS", () => {
    const ship = new Ship({ x: 3, y: 5 }, 4, Orientation.HORIZONTAL);
    const query = { x: 4, y: 7 };
    expect(ship.checkPoint(query)).toBe("M");
  });

  it("should be able to SINK", () => {
    const ship = new Ship({ x: 3, y: 5 }, 2, Orientation.HORIZONTAL);
    const query1 = { x: 3, y: 5 };
    const query2 = { x: 4, y: 5 };
    expect(ship.checkPoint(query1)).toBe("H");
    expect(ship.checkPoint(query2)).toBe("S");
  });
});
