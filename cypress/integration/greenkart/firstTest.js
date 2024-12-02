describe('My first test suite', function(){
    it('My first test case', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4) //visible forces to get only visible elements
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4) //.find for parent child cahining
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()//as long as the following methos is a cypress method, it will automatically handle the promisse
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const prodName = $el.find('h4.product-name').text()
            if(prodName.includes('Cashews')){
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })
        //cy.get('.brand').text() -> will not work, beacause text() is not a cypress methos, therefore it will not automatically handle the promisse
        //asserting if logo text is correct
        cy.get('.brand').should('have.text', 'GREENKART')

        //printin on the test runner log
        cy.get('.brand').then(function($logo){
            cy.log($logo.text())
        })
    })
}) 