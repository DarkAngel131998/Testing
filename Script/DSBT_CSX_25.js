describe('Kiểm tra giao diện popup "xóa bài tập"', function() {

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
        cy.get('#dropdown_0 > :nth-child(6)').click()
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-body').should('be.visible')
        cy.get('.bootbox-body').should('be.visible')
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer').should('be.visible')
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('be.visible')
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').should('be.visible')
        cy.get('.bootbox-close-button').should('be.visible')
    })
  })
})