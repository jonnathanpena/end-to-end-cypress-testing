 describe('Max Character Input Test', () => {
  beforeEach(() => {
    cy.visit('/example-3');

    cy.get('span[data-cy="first-name-chars-left-count"]').invoke('text').as('fnCharsLeft');
    cy.get('#first-name-input').as('firstNameInput');
  });

  it('Should display the proppiate remaining number of characters count with 5 characters', () => {
    cy.get('@fnCharsLeft').should('eq', '15');
    cy.get('@firstNameInput').type('Hello');
    cy.get('@fnCharsLeft').should('eq', '10');
  })

  it('Should display the proppiate remaining number of characters count with 10 characters', () => {
    cy.get('@firstNameInput').type('HelloHello');
    cy.get('@fnCharsLeft').should('eq', '5');
  })

  it('Should display the proppiate remaining number of characters count and prevents character input when full', () => {
    cy.get('@firstNameInput').type('HelloHelloHello ');
    cy.get('@firstNameInput').should('have.value', 'HelloHelloHello');
    cy.get('@fnCharsLeft').should('eq', '0');
  })
})