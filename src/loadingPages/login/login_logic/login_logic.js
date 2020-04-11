
export const loginLogics = () => {
    const btn = document.getElementById('login-btn');
    const page = document.getElementById('login_page')
    const aside = document.getElementById('menu')
    const destination = document.querySelector('.destination')
    btn.addEventListener('click', checkLogin )
    function checkLogin (){
        event.preventDefault();
        const emailAddress = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;
        let session = false
        fetch('http://localhost:3000/users') 
            .then((res) => {
                return res.json();  
            })
            .then((elements) => { 
                elements.forEach(el => {  
                    if(el.login === emailAddress && el.password === password){  
                        page.style.display="none"
                        destination.style.display = 'block'
                        aside.style.visibility = "visible"
                        session = true
                        timeAutoLogout()
                    }
                });
                if(!session){
                    alert("Hasło albo login jest nieprawidłowe.")
                }
            });
    }
    // Automatyczne wylogowanie
    window.timeLogin = null
    let session = false;
    function timeAutoLogout() {
        let timeSession = 2000 * 1.5;
        session = true
        clearInterval(timeLogin);
        if(timeSession > 30){
            // console.log('pierszy if')
        }
        timeLogin = setInterval(function() {
            timeSession--;
            if(timeSession <= 0){
                clearInterval(timeLogin);
                page.style.display="block"
                destination.style.display="none"
                aside.style.visibility = "hidden"
                console.log('wylogowano')
                location.reload();
            }
        // ewenetualny alert przed wylogowaniem
            if(timeSession === 30){
                console.log('alert przed wywaleniem sesji')
            }
        }, 1000);
    }
    // odświeżenie countera do wylogowania
    document.addEventListener("click",
        function () {
            if(session){
                timeAutoLogout()
                // console.log('refresh click')
            }
        }
    );
    
}