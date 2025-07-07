describe('Google Test', () => {
  it('visits Google and searches for Cypress', () => {
    cy.visit('https://www.google.com');
    cy.get("button").contains("όλων").click();
    cy.get('textarea[name="q"]').type('cypress testing{enter}');
    cy.contains('Cypress.io').should('exist');
  });
});
