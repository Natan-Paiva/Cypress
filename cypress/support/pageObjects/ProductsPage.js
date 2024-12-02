import CartPage from "./CartPage"
class ProductPage{
    pageValidation(){
        return cy.contains('Shop Name').should('be.visible')
    }
    cardLimitCount(){
        return cy.get('app-card')
    }
    selectProductByName(prod){
        cy.get('app-card').filter(`:contains("${prod}")`).then($el => {
            cy.wrap($el).should('have.length', 1)
            cy.wrap($el).contains('button', 'Add').click()
        })
    }
    selectFirstProduct(){
        cy.get('app-card').first().contains('button', 'Add').click()
    }
    goToCart(){
        cy.contains('a', 'Checkout').click()
        return new CartPage()
    }
}
export default ProductPage;

// my solution for selecting by name
        // cy.get('app-card').each(($el, index, $list) => {
        //     const prodName = $el.find('h4.card-title').text()
        //     if(prodName.includes(prod)){
        //         cy.wrap($el).contains('Add').click()
        //     }
        // })