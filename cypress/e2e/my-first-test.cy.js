describe('When visit 1Mentor B2C Page', () => {
  it('Should show login text', async () => {
    cy.visit('https://learner.1mentor.io/auth/login')
    cy.get('h4').should('have.text', 'Log in')
  })
})