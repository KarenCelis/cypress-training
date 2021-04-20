class ShippingStepPage {
    private cartNav: string;

    constructor() {
        this.cartNav = ".cart_navigation span";
    }

    public goCartNavigation(): void {
        cy.get(this.cartNav).click();

    }
}
export { ShippingStepPage }
