class Flight{
    chooseDoublePassengers(){
        cy.get('.VfPpkd-vQzf8d > .VfPpkd-kBDsod > .NMm5M > path').click({force:true})
        //Flightpage - click + så der ialt er to personer
        cy.get('#c3-1 > .ZAJcuf > [jsname="TdyTDe"] > .VfPpkd-RLmnJb').click({force:true})
    }
    departDestination(departDest){
        //Flightpage - klik ud for destination Afrejse og tast london ind
        const aa = cy.get('.BGeFcf > .zX8lIf > .v0tSxb > .dvO2xc > [jsaction="keydown:ecIpnc; input:h6olyc; click:hV4JAc"] > .V00Bye > .II2One')
//        aa.type("London{enter}")
        aa.type(departDest + "{enter}")
        cy.wait(1000)
    }
    arriveDestination(arrivalDest){
        //Flightpage - klik ud for destination Destination og tast paris ind
        const bb = cy.get('.vxNK6d > .zX8lIf > .v0tSxb > .dvO2xc > [jsaction="keydown:ecIpnc; input:h6olyc; click:hV4JAc"] > .V00Bye > .II2One')
        //bb.click()
        bb.type(arrivalDest + "{enter}")
        cy.wait(1000)
//        bb.type("Paris{enter}")
    }
    departDate(departDat){
        //Flights klik ud for afrejse tidspunkt og vælg fre. 28. jan
        const afrejsetid = cy.get('[jsname="huwV5e"] > .AotkO > .kStSsc > .U6uDnf > .RKk3r')
        afrejsetid.click()
        //Nulstil
        cy.get("button[class='VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf ksBjEc lKxP2d bRx3h yJQRU'] span[class='VfPpkd-vQzf8d']").click()
        const afrejse_fra_selectors = cy.get("div[class='X4feqd wDt51d'] input[placeholder='Afrejsedato']")
//        afrejse_fra_selectors.type('fre. 28. jan{enter}')
        afrejse_fra_selectors.type(departDat + '{enter}')
    }
    returnDate(returnDat){
//        const hjemkomst = cy.get("div[class='X4feqd wDt51d'] input[placeholder='Hjemrejsedato']").type('fre. 11. feb{enter}')
        cy.get("div[class='X4feqd wDt51d'] input[placeholder='Hjemrejsedato']").type(returnDat + '{enter}')
        const udfoer = cy.get('.VfPpkd-RLmnJb').eq(15)
        udfoer.click({force:true})
    }
    seeAllAvailableFlights(){
        cy.wait(2000)
        cy.get('.XWBoJb').click()
        cy.wait(8)
    }


}



export default Flight