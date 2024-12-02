describe('Web Controls UI', function(){
    it('X', function(){
        //checkboxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //static dropdowns
        cy.get('select').select('Option2').should('have.value', 'option2')

        //dynamic dropdowns
        cy.get('#autocomplete').type('bra')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === 'Brazil'){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Brazil')

        //visibility    
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        cy.get('[value="radio1"]').check().should('be.checked')
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio1"]').should('not.be.checked')
    })
})