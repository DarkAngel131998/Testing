Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Test chức năng nextpage/forward page', function() {

    context('Đăng nhập', function(){
      beforeEach(function(){
      cy.visit('https://hoclieu.sachmem.vn');
      cy.contains('Đăng nhập').click();
      cy.get('#user_email').type('darkangel131998@gmail.com'); // type email
      cy.get('#user_password').type('Anhduy12345'); // type password
      cy.get('#new_user > div:nth-child(6) > input').click();
      })
      it('Test', function(){
        cy.get('span > .text-dark').should('be.visible').click()
        cy.get(':nth-child(2) > :nth-child(1) > .row > .col-9 > .text-dark').click()
        cy.get('[title="Xem bài cũ hơn"] > small > .fa').click()
        cy.get('[title="Xem bài mới hơn"] > small > .fa').click()
        cy.get('[title="Xem bài cũ hơn"]').should('be.visible')
        cy.get('[title="Xem bài mới hơn"]').should('be.visible')
        cy.get('.border-right > .active').should('be.visible')
        cy.get('.border-right > :nth-child(3)').should('be.visible')
        cy.get('.border-right > :nth-child(4)').should('be.visible')
        cy.get('.border-right > .text-center').should('be.visible')
        cy.get('.border-right > :nth-child(5)').should('be.visible')
        cy.get('.border-right > :nth-child(6)').should('be.visible')
        cy.get('.border-right > :nth-child(7)').should('be.visible')
        cy.get('.border-right > :nth-child(8)').should('be.visible')
        cy.get('#scroll-question').should('be.visible')
        cy.get('.border-right').should('be.visible')
    })
  })
})
