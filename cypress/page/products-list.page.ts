class ProductListPage {
    private btnAdd: string;
    private proceedToCheckout: string;

    constructor() {
        this.btnAdd = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckout = "[style*=\"display: block;\"] .button-container > a"
    }

    public addProduct(): void {
        cy.get(this.btnAdd).click()
    }

    public proceedToCart(): void {
        cy.get(this.proceedToCheckout).click()
    }

  }

export { ProductListPage }
