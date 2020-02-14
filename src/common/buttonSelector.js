

export const buttonSelector = () => {

//---------------------------
// LOOPING THROUGH TICKETS
//---------------------------
window.ticketToPrice = 0
window.ticketFromPrice = 0

// Get all buttons with class="btn" inside the container
let btnsTo = document.getElementsByClassName("flight-selector_ticket-classTo");
let btnsFrom = document.getElementsByClassName("flight-selector_ticket-classFrom");
// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btnsTo.length; i++) {
 
  btnsTo[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("flight-selector_ticket-class-acceptTo");
    let currentValueTo = this.getAttribute("value");  // Pobiera wartosc biletu
    window.ticketToPrice = currentValueTo
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" flight-selector_ticket-class-acceptTo", "");
    }

    // Add the active class to the current/clicked button
    this.className += " flight-selector_ticket-class-acceptTo";

    return currentValueTo
  });
}
// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btnsFrom.length; i++) {
    btnsFrom[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("flight-selector_ticket-class-acceptFrom");
      let currentValueFrom = this.getAttribute("value");  // Pobiera wartosc biletu
      window.ticketFromPrice = currentValueFrom
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" flight-selector_ticket-class-acceptFrom", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " flight-selector_ticket-class-acceptFrom";

      return currentValueFrom
    });
  }

//---------------------------
// LOOPING THROUGH BAGGAGE
//---------------------------
window.baggagePrice = 0

 let btnsBaggage = document.getElementsByClassName("baggage_box-bot-options");
// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btnsBaggage.length; i++) {
  btnsBaggage[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("baggage_box-bot-optionsAccept");
    let currentValueBaggage = this.getAttribute("value");  // Pobiera wartosc biletu
    console.log(currentValueBaggage)
    window.baggagePrice = currentValueBaggage

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" baggage_box-bot-optionsAccept", "");
    }

    // Add the active class to the current/clicked button
    this.className += " baggage_box-bot-optionsAccept";

  });
}
//---------------------------
// BAGGAGE PEOPLE QUANTITY
//---------------------------

window.people = 0
window.young = 0
window.child = 0



  const  peopleQuantity = () =>{
    const peopleSelector = document.getElementById("adults_baggage_box")
    const youngSelector = document.getElementById("young_baggage_box")
    const childSelector = document.getElementById("child_baggage_box")

    peopleSelector.addEventListener("change",  ()=>{
      const people = document.getElementById("adults_baggage_box").value
      window.people = people
    })
    youngSelector.addEventListener("change", ()=>{
      const young = document.getElementById("young_baggage_box").value
      window.young = young
    })
    childSelector.addEventListener("change", ()=>{
      const child = document.getElementById("child_baggage_box").value
      window.child = child
    })
  }
  peopleQuantity()
}