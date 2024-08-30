import {parabank_login} from './parabank_utils.cy.js'

describe('login', () => {
  it('loges user in', () => {
    parabank_login()
  })
})s