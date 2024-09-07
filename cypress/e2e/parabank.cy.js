
describe('transfer money', () => {
  it('user transfers money beetween accounts', () => {

    //LOGOWANIE
    cy.visit('https://parabank.parasoft.com/')
    cy.get('[name="username"]').type('aaa')
    cy.get('[name="password"]').type('aaa')
    cy.get('[value="Log In"]').click()
    cy.contains('Welcome aaa aaa')

    let account_1
    let account_2
    cy.get('[href="overview.htm"]').click()
    cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(2)').invoke('text').then((text) => {
      account_1 = text;
      cy.log(account_1); 
  });
  cy.log(account_1); 
    
  })
})