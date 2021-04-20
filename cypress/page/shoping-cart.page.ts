class ShoppingCartPage {
    private shoppingCart: string;

    constructor() {
        this.shoppingCart = ".cart_navigation span";
    }
    public shoppingCartNav(): void {
        cy.get(this.shoppingCart).click()
    }
}

export { ShoppingCartPage }
