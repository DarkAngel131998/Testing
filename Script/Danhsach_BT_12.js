Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return true
})
describe('Kiểm tra hình ảnh mũi tên hiện danh sách chức năng của từng bài tập', function() {

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
        cy.get(':nth-child(1) > .row > .col-2 > :nth-child(2) > #optionDropdown').click()
        cy.get(':nth-child(1) > .row > .col-2 > :nth-child(2) > #optionDropdown').should('have.class','dropdown-toggle')
        cy.get('div#dropdown_0').should('have.class','dropdown-menu dropdown-menu-right hidden-sm show')
        cy.get(':nth-child(1) > .row > .col-2 > :nth-child(2) > #optionDropdown').click()
        cy.get(':nth-child(1) > .row > .col-2 > :nth-child(2) > #optionDropdown').should('have.class','dropdown-toggle')
        cy.get('div#dropdown_0').should('have.class','dropdown-menu dropdown-menu-right hidden-sm')
        
    })
  })
})
