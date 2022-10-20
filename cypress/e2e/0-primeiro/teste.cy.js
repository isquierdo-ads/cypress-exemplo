/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Login', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173')

  })


  it('it should pass', () => {
    cy.get('h1').click().click().click().click()
    cy.matchImageSnapshot('sucesso')
  })

  it('it should fail', () => {
    cy.get('h1').click()
    cy.matchImageSnapshot('falha')
  })
})
