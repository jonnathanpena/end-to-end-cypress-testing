describe('basic page interactions', () => {
  beforeEach(() => {
    cy.visit('/example-4');
  });

  it('should sets the header text name when double clicked', () => {
    cy.get('ul[data-cy=box-1-items-list] > li').first().dblclick();
    cy.get('span[data-cy=box-1-selected-name]').should('have.text', 'Option One');

    cy.get('ul[data-cy=box-1-items-list] > li').eq(1).dblclick();
    cy.get('span[data-cy=box-1-selected-name]').should('have.text', 'Option Two');

    cy.get('ul[data-cy=box-1-items-list] > li').eq(2).dblclick();
    cy.get('span[data-cy=box-1-selected-name]').should('have.text', 'Option Three');
  });

  it('should display the correct number of checked options', () => {
    cy.get('span[data-cy=box-2-selected-count]').invoke('text').then(parseFloat).should('eq', 0);
    cy.get('div[data-cy=box-2-checkboxes] input[type=checkbox]').eq(0).check();
    cy.get('div[data-cy=box-2-checkboxes] input[type=checkbox]').eq(1).check();
    cy.get('span[data-cy=box-2-selected-count]').invoke('text').then(parseFloat).should('eq', 2);

    cy.get('div[data-cy=box-2-checkboxes] input[type=checkbox]').eq(1).uncheck();
    cy.get('span[data-cy=box-2-selected-count]').invoke('text').then(parseFloat).should('eq', 1);
  });

  it('should display the cuttently selected dropdown option', () => {
    cy.get('select[data-cy=box-3-dropdown]').select('Option Two');
    cy.get('span[data-cy=box-3-selected-name]').should('have.text', 'Option Two');
  });

  it('should sets the header text to the item name when hovered over', () => {
    cy.get('ul[data-cy=box-4-items-list] > li').eq(2).trigger('mouseover');
    cy.get('span[data-cy=box-4-selected-name]').should('have.text', 'Option Three');
  });
});