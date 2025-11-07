describe('Max Character Input Test', () => {
  it('Should display the proppiate remaining number of characters count', () => {
    cy.visit('http://localhost:5173/example-3');
    cy.get('span[data-cy="first-name-chars-left-count"]').invoke('text').should('eq', '15');
    cy.get('#first-name-input').type('Hello');
    cy.get('span[data-cy="first-name-chars-left-count"]').invoke('text').should('eq', '10');
    cy.get('#first-name-input').type('Hello');
    cy.get('span[data-cy="first-name-chars-left-count"]').invoke('text').should('eq', '5');
    cy.get('#first-name-input').type('Hello');
    cy.get('span[data-cy="first-name-chars-left-count"]').invoke('text').should('eq', '0');
    cy.get('#first-name-input').type('Hello');
    cy.get('#first-name-input').should('have.value', 'HelloHelloHello');
    cy.get('span[data-cy="first-name-chars-left-count"]').invoke('text').should('eq', '0');
  })
})