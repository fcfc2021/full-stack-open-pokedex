/* eslint-disable jest/expect-expect */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})


describe('Pokedex Navigation', function() {
  it('one can navigate from the main page to the page of butterfree', function() {
    cy.visit('http://localhost:5000')
    cy.contains('butterfree').click()

    cy.contains('butterfree')
    cy.contains('compound eyes')
    cy.contains('tinted lens')
  })
})