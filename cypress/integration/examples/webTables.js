describe('Web Tables', function(){
    it('X', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("table:nth-child(2) tr td:nth-child(2)").each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Python')){
                //original code made by the teacher
                // cy.get("table:nth-child(2) tr td:nth-child(2)").eq(index).next().then(function(p) {
                //     const price = p.text()
                //     expect(price).to.equal('25')
                // })

                //my version
                cy.wrap($el).next().should('have.text', '25')
            }
        })
    })
})