describe('wordcount', () => {
  beforeEach(() =>{
    Cypress.on('uncaught:exception', (err) =>{
      console.error('Uncaught exception:', err);
      return false;
    });

    cy.visit('http://localhost:3000/email-wordcount.html');

  })

  it('should send email successfully', () =>{
    cy.get('#to-email').type('test0@gmail.com');
    cy.get('#subject').type('test subject');
    cy.get('#area').type('Email Body.');

    cy.intercept('POST', '/emailer/send', {
      statusCode: 201,
      body:{
        email: "test@gmail.com",
        cc: "",
        subject: "test subject",
        content: "Testing0 using cypress"
      },
      
    }).as('emailSuccessful');

    cy.get('#send').click();
    cy.wait('@emailSuccessful').then((interception) =>{
      expect(interception.request.body).to.include({
        email: 'test0@gmail.com',
        subject: 'test subject'
      })
    });
  })

  it('should display correct word count', () =>{
    cy.get('textarea[placeholder="Start Typing"]').type('Some text.')

    cy.get('#words').should('be.visible').and('contain.text', '2')
  })

  it('should display correct character count', () =>{
    cy.get('textarea[placeholder="Start Typing"]').type('Some text.')

    cy.get('#char').should('be.visible').and('contain.text', '10')
  })
  
  
})