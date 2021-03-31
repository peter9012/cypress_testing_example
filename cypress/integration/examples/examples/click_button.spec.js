

describe('Browser Actions', () => {
  it('should load website',() =>{
    cy.visit('https://www.shopstyleqa.com/g/women/balenciaga/hourglass-nano-croc-effect-leather-tote-black/849765190', { timeout: 10000 })
    cy.url().should('include','balenciaga')
  })
})


