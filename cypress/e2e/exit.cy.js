describe('exit test', () => {
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
            cy.log('Выйти')
            cy.get('[data-v-4cad5e75=""][data-v-97a96b5c=""] > .button')
                .click()
        })
    })
})