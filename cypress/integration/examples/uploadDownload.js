describe("Upload and download test", function(){
    it("Testing upload and download", function(){
        const path = Cypress.config('fileServerFolder')+"/cypress/downloads/download.xlsx"
        const fruit = "Apple"
        const value = 55555
        const priceDist = 2

        cy.visit('https://rahulshettyacademy.com/upload-download-test/')
        cy.get('#downloadButton').click()

        cy.task('writeExcel', {search: fruit, newValue: value, moveToPrice: priceDist, filePath: path})
        cy.get('#fileinput').selectFile(path)
        cy.contains("Apple").parent().parent().find("#cell-4-undefined").should('have.text',value)
    })
})