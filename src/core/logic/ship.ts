import { Coordinate, Orientation } from "./types";

export class Ship {
  private _start: Coordinate;
  private _length: number;
  private _orientation: Orientation;
  private _pointsHit: Coordinate[] = [];
  private _sunk: boolean = false;

  constructor(start: Coordinate, length: number, orientation: Orientation) {
    this._start = start;
    this._length = length;
    this._orientation = orientation;
  }

  calculatePoints(): Coordinate[] {
    let points: Coordinate[] = [];

    if (this._orientation === Orientation.HORIZONTAL) {
      for (let i = this._start.x; i < this._start.x + this._length; i++) {
        points.push({ x: i, y: this._start.y });
      }
    }

    if (this._orientation === Orientation.VERTICAL) {
      for (let i = this._start.y; i < this._start.y + this._length; i++) {
        points.push({ x: this._start.x, y: i });
      }
    }

    return points;
  }
  checkPoint(queryPoint: Coordinate) {
    const points = this.calculatePoints();
    if (points.find((p) => p.x === queryPoint.x && p.y === queryPoint.y)) {
      // HIT:
      this.hit(queryPoint);
      if (this._pointsHit.length === this._length) return "S";

      return "H";
    }
    return "M";
  }
  checkHits() {
    return this._length - this._pointsHit.length;
  }
  hit(point: Coordinate) {
    this._pointsHit.push(point);
  }
  sunk() {
    return this._sunk;
  }
}
