class AddProfessor {
  get enterName (){
    return cy.get('#input-default')
  }
  get enterLastName(){
    return cy.get('#input-default1')
  }
  get selectGradebook(){
    return cy.get('select')
  }
  get addImage() {
    return cy.get('.btn-image')
  }
  get imageInput(){
    return cy.get('#__BVID__45')
  }
  get submit() {
    return cy.get('.btn-secondary')
  }
  addProfessor(enterName,enterLastName,addImage){
    this.enterName.type(enterName)
    this.enterLastName.type(enterLastName)
    // this.selectGradebook.select('dnevnik')
    this.addImage.click()
    this.imageInput.click()
    this.submit.click()
  }
}
export const addProfessor = new AddProfessor()