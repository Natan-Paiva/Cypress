/// <reference types="cypress" />

describe("mock API response test", function(){
    it("mock API response test", function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [{book_name: "RestAssured with Java", isbn: "BSG", aisle: "2302"}]
        }).as('bookResponse')
        cy.get('.btn.btn-primary').click()
        cy.wait('@bookResponse').then(({request, response})=>{
            cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('be.visible')
        
        //length of the response array = rows of the table
    })
})
