import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../support/pageObjects/HomePage";

Given('I am on Ecommerce page', function() {
    this.homePage = new HomePage
    this.homePage.goTo(Cypress.env('url')+'/loginpagePractise/')
})

When('I log to the application', function() {
    this.productPage = this.homePage.login(this.data.username, this.data.password)
    this.productPage.pageValidation()
    this.productPage.cardLimitCount().should('have.length',4)
})

When('I log to the application portal', function(dataTable){ 
    this.productPage = this.homePage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
    this.productPage.pageValidation()
    this.productPage.cardLimitCount().should('have.length',4)
})

When('I add item to cart and checkout', function() {
    this.productPage.selectProductByName(this.data.prodName)
    this.productPage.selectFirstProduct()
    this.cartPage = this.productPage.goToCart()
})

When('validate the total price', function() {
    this.cartPage.sumOfProducts().then(function(sum) {
        expect(sum).to.be.within(10000, 200000)
    })
})

Then('select the country and verify Thankyou', function() {
    const confirmationPage = this.cartPage.goToConfirmationPage()
    confirmationPage.confirmsPurchase()
    confirmationPage.verifySucess()
})