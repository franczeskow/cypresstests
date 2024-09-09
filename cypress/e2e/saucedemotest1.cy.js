Cypress.on('test:after:run', (attributes) => {
  /* eslint-disable no-console */
  console.log('Test "%s" has finished in %dms', 
    attributes.title, attributes.duration)
})

describe('Pepper comment', () => {
  it('creates new comment', () => {
    //logowanie
    cy.visit('https://www.pepper.pl/')
    cy.get('[data-t="acceptAll"]').click()
    cy.get('button.button--toW5-square.space--ml-2.button.button--shape-circle.button--type-primary.button--mode-white').click()
    cy.get('[type="email"]').type("tescicki123")
    cy.get('span').contains(' Kontynuuj ').click()
    cy.get('input[name="password"]').type('tajnehaslo123')
    cy.get('span').contains(' Zaloguj Się ').click()
    cy.get('[data-t="userDropdown"]').click()
    cy.get('div>span').contains(' tescicki123 ')
    cy.get('[data-t="userDropdown"]').click()

    //komentowanie
    cy.get('[class="thread-title "]').first().click()
    cy.get('[placeholder="O czym teraz myślisz..."]').first().click()
    cy.get('[contenteditable="true"]').type("fajna okazja")
    cy.get('[class="icon icon--send"]').click({ force: true })
    cy.contains('fajna okazja')

  })
})

describe('Pepper alert', () => {
  it('creates new alert', () => {
    //logowanie
    cy.visit('https://www.pepper.pl/')
    cy.get('[data-t="acceptAll"]').click()
    cy.get('button.button--toW5-square.space--ml-2.button.button--shape-circle.button--type-primary.button--mode-white').click()
    cy.get('[type="email"]').type("tescicki123")
    cy.get('span').contains(' Kontynuuj ').click()
    cy.get('input[name="password"]').type('tajnehaslo123')
    cy.get('span').contains(' Zaloguj Się ').click()
    cy.get('[data-t="userDropdown"]').click()
    cy.get('div>span').contains(' tescicki123 ')
    cy.get('[data-t="userDropdown"]').click()

    //dodawanie alertu
    cy.get('[data-t="userDropdown"]').click()
    cy.get('[data-t="keywordAlertsLink"').click()
    cy.contains('Zarządzaj alertami').click()
    cy.get('input[placeholder="Twój alert..."]').type("telefony{enter}")
    cy.get('button > span').contains("telefony").should('be.visible')
  })
})