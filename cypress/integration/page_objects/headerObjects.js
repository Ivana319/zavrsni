class Header {
  get loginbtn (){
    return cy.get("a[href='/login']")
  }
  get registerbtn (){
    return cy.get("a[href='/register']")
  }
  get logoutbtn (){
    return cy.get("a[role='button ']")
  }
  get gradebooks(){
    return cy.get("a[href='/gradebooks']")
  }
 get allProfesors(){
   return cy.get("a[href='/professors']")
 }
 get addGardebook (){
   return cy.get("a[href='/gradebook/create']")
 }
 get addProfessor(){
   return cy.get("a[href='/professors/create']")
 }
 get myGradebook(){
   return cy.get("a[href='/my-gradebook']")
 }
 get user(){
   return cy.get('#__BVID__31__BV_button_')
 }

}
export const header = new Header()