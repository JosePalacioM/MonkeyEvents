Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://form.jotform.com/201874033274654');
        cy.wait(1000);
        randomEvent(10);
    })
})
function randomEvent(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    
    var monkeysLeft = monkeysLeft;

    if(monkeysLeft > 0) {
        var step = getRandomInt(1,5)

        if(step == 1){
            cy.get('input').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).type("Hola mundo",{force: true});
                    monkeysLeft = monkeysLeft - 1;
                    console.log(monkeysLeft)
                }
                cy.wait(1000);
                randomEvent(monkeysLeft);
            });
        }

        if(step == 2){
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});
                    monkeysLeft = monkeysLeft - 1;
                    console.log(monkeysLeft)
                }
                cy.wait(1000);
                randomEvent(monkeysLeft);
            });
        }   
        
        if(step == 3){
            cy.get('button').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});
                    monkeysLeft = monkeysLeft - 1;
                    console.log(monkeysLeft)
                }
                cy.wait(1000);
                randomEvent(monkeysLeft);
            });
        } 

        if(step == 4){


            cy.get('select').then($links => {

                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).select(1);
                    monkeysLeft = monkeysLeft - 1;
                    console.log(monkeysLeft)
                }
                cy.wait(1000);
                randomEvent(monkeysLeft);



            });
        }
    }
}