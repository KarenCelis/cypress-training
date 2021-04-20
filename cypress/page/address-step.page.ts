class AddressStepPage {
  private ConfirmAddress: string;
  constructor() {
    this.ConfirmAddress= "#center_column > form > p > button"
  }
  public confirmAdress(): void {
    cy.get(this.ConfirmAddress).click()
  }

}
export { AddressStepPage }
