describe('Max Character Input Test', () => {
  beforeEach(() => {
    cy.visit('/challenge-1');

    cy.get('span[data-cy="name-greeting"]').invoke('text').as('fnNameGreetingSpan');
    cy.get('input[data-cy="first-name-input"]').as('fnInput');
  });

  it('Should display empty input', () => {
    cy.get('@fnInput').should('have.value', '');
    cy.get('@fnNameGreetingSpan').should('eq', '');
  });

  it('should update input value when typing', () => {
    cy.get('@fnInput').type('John');
    cy.get('@fnInput').should('have.value', 'John');
    cy.get('@fnNameGreetingSpan').should('eq', 'Hello, John!');
  });
})