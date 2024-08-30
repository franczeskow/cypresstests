export function parabank_login() {
    cy.visit('https://parabank.parasoft.com/')
    cy.get('[name="username"]').type('aaa')
    cy.get('[name="password"]').type('aaa')
    cy.get('[value="Log In"]').click()
    cy.contains('Welcome aaa aaa')
}