export const seatSelector = () => {

    //---------------------------
    // LOOPING THROUGH Seats
    //---------------------------
    window.place = []
    let currentId = []
    const positions = document.querySelectorAll('rect')
    window.airplaneSeats // seats choosen by client
    
    positions.forEach(e => {
            e.addEventListener("click", function () {
                  // Takes ticket value
                  // Checking seat
                      // seat is reserved
                  if(e.classList.contains('status-available') && e.classList.contains('status-reserved')){
                      // delete reservation
                      e.classList.remove('status-reserved')
                      // delete ID from Array
                      currentId.splice( currentId.indexOf(e.getAttribute("id")), 1 )
                  }
                  else if( e.classList.contains('status-booked')){
                      // do not add same seats to array
                      currentId.splice( currentId.indexOf(e.getAttribute("id")), 0 )
                  }
                  // seat is aveliable
                  else if(currentId.length < window.airplaneSeats){
                      // reserve
                      e.classList.add('status-reserved')
                      // add ID to array
                      currentId.push(e.getAttribute("id")) 
                  }
                  const element = document.getElementById('seats')
                  function placeShow(){
                      window.place = currentId
                      element.innerText = window.place.join(', ')
                  }
                  placeShow()
            })
    });
    }
