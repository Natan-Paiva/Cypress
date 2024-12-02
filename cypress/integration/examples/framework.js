/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage';


describe('End to end ecommerce test', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
            this.homePage = new HomePage()
        })
    })
    it('Submit order', function(){ 
        Cypress.config('defaultCommandTimeout',8000) //set in here if only this teste need more time
        const prod = this.data.prodName        
        
        this.homePage.goTo(Cypress.env('url')+'/loginpagePractise/')
        const productPage = this.homePage.login(this.data.username, this.data.password)

        productPage.pageValidation()
        productPage.cardLimitCount().should('have.length',4)
        productPage.selectProductByName(prod)
        productPage.selectFirstProduct()
        const cartPage = productPage.goToCart()
        
        cartPage.sumOfProducts().then(function(sum) {
            expect(sum).to.be.within(10000, 200000)
        })
        const confirmationPage = cartPage.goToConfirmationPage()

        confirmationPage.confirmsPurchase()
        confirmationPage.verifySucess()
    })
})