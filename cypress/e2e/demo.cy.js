describe('Cypress Demo', () => {
    it('visits the Cypress example page', () => {
      cy.visit('https://example.cypress.io');
      cy.contains('type').click();
      cy.url().should('include', '/commands/actions');
      cy.get('.action-email').type('test@example.com').should('have.value', 'test@example.com');
    });
  });