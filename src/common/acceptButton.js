
export const accept = () => {
    //Buttons
    const btn_three = document.getElementById('btn_three')
    const btn_four = document.getElementById('btn_four')
    const btn_five = document.getElementById('btn_five')
    const btn_six = document.getElementById('btn_six')
    const btn_seven = document.getElementById('btn-seven')
    //Views
    const flightTo = document.getElementById('flight_to')
    const flightFrom = document.getElementById('flight_from')
    const baggage = document.getElementById('baggageView')
    const btnFive = document.querySelector('.btn-five')
    const btnSix = document.getElementsByClassName('btn-six')
    const airplaneSmall = document.getElementById('airplaneSmall')
    const airplaneLarge = document.getElementById(' airplaneLarge')
    const summary = document.getElementById('summaryView')

    btn_three.addEventListener('click', ()=>{

        flightTo.style.display="none"
        flightFrom.style.display="none"
        baggage.style.display="flex"
    })

    btn_four.addEventListener('click', ()=>{
        baggage.style.display="none"
        airplaneSmall.style.display="flex"
        btnFive.style.display="flex"
        /*
        if(tutaj selektor lotow jezeli rowna sie long to wyswielt duzy samolot){
           
        }
        */
    })

    btn_five.addEventListener('click', ()=>{
        airplaneSmall.style.display="none"
        btnFive.style.display="none"
        summary.style.display="flex"
    })
    
    // btn_six.addEventListener('click', ()=>{

    // })

    btn_seven.addEventListener('click', ()=>{
        summary.style.display="none"
        alert("Dziękujemy za zakup podrózy, życzymy udanego wypoczynku")
    })


}