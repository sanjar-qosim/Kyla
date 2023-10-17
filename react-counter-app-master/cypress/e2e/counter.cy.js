describe('Counter App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Case with increment of counter', () => {
    cy.get('button').contains('+1').click();
    require('cypress-xpath');
    cy.xpath('//*[@id="app"]/h2').should('not.equal', '10');
  });

  it('Case with decrement of counter', () => {
    cy.get('button').contains('-1').click();
    cy.get('h2').should('not.equal', '10');
  });

  it('Test Reset button', () => {
    cy.get('button').contains('+1').click();
    cy.get('button').contains('-1').click();
    cy.get('button').contains('Reset').click();
    cy.get('h2').should('not.equal', '10');

  });
});

