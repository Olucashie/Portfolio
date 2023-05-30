let registered_user = JSON.parse(localStorage.getItem('user'))
console.log(registered_user);
// let loggedUser = {}

// if (localStorage.getItem('currentUser')) {
//     loggedUser = JSON.parse(localStorage.getItem('currentUser'))
// }
// else{
//     window.location.href = '/login.html'
// }

// localStorage.clear('currentUser')

let login = document.getElementById('login');
if(login){
    login.addEventListener('click', (e)=>{
        e.preventDefault()
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let message = document.getElementById('message');
        let spinner = document.getElementById('sb')

        let seenUser = false;
        let current_user = {}

        registered_user.forEach(element => {
            if(email == element.email && password == element.password){
                seenUser = true
                current_user = element
                console.log(current_user);
                // message.innerHTML = `<p style="background-color: rgb(177, 96, 96);">User Information Incorect</p>`
                // return;
            }
                // spinner.setAttribute('style', 'display: block')
                // setInterval(() => {
                    
                    // window.location.href = '../dashboard/dashboard.html'
                // }, 3000);
            
        });
        console.log(seenUser);
        if (seenUser) {
                spinner.setAttribute('style', 'display: block')
                    setInterval(() => {
                        localStorage.setItem("currentUser", JSON.stringify(current_user))
                        console.log(current_user);
                        window.location.href = 'spotify.html'
                    }, 3000);
        }else{
            message.innerHTML = `<p style="background-color: rgb(177, 96, 96);">User Information Incorect</p>`
        }
    })
}