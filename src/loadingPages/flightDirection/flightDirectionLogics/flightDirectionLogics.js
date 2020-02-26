import $ from 'jquery';

export const directionChecker = () => {

        const destinationTo = document.getElementById("directionTo")

        destinationTo.addEventListener('change', ()=>{
            const direction = document.getElementById('directionFrom')

            function check () {
                const option0 = document.createElement('option')
                const option1 = document.createElement('option')
                const option2 = document.createElement('option')
                function removeOption (){
                    direction.remove(option0)
                    direction.remove(option1)
                    direction.remove(option2)
                }
                function directionAdd (){
                    direction.add(option0)
                    direction.add(option1)
                    direction.add(option2)
                }
                if(destinationTo.value === "Wrocław"){
                    removeOption()
                    option1.setAttribute("data-distance", "short")
                    option2.setAttribute("data-distance", "short")
                    option1.text = "Warszawa"
                    option2.text = "Berlin"
                    directionAdd();
                }else if(destinationTo.value === "Berlin"){
                    removeOption()
                    option1.setAttribute("data-distance", "medium")
                    option2.setAttribute("data-distance", "medium")
                    option1.text = "Moskwa"
                    option2.text = "Paryż"
                    directionAdd();
                }else if(destinationTo.value === "Amsterdam"){
                    removeOption()
                    option1.setAttribute("data-distance", "long")
                    option2.setAttribute("data-distance", "long")
                    option1.text = "Hong Kong"
                    option2.text = "New Your"
                    directionAdd();
                }
            }

            if(destinationTo.value === "Wrocław"){
               check()
                
            }
            else if(destinationTo.value === "Berlin"){
                check()
            }
            else if(destinationTo.value === "Amsterdam"){
                check()
            }
            else{
                alert("Proszę wybrać miejsce wylotu")
            }

        })


}



