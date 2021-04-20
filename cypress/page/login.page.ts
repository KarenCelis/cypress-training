class LoginPage {
    private btnSub: string;
    private emailInput: string
    private passInput: string

    constructor() {
        this.emailInput = "#email"
        this.passInput = "#passwd"
        this.btnSub = "#SubmitLogin";

    }

    public addEmail(email: string): void {
        cy.get(this.emailInput).type(email)
    }

    public addPassword(pass: string): void {
        cy.get(this.passInput).type(pass)
    }

    public addLogin(): void {
        cy.get(this.btnSub).click()
    }

}
export { LoginPage }
