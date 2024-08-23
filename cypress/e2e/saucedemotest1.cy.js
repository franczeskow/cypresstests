describe('Pepper log in', () => {
  it('loges user in', () => {
    cy.visit('https://www.pepper.pl/')
    cy.get('[data-t="acceptAll"]').click()
    cy.get('button.button--toW5-square.space--ml-2.button.button--shape-circle.button--type-primary.button--mode-white').click()
    cy.get('[type="email"]').type("smieciowy.kitku69@gmail.com")
    cy.get('span').contains(' Kontynuuj ').click()
    cy.get('input[name="password"]').type('tajnehaslo123')
    cy.get('span').contains(' Zaloguj Się ').click()
    cy.get('[data-t="userDropdown"]').click()
    cy.get('div>span').contains(' tescicki123 ')

  })
})