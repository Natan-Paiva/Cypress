describe('Alerts,popups', function(){
    it('X', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //cypress automatically accepts alerts and pop ups
        cy.on('window:alert', ($str)=> {
            //mocha
            expect($str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', ($str)=> {
            //mocha
            expect($str).to.contain('confirm')
            //return false    -> would cancel the window
        })
    })
})