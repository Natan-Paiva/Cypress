import ConfirmationPage from "./ConfirmationPage"
class CartPage{
    sumOfProducts() {
        let sum = 0;
        return cy.get('tr td:nth-child(4) strong').each($el => {
            const value = Number($el.text().split(' ')[1].trim())
            sum += value;
        }).then(() => {
            return sum;
        });
    }
    goToConfirmationPage(){
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()
    }
}
export default CartPage;
