
export const accept = () => {
    //Buttons
    const btn_zero = document.getElementById('btn_zero')
    const btn_three = document.getElementById('btn_three')
    const btn_four = document.getElementById('btn_four')
    const btn_five = document.getElementById('btn_five')
    const btn_six = document.getElementById('btn_six')
    const btn_seven = document.getElementById('btn-seven')
    //Views
    const flightDirection = document.getElementById('flightDirection')
    const flightTo = document.getElementById('flight_to')
    const flightFrom = document.getElementById('flight_from')
    const baggage = document.getElementById('baggageView')
    const btnFive = document.querySelector('.btn-five')
    const btnSix = document.getElementsByClassName('btn-six')
    const airplaneSmall = document.getElementById('airplaneSmall')
    const airplaneLarge = document.getElementById(' airplaneLarge')
    const summary = document.getElementById('summaryView')

    
        
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

        flightTo.style.display="none"
        flightFrom.style.display="none"
        baggage.style.display="flex"

        let btnsTo = document.getElementsByClassName("flight-selector_ticket-class-acceptTo")
        let btnsFrom = document.getElementsByClassName("flight-selector_ticket-class-acceptTo")

        function check (x,y){
            for(let i = 0; i < btnsTo.length; i++){
                let x = btnsTo[i].getAttribute('value')
                return x
            }
            for(let i = 0; i < btnsFrom.length; i++){
                let y = btnsFrom[i].getAttribute('value')
                return y
            }
            
            console.log(check(x,y))
        }
        check(btnsTo,btnsFrom)
        // if(y === "" || x === ""){
        //     console.log("elo")
        // }
        // else{
        //     console.log("elo2")
        // }
    })

    btn_four.addEventListener('click', ()=>{
        baggage.style.display="none"
        airplaneSmall.style.display="flex"
        btnFive.style.display="flex"
     
        // if(){
           
        // }
        
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