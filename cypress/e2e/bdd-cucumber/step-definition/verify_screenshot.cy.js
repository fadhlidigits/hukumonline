import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

let uuVariable = "Peraturan Pemerintah Nomor 40 Tahun 2006"

Given('user is visit website hukumonline', () => {
    cy.viewport(1280,720)

    cy.visit('https://www.hukumonline.com/');

})

When('user search peraturan pemerintah in search bar', () => {
    
    cy.get('.form-control')
        .type(uuVariable)
        .type('{enter}')

})

Then('verify screenshot', () => {

    cy.get('.css-81fg6 > :nth-child(1)')
        .should('be.visible')
        .screenshot('image')

    // Seems like because the header is fixed and somehow it's like the element getting scrolled so we can't get full screenshot of that element. And tbh I'm not good enough to configure plugin cypress-image-diff for comparison use together woth cucumber    
})