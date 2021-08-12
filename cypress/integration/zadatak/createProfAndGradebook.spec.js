import {addProfessor} from '../page_objects/addProfessorObject'
import { header } from '../page_objects/headerObjects'
import {authLogin} from '../page_objects/loginObject'

const faker = require("faker");
let gradebook = {
  randomFirstName: faker.name.firstName(),
  randomLastName: faker.name.lastName() 

}


describe("Create professor", () => {
    it('Create professor', () => {
      cy.visit('https://gradebook.vivifyideas.com/login');
      cy.url().should('contain', '/login');
      authLogin.login('ganguasmail@gmail.com', 'testtest123');
      // cy.get('#__BVID__79__BV_button_').should('be.visible');
      cy.url().should('contain', '/gradebooks');
      header.addProfessor.click();
      addProfessor.addProfessor(gradebook.randomFirstName, gradebook.randomLastName,'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg');
    });
    it('Create gradebook', () => {
      cy.visit('https://gradebook.vivifyideas.com/login');
      cy.url().should('contain', '/login');
      authLogin.login('ganguasmail@gmail.com', 'testtest123');
      header.addGardebook.click();
      cy.wait(500);
      header.addGardebook.click();
      cy.get('#name').type('my gradebook');
      // cy.get('#__BVID__60').select(gradebook.randomFirstName + ' ' + gradebook.randomLastName);
      cy.get(".custom-select.mb-4").select(proffesorName);
      cy.get('.btn-submit').click();
      });
  });
