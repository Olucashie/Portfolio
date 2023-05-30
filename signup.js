let registered_user = []
if(localStorage.getItem("user")){
    registered_user = JSON.parse(localStorage.getItem("user"))
    console.log(registered_user);
}

let sign_up = document.getElementById('sign_up');
if(sign_up){
    sign_up.addEventListener('click', (e)=>{
        e.preventDefault()
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirmPassword');
        let message = document.getElementById('message');
        let sb = document.getElementById('sb')

        let user = {
            name: name.value,
            email: email.value, 
            password: password.value,
            confirmPassword: confirmPassword.value
        }
        
        if(user.password != user.confirmPassword){
            message.innerHTML = `<p style="background-color: rgb(177, 96, 96);">Password does not match</p>`
            return;
        } else if(user.name == "" || user.email == "" || user.password == "" || user.confirmPassword == ""){
            message.innerHTML = `<p style="background-color: rgb(177, 96, 96);">Input fields cannot be empty</p>`
            return;
            
        } else{
            let emailExist = false;
            registered_user.forEach(element => {
                if (element.email == user.email) {
                    emailExist = true;
                    message.innerHTML = `<p style="background-color: rgb(177, 96, 96);">Email Already exist</p>`
                    return;
                }
                
            });
            if(emailExist == false){
                sb.setAttribute('style', 'display: block')
                setTimeout(() => {
                    registered_user.push(user)
                    localStorage.setItem("user", JSON.stringify(registered_user))
                    message.innerHTML  = `<p style="background-color: green;">Registration Successful</p>`
                    console.log(registered_user);
                    window.location.href = "login.html"
                }, 3000);
                
            }           
        }
            
    })
}