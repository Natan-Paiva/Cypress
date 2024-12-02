/// <reference types="cypress" />

let prodName
describe("JWT Session", function(){
    it("is logged through local storage", async function(){
        cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client/', {
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body b').eq(1).then(function($el){
            prodName = $el.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerlink*="cart"]').click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Country'").type('bra')
        cy.get('.ta-results button').each(($el, index, $list)=>{
            if($el.text().trim().toLowerCase() === "brazil"){
                cy.wrap($el).click()
            }
        })
        cy.get('.action__submit').click()
        cy.wait(4000)
        cy.get('.order-summary button').eq(1).click()
        const filePath = Cypress.config('fileServerFolder')+"/cypress/downloads/order-invoice_natanabpaiva.xlsx"
        cy.task('excelToJsonConverter', filePath).then(function(result){
            cy.log(result)
            cy.log(result.data[1].A)
            expect(prodName).to.equal(result.data[1].B)
        })

        //this is used for fast validation
        cy.readFile(filePath).then(function(text){
            expect(text).to.include(prodName)
        })
    })
})