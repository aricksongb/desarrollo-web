let count = 0;
describe("test suite - conjunto de pruebas", () => {

    beforeEach(() => {
        // runs before every test block
        count ++;
        if(count===1){
            cy.visit("http://zero.webappsecurity.com")
        }else{
            cy.visit("http://zero.webappsecurity.com")
            cy.get("#signin_button").click()
            cy.get("#user_login").type("username")
            cy.get("#user_password").type("password")
            cy.get(".btn").click()
        }

      })

    it("Validar pagina de inicio",() => {
        cy.get(".active > img").should("be.visible")
        cy.get(".active > .custom > h4").contains("Online Banking")
    
    })

    it.skip("E2E - Transferencia de fondos",() => {
        cy.get("#transfer_funds_tab > a").click()
        cy.get("#tf_fromAccountId").select(2)
        cy.get("#tf_toAccountId").select(4)
        cy.get("#tf_amount").type("500")
        cy.get("#tf_description").type("Trans de 500")
        cy.get("#btn_submit").click()
        cy.get("#btn_submit").click()
        cy.get(".alert").contains("segunda modificacion de git para ver si funciona")
        cy.get(".alert").contains("Nuevo caso de pruebas con resultado optenido")
        
    })
    
})