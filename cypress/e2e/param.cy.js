describe ('Parametrized test', ()=> {

  const tests = [{email: '1@gm.io', password: 1111}, {email: '2@gm.io', password: 2222}];

  tests.forEach(({email, password}) => {
      it(`Test for text`, () => {
          cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
          cy.get('[alt="Material Dark Theme"]').click();
          cy.get('[title="Forms"]').click();
          cy.get('[title="Form Layouts"]').click();
          cy.get('#exampleInputEmail1').type(email);
          cy.get('#exampleInputPassword1').type(password);
          cy.get('.custom-checkbox ~ span').contains('Check me out').click();
          cy.get('.status-danger').click
      })
  })
  
})