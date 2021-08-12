import {authLogin} from '../page_objects/loginObject'
import {Header} from '../page_objects/headerObjects'

describe('Valid login', () => {
  it('Login using POM', () => {
    cy.visit('https://gradebook.vivifyideas.com/login')
    cy.url().should('contains', 'https://gradebook.vivifyideas')
    authLogin.login('ganguasmail@gmail.com', 'testtest123')
    cy.get('#__BVID__31__BV_button_').should('be.visible')
  })
})
