


export const sum = () => {
    const sum_element = document.getElementById('summary')
    const sum_elementAside = document.getElementById('sumAside')
    const sum_elementAsideTicket = document.getElementById('ticketsAside')
    let sum = () =>{
        let sumPeople =  (parseInt(window.people) * parseInt(window.baggagePrice))+ (parseInt(window.people)* (parseInt(window.ticketToPrice)  + parseInt(window.ticketFromPrice))) 
        let sumYoung =  (parseInt(window.young) * parseInt(window.baggagePrice))+ (parseInt(window.young)* (parseInt(window.ticketToPrice)  + parseInt(window.ticketFromPrice)))
        let sumChild =  (parseInt(window.child) * parseInt(window.baggagePrice))+ (parseInt(window.child)* (parseInt(window.ticketToPrice)  + parseInt(window.ticketFromPrice)))

        let asideTicket = parseInt(window.ticketToPrice)  + parseInt(window.ticketFromPrice)


        sum_element.innerHTML = sumPeople + sumYoung*0.5 + sumChild*0.4 + "$"
        sum_elementAside.innerHTML = sumPeople + sumYoung*0.5 + sumChild*0.4 + "$"
        sum_elementAsideTicket.innerHTML = asideTicket + "$"
    }
    sum()
  
}