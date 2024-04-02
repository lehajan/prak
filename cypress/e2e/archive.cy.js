describe('archive test', () => {
    it('passes', () => {
        cy.fixture('example').then(data => {
            cy.visit('https://dev.profteam.su/login')
            cy.log('ввод логина')
            cy.get('.form-input--text')
                .type(data.val_login)
            cy.log('ввод пароля')
            cy.get('.form-input--password')
                .type(data.val_password)
            cy.log('кнопка Войти')
            cy.get('.form__buttons > :nth-child(3)')
                .click()
            cy.log('кнопка Архив')
            cy.get('[href="/archive/requests"]')
                .click()   
        })
    })
})