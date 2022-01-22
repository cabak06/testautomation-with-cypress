/// <reference types="cypress" />
import assertAllFoundFlightsContainsRetur from "../../helpers.js"
import TravelSite from "../pageDomainClasses/googleTravel.js"
import GoogleAcceptButton from "../pageDomainClasses/googleAcceptButton.js"
import Flight from "../pageDomainClasses/googleFlights.js"
const flightdata =  require('../../fixtures/fixtureFlights.json')

const travelSite = new TravelSite()
const googleAcceptButton = new GoogleAcceptButton()
const flight = new Flight()



describe('Testing GoogleTravel',function(){

    before(function(){
        cy.fixture('fixtureFlights').then(function(data){
            this.data = data
        })
    })
    

    beforeEach(() => {
        travelSite.visitGoogleTravelsite()
        googleAcceptButton.acceptButton()
      })
      
    
    flightdata.forEach(element => {
        it('FLIGHT-PLAN ' + element.departDest+ " " + element.arrivalDest, ()=>{
            const departDest = element.departDest
            const arrivalDest = element.arrivalDest
            const departDat = element.departDat
            const returnDat = element.returnDat

            travelSite.enterFlightSite()
            flight.chooseDoublePassengers()
            flight.departDestination(departDest)
            flight.arriveDestination(arrivalDest)
            flight.departDate(departDat)
            flight.returnDate(returnDat)
            flight.seeAllAvailableFlights()
    
            assertAllFoundFlightsContainsRetur()


    })
});
  


    

})



/*
const testData = require("../../fixtures/multipleInputFields.json")
testData.forEach((data) => {  const message = data.message 
it('Test Case1', function(){      
    cy.log("data is:" + data) 
    cy.get('#user-message').type(message).should('have.value', message) 
    cy.get('#get-input > button').click()  
    cy.wait(200)  
    cy.get('span#display').should('have.text', message)      
}) 
});
*/





/*
it('assert value retur in every found travel', function(){
    //console.log(this.data)
    travelSite.enterFlightSite()
    flight.chooseDoublePassengers()
    flight.departDestination(departDst)
    flight.arriveDestination(arrivalDest)
    flight.departDate(departDat)
    flight.returnDate(returnDat)
    flight.seeAllAvailableFlights()

    console.log(this.data)
    cy.wait(5000)
    assertAllFoundFlightsContainsRetur()
})

*/







/*


    for(let i=0; i< flightdata.length; i++){
        const departDest = flightdata[i].departDest
        const arrivalDest = flightdata[i].arrivalDest
        const departDat = flightdata[i].departDat
        const returnDat = flightdata[i].returnDat
         console.log(departDest,arrivalDest,departDat,returnDat)
    }





        const departDest = element.departDest
        const arrivalDest = element.arrivalDest
        const departDat = element.departDat
        const returnDat = element.returnDat





it('assert value retur in every found travel', function(){
        
    travelSite.enterFlightSite()
    flight.chooseDoublePassengers()
    flight.departDestination(departDest)
    flight.arriveDestination(arrivalDest)
    flight.departDate(departDat)
    flight.returnDate(returnDat)
    flight.seeAllAvailableFlights()

    console.log(this.data)
    cy.wait(5000)
    assertAllFoundFlightsContainsRetur()
})

*/