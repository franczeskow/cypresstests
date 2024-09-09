describe('it creates and deletes account', () => {
    it('user creates and deletes account', () => {
  
    //LOGOWANIE
    cy.visit('http://localhost:3000')
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get('button[data-test="signin-submit"]').click()
    cy.contains('Ted P')
    cy.contains('My Account')


    //tworzenie i usuwanie konta
    cy.get('[data-test="sidenav-bankaccounts"]').click()
    cy.get('[data-test="bankaccount-new"]').click()
    cy.get('#bankaccount-bankName-input').type("nowe konto")
    cy.get('#bankaccount-routingNumber-input').type("999999999")    
    cy.get('#bankaccount-accountNumber-input').type("000000000")
    cy.get('[data-test="bankaccount-submit"]').click()    
    cy.get('[data-test*="bankaccount-list-item"]').last().contains("nowe konto")
    cy.get('[data-test*="bankaccount-list-item"] >div>div> button').last().click()
    cy.get('[data-test*="bankaccount-list-item"]').last().contains("nowe konto (Deleted)")
    
    
    })
  })