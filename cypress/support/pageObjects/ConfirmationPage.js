class ConfirmationPage{
    confirmsPurchase(){
        cy.submitFormDetails() //this is a custom command created in "command.js" file it is used when a funtion is used multiple times in different tests.
        
    }
    verifySucess(){
        cy.get('.alert').should('be.visible').and('contain', 'Success')
    }
}
export default ConfirmationPage;
//this is the code presente in "cy.submitFormDetails()"
// cy.get('#country').type('Chi')
// cy.contains('China').click()
// cy.get('#checkbox2').check({force: true})
// cy. contains('input','Purchase').click()