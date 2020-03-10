
export const loginLogics = () => {
    const btn = document.getElementById('login-btn');
    btn.addEventListener('click', checkLogin )
    function checkLogin (){
        event.preventDefault();
        const emailAddress = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;
        const page = document.getElementById('login_page')
        const aside = document.getElementById('menu')
        let session = false
        fetch('http://localhost:3000/users') 
            .then((res) => {
                return res.json();  
            })
            .then((elements) => { 
                elements.forEach(el => {  
                    if(el.login === emailAddress && el.password === password){  
                        page.style.display="none"
                        aside.style.visibility = "visible"
                        session = true
                    }
                });
                if(!session){
                    alert("Hasło albo login jest nieprawidłowe.")
                }
            });
    }
}