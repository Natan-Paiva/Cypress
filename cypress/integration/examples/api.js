/// <reference types="cypress" />

describe("API test", function(){
    it("API test", function(){
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name":"Learn Appium Automation with Java",
            "isbn":"bcdf",
            "aisle":"2327",
            "author":"John foe"
        }).then(function(response){
            expect(response.body).to.have.property("Msg", "successfully added")
        })
    })
})
