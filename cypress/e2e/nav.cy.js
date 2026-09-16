describe('nav', () => {
  it('should visit default and word count page', () => {
    cy.visit('http://localhost:3000')

    cy.visit('http://localhost:3000/email-wordcount.html')

  })

})