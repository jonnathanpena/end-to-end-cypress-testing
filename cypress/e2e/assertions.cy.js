describe('Different types of assertions', () => {
  beforeEach(() => {
    cy.visit('/example-4');
  });

  it('should has a list in box 1', () => {
    cy.get('ul[data-cy=box-1-items-list]').should('exist').and('be.visible');
  });

  it('should display three options in box 1 list', () => {
    cy.get('ul[data-cy=box-1-items-list] > li').should('have.length', 3);
  });
});