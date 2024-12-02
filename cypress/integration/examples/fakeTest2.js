/// <reference types="cypress" />

describe("mock API request test", function(){
    it("mock API request test", function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req)=>{
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
            req.continue((res)=>{
                //expect(res.statusCode).to.equal(403)
            })
        }).as('dummyUrl')
        cy.get('.btn.btn-primary').click()
        cy.wait('@dummyUrl')
    })
})
