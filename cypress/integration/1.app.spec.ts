import 'cypress';

describe('App', () => {
    it('should visit the app', () => {
        cy.visit('http://localhost:3000');
    });
    it('should reder app section', () => {
        cy.get('#app').should('have.length', 1);
    });
});