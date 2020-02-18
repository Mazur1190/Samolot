


export const sum = () => {
    const passengers_element = document.getElementById('passengers');
    const baggage_element = document.getElementById('baggage')
    const seats_element = document.getElementById('seats')
    const sum_element = document.getElementById('summary')

    console.log(sum)

    let sum = () =>{
        let sum = window.ticketToPrice*(window.people*1 + window.young*0.5 + window.child*0.75) + window.baggagePrice + "$"
        
        sum_element.innerHTML = sum

    }
    sum()
  
}