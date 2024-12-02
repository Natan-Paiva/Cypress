describe('Mouse hover', function(){
    it('X', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get(".mouse-hover-content").invoke('show') //show method must be applied on the immediate parent of the hidden element
        cy.contains('Top').click()
        //cy.contains('Top').click({force:true}) //this will force click hidden elements, without testing the hover in this case

        cy.url().should('include', 'top')
    })
})