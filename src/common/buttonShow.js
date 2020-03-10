export const buttonShow = () => {
    const buttonOne = document.getElementById('btn_one')
    const flightTo = document.getElementById('flight-selector_ticketTo')
    const buttonTwo = document.getElementById('btn_two')
    const flightFrom = document.getElementById('flight-selector_ticketFrom')
 
        buttonOne.addEventListener('click', () =>{
            flightTo.classList.remove("d-none");
        })
        buttonTwo.addEventListener('click', () =>{
            flightFrom.classList.remove("d-none");
        })
    
  
}