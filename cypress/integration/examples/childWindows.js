describe('Child windows and tabs', function(){
    it('Removing the attribute', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('#opentab').click()    -> will open a new tab, cypress can't handle it

        cy.get('#opentab').invoke('removeAttr', 'target').click() //remove the target attribute, forcing the link to be opened in the same tab

        //cypress will work if the domain changes
        cy.origin('https://www.qaclickacademy.com', () => { //change domain
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('.page-banner-cont > h2').should('have.text', 'About Us')
        })
    })
    it('Getting the value of link', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
        cy.get('#opentab').then(function($el){
            const url = $el.prop('href')
            cy.origin(url, () => { //change domain
                cy.visit('')
                cy.get('#navbarSupportedContent a[href*="about"]').click()
                cy.get('.page-banner-cont > h2').should('have.text', 'About Us')
            })
        })        
    })
})