class TravelSite{

    visitGoogleTravelsite(){
        cy.visit('https://www.google.com/travel/')
    }
    enterFlightSite(){
        //Travelpage - click to enter flightpage
        cy.get('.APdqtd > :nth-child(3) > .P4z3kc > .VfPpkd-LgbsSe > .VfPpkd-Jh9lGc').click({force: true})
    }


}



export default TravelSite