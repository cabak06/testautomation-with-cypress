
function assertAllFoundFlightsContainsRetur(){
       cy.get('.KC3CM').each(($item, index, list) => {
            const valuereturnTrain = "Togforbindelse"
            const valueReturnFlight = "returrejse"
            const element = $item.text()
            if(element.includes(valuereturnTrain)){
                cy.log('FOUND Train-Route - Not Asserted on')
            }else{
                expect(element).to.contain(valueReturnFlight)  
            }
    })
}






export default assertAllFoundFlightsContainsRetur