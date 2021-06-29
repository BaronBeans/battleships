describe("Starting a game", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Starts on the front page", () => {
    cy.contains("Battleships");
    cy.contains("Create Game");
    cy.contains("Start New Online Game");
    cy.contains("Start New Game with a Bot");
    cy.contains("Join Game");
  });
  it("Can't start a new game if there is no name", () => {
    //     Click the Start New Online Game button
    cy.get(".sc-bdnxRM > :nth-child(2) > :nth-child(3)").click();
    cy.contains("Battleships");
    cy.contains("Create Game");
    cy.contains("Start New Online Game");
    cy.contains("Start New Game with a Bot");
    cy.contains("Join Game");
  });
  it("Can start a new game", () => {
    //   Type "sean" into the name field
    cy.get(":nth-child(2) > input").type("sean");
    //     Click the Start New Online Game button
    cy.get(".sc-bdnxRM > :nth-child(2) > :nth-child(3)").click();
    cy.contains("Test");
    cy.contains("End Game");
    //     Click the End Game button
    cy.get("button").click();
    cy.contains("Battleships");
    cy.contains("Create Game");
    cy.contains("Start New Online Game");
    cy.contains("Start New Game with a Bot");
    cy.contains("Join Game");
  });
});
