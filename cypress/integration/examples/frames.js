/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frames', function(){
    it('X', function(){
        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').first().click()
        cy.wait(1000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
    })
})