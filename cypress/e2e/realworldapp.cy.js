Cypress.on('test:after:run', (attributes) => {
  /* eslint-disable no-console */
  console.log('Test "%s" has finished in %dms', 
    attributes.title, attributes.duration)
})


describe('transfer money', () => {
  it('user transfers money beetween accounts', () => {

    //LOGOWANIE
    cy.visit('http://localhost:3000')
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get('button[data-test="signin-submit"]').click()
    cy.contains('Ted P')
    cy.contains('My Account')

    // Test transferu pieniedzy
    cy.get('h6[data-test="sidenav-user-balance"]').then(($acc_header) => {
      let account_1 = $acc_header.text();
      const account_1_numeric = parseFloat(account_1.replace(/[$,]/g, ''))
      cy.get('[data-test="nav-top-new-transaction"]').click()
      cy.get('span').contains("Kristian Bradtke").click()
      cy.get('#amount').type("100")
      cy.get('#transaction-create-description-input').type("przelew")
      cy.get('[data-test="transaction-create-submit-payment"]').click()
      cy.wait(100)

      cy.get('h6[data-test="sidenav-user-balance"]').then(($acc_header) => {
        let account_1_after = $acc_header.text();
        const account_1_numeric_after = parseFloat(account_1_after.replace(/[$,]/g, '')) + 100
        console.log(account_1_numeric_after);
        expect(account_1_numeric_after).to.eq(account_1_numeric)
        
        //go to second account and check history
        cy.get('[data-test="sidenav-signout"]').click()
        cy.get('#username').type('Arvilla_Hegmann')
        cy.get('#password').type('s3cret')
        cy.get('button[data-test="signin-submit"]').click()
        cy.contains('Kristian B')
        cy.contains('My Account')

        cy.get('[data-test="nav-personal-tab"]').click()
        cy.get('[data-test*="transaction-item"]').first().click({force: true})
        cy.contains('Ted Parisian paid Kristian Bradtke')
        cy.contains('-$100.00')  
      });
  });

  })
})

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