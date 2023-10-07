import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

let target_url;

Given('user is in career page from footer', () => {
    cy.viewport(1280,720)

    cy.visit('https://www.hukumonline.com/');

    cy.scrollTo('bottom')

    cy.get('[href="https://hukumonline.com/karir"]').click()
})

When('click career Senior Product Manager Project Based', () => {
    
    cy.get('.row > :nth-child(2) > :nth-child(1)').invoke('attr', 'href')
        .then((href) => {
            target_url = href;
            cy.log(target_url)
      });

      cy.get('.row > :nth-child(2) > :nth-child(1)').invoke('attr', 'target', '_self')

      cy.contains('Senior Product Manager (project based)').click()
})

Then('user will redirect to career page', () => {
    //since the url is have attribute blank it will be open new tab, so I try to handle with change the attribute to self but AFAIK We can't open 2 different domain url so the test will be failed.
    cy.url().should('eq', target_url)
})