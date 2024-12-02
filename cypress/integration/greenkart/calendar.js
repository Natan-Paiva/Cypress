/// <reference types="cypress" />

describe('Calendar', function(){
    it('X', function(){
        const $month = '5'
        const $day = '10'
        const $year = '2025'
        const expectedList = [$month,$day,$year];

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button', $year).click()
        cy.get('.react-calendar__tile').eq(Number($month)-1).click()
        cy.contains('button', $day).first().click()
        // my assertion
        //cy.get('input[name="date"]').should('have.value', $year+'-'+$month+'-'+$day)
        // video assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>{
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        })  
    })
})