class PaymentStepPage {
    private paymentT: string;
    private payment: string;
    private confirmationO: string;
    private verifyOrderTitle: string;


    constructor(verifyTitle: string) {
        this.paymentT = "a.bankwire";
        this.payment = ".cart_navigation span";
        this.confirmationO = "#cart_navigation > button";
        this.verifyOrderTitle = verifyTitle
    }

    public SelectPayment(): void {
        cy.get(this.paymentT).click()
    }

    public ConfirmPayment(): void {
        cy.get(this.payment).click()
    }


    public confirmOrder(): void {
        cy.get(this.confirmationO).click()
      }

      public verifyOrderCompletedTitle(): void {
        cy.get(this.confirmationO).should("have.text", this.verifyOrderTitle)
      }

}
export { PaymentStepPage }
