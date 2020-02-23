

export const seatSelector = () => {

    //---------------------------
    // LOOPING THROUGH Seats
    //---------------------------
    window.place = []

    let currentId = []
    const positions = document.querySelectorAll('rect')
    positions.forEach(e => {
        e.addEventListener("click", function () {
            // Pobiera wartosc biletu
    
            // sprawdzam miejsce
                // miejsce jest zarezerowane
            if(e.classList.contains('status-available') && e.classList.contains('status-reserved')){
                // usuwam rezerwacje
                e.classList.remove('status-reserved')
                // z tablicy usuwwam ( pozycje ID)
                currentId.splice( currentId.indexOf(e.getAttribute("id")), 1 )
            }
            else if( e.classList.contains('status-booked')){
                // nie dołaczam do tablicy zarezerwowanych miejsc
                currentId.splice( currentId.indexOf(e.getAttribute("id")), 0 )
            }
            // miejsce jest dostepne
            else{
                // zarezerwuj
                e.classList.add('status-reserved')
                // dodaj do tablicy ID
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
