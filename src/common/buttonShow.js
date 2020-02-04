import $ from 'jquery';

export const buttonShowTo = () => {
    const button = document.getElementById('btn_one')
//     const flightTo = document.getElementById('flight-selector_ticketTo')

//    const testudo = function (){

//        button.addEventListener('ckick', flightToElement);
    
//        flightToElement = () => {
//            flightTo.style.display="none"
//        }
//    }
    const testudo = () => {

        button.addEventListener('click', () =>{
            console.log("działa")
        })
           
    }
   
    
   return testudo;
}