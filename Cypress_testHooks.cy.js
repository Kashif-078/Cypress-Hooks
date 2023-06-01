/// <reference types="cypress" />

describe('my suite', () =>
{
    // This hook runs once before all the tests in a test suite
    before(() => 
    {
        cy.log('before hook Executed')
    })
  
    //  This hook runs before each individual test within a test suite
    beforeEach(() => 
    {
        cy.log('beforeEach hook Executed')
    })

    // This hook runs after each individual test within a test suite. It can be used 
    afterEach(() => 
    {
        cy.log('afterEach hook Executed')
    })

    // Tis hook runs once after all the tests in a test suite have completed
    after(() => 
    {
        cy.log('after hook Executed')
    })

    // To group a set of related tests
    context('Context Block', () =>
    {
        it('Test 1', () => 
        {
            cy.log('Test Case 1')
        })
        
        it('Test 2', () => 
        {
            cy.log('Test Case 2')
        })
    })
})
