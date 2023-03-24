describe('navigation spec', () => {
  it('goes to the different paths of the website', () => {
    //Goes to main page
    cy.visit('/')

    //Clicks on the hamburger menu
    cy.get('[data-cy="hamburger-menu"]').click()
    
    //Clicks on the sell link
    cy.get('[data-cy="sell-link"]').click()

    //The searchbar page should have the correct background image
    cy.get('[data-cy="agency-search-container"]')
      .should('have.css', 'background-image')
      .and('include', 'realStateAgentHDCrop')

    //It goes back to the main page by clicking the logo
    cy.get('[data-cy="logo"]').click()

    //Fill the searchbar and make a search
    cy.get('.destinationContainer input').type('amsterdam')
    cy.get('.datesWrapper').click()
    cy.get('.react-calendar__month-view__days__day').last().click()
    cy.get('.priceRangeContainer select').first().select('1000')
    cy.get('.priceRangeContainer select').last().select('2000000')
    cy.get('.searchBarBottom a').click()

  })
})
