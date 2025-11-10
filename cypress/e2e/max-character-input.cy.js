describe('Max Character Input Test', () => {
  it('Should display the proppiate remaining number of characters count', () => {
    cy.visit('/example-2');
    cy.get('span').invoke('text').should('eq', '15');
    cy.get('input').type('Hello');
    cy.get('span').invoke('text').should('eq', '10');
    cy.get('input').type('Hello');
    cy.get('span').invoke('text').should('eq', '5');
    cy.get('input').type('Hello');
    cy.get('span').invoke('text').should('eq', '0');
    cy.get('input').type('Hello');
    cy.get('input').should('have.value', 'HelloHelloHello');
    cy.get('span').invoke('text').should('eq', '0');
  })
})