class AuthLogin {
  get email() {
    return cy.get('#email')
  }
  get password() {
    return cy.get('#userPassword')
  }
  get loginButton() {
    return cy.get('.btn')
  }
  login(email, password){
    this.email.type(email)
    this.password.type(password)
    this.loginButton.click()
  }
}

export const authLogin = new AuthLogin()