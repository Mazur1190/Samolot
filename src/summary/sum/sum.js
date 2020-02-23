


export const sum = () => {
    const passengers_element = document.getElementById('passengers');
    const baggage_element = document.getElementById('baggage')
    const seats_element = document.getElementById('seats')
    const sum_element = document.getElementById('summary')





    // (( parseInt(window.people) * parseInt(window.baggagePrice) ) + (( parseInt(window.people) *(( parseInt(window.ticketToPrice)  + parseInt(window.ticketFromPrice)  )) + "$"

      // (parseInt(window.ticketToPrice)+ parseInt(window.ticketFromPrice))


    // (parseInt(window.people)
    // parseInt(window.child)
    // parseInt(window.young)
    // parseInt(window.baggagePrice)

    
    let sum = () =>{
        let sumPeople =  (parseInt(window.people) * parseInt(window.baggagePrice))+ (parseInt(window.people)* (parseInt(window.ticketToPrice)  + parseInt(window.ticketFromPrice))) 
        let sumYoung =  (parseInt(window.young) * parseInt(window.baggagePrice))+ (parseInt(window.young)* (parseInt(window.ticketToPrice)  + parseInt(window.ticketFromPrice)))
        let sumChild =  (parseInt(window.child) * parseInt(window.baggagePrice))+ (parseInt(window.child)* (parseInt(window.ticketToPrice)  + parseInt(window.ticketFromPrice)))


        sum_element.innerHTML = sumPeople + sumYoung*0.5 + sumChild*0.4 + "$"

    }
    sum()
  
}