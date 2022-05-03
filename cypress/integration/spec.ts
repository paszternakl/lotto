
describe('App-title', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'LottoGame');
  });

  it('has navigate to game board after success login', () => {
    cy.get('[data-testid="id"]').type('3');
    cy.get('[data-testid="password"]').type('karesz');
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('equal', 'http://localhost:4200/game')
  });
});
