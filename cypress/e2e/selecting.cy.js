describe('Max Character Input Test', () => {
  it('Should display the proppiate remaining number of characters count', () => {
    cy.visit('http://localhost:5173/example-3');

    cy.get('span[data-cy="first-name-chars-left-count"]').invoke('text').as('fnCharsLeft');
    cy.get('#first-name-input').as('firstNameInput');

    cy.get('@fnCharsLeft').should('eq', '15');
    cy.get('@firstNameInput').type('Hello');
    cy.get('@fnCharsLeft').should('eq', '10');
    cy.get('@firstNameInput').type('Hello');
    cy.get('@fnCharsLeft').should('eq', '5');
    cy.get('@firstNameInput').type('Hello');
    cy.get('@fnCharsLeft').should('eq', '0');
    cy.get('@firstNameInput').type('Hello');
    cy.get('@firstNameInput').should('have.value', 'HelloHelloHello');
    cy.get('span[data-cy="first-name-chars-left-count"]').should('eq', '0');
  })
})