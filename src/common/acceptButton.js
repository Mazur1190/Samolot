export const accept = () => {
    const dateCheckTo = document.getElementById('selected-dateTo')
    const dateCheckFrom = document.getElementById('selected-dateFrom')
    //Buttons
    const btn_zero = document.getElementById('btn_zero')
    const btn_three = document.getElementById('btn_three')
    const btn_four = document.getElementById('btn_four')
    const btn_five = document.getElementById('btn_five')
    const btn_seven = document.getElementById('btn-seven')
    //Views
    const flightDirection = document.getElementById('flightDirection')
    const flightTo = document.getElementById('flight_to')
    const flightFrom = document.getElementById('flight_from')
    const baggage = document.getElementById('baggageView')
    const btnFive = document.querySelector('.btn-five')
    const btnSix = document.getElementsByClassName('btn-six')
    const airplaneSmall = document.getElementById('airplaneSmall')
    const airplaneLarge = document.getElementById('airplaneLarge')
    const summary = document.getElementById('summaryView')
    //Buttons logics
    btn_zero.addEventListener('click', ()=>{
        const directionTo = document.getElementById('directionTo')
        const directionFrom = document.getElementById('directionFrom')
        if(directionTo.value === '' || directionFrom.value === ''){
            alert("Proszę dokonać wyboru")
        }else{

            flightDirection.style.display="none"
            flightTo.style.display="flex"
            flightFrom.style.display="flex"
        }
    })
    btn_three.addEventListener('click', ()=>{
        if(parseInt(window.ticketToPrice) > 0 && parseInt(window.ticketFromPrice)> 0 ){
            if (dateCheckTo.dataset.accept === "true"){
                if(dateCheckFrom.dataset.accept === "true"){
                    flightTo.style.display="none"
                    flightFrom.style.display="none"
                    baggage.style.display="flex"
                }else{
                    alert("Proszę wybrać datę powrotu")
                }
            }else{
                alert("Proszę wybrać datę wylotu")
            }
        }
        else{
            alert("Proszę dokonać wyboru biletów")
        }
    })
    btn_four.addEventListener('click', ()=>{
        let x = parseInt(window.people)
        let y = parseInt(window.young)
        let z = parseInt(window.child)
        let sum =x + y + z
        window.airplaneSeats = sum
        if(sum >9){
            alert("Można wybrać maksymalnie 9 miejsc!")
        }else{
            airplane()
            function airplane(){
                const destinationFrom = document.querySelector('#directionTo option:checked')
                if(x>0 || y>0){
                    if(destinationFrom.getAttribute('data-distance') ==="long" || destinationFrom.getAttribute('data-distance') ==="medium"){
                        baggage.style.display="none"
                        airplaneLarge.style.display="flex"
                        btnFive.style.display="flex"
                    }else{
                        baggage.style.display="none"
                        airplaneSmall.style.display="flex"
                        btnFive.style.display="flex"
                    }
                }else if (z>0 && x===0){
                    alert("Dziecko musi lecieć z opiekunem!")
                }else{alert("Proszę dokonać wyboru biletów")}
            }
        }
    })
    btn_five.addEventListener('click', ()=>{
        airplaneSmall.style.display="none"
        airplaneLarge.style.display="none"
        btnFive.style.display="none"
        summary.style.display="flex"
    })
    btn_seven.addEventListener('click', ()=>{
        summary.style.display="none"
        alert("Dziękujemy za zakup podrózy, życzymy udanego wypoczynku")
        window.location.reload(true);
    })
}