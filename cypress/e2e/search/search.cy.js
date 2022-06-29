
beforeEach(() => {
 
});

describe('Search Suite', () => {

    it('Validate search Suggestions', () => {
        cy.visit("");
        cy.get('input').type('Rick')
        cy.get('[data-testid="search-submit-button"]').click({ force: true })
        cy.get('.result-header > h4').should('contain', '107')
    })
});