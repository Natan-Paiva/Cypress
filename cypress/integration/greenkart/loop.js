describe('My second test suite', function(){
    it('My second test case', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const prodName = $el.find('h4.product-name').text()
            if(prodName.includes('Cashews')){
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
}) 