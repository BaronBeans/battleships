export class Game {
  public _player1Name: string;

  constructor(player1Name: string) {
    if (!player1Name) throw new Error("No player specified");
    this._player1Name = player1Name;
  }
}
