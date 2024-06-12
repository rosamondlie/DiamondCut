const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const password = document.getElementById("pass")
const confirmPassword = document.getElementById("con-pass")
const errorUname = document.getElementById("error-uname")
const errorEmail = document.getElementById("error-email")
const errorPhone = document.getElementById("error-phone")
const errorPass = document.getElementById("error-pass")
const errorConPass = document.getElementById("error-con-pass")

function validateForm(e){
    e.preventDefault()
    const splitted = username.value.split(' ')
    if(splitted.length < 2){
        errorUname.innerHTML = 'Username must contain at least 2 words'
    }else{
        errorUname.innerHTML = ''
    }

    const keongIndex = email.value.indexOf('@')
    const dotIndex = email.value.indexOf('.')

    if(keongIndex == -1) {
        errorEmail.innerHTML = 'Email must contain @'
    }else if(dotIndex == -1) {
        errorEmail.innerHTML = 'Email must contain .'
    }else if(dotIndex < keongIndex) {
        errorEmail.innerHTML = '. must be after @' 
    }else{
        errorEmail.innerHTML = ''
    }


    // if(!phone.startsWith('08')){
    //     errorPhone.innerHTML = "Must start with '08'"
    // }

    var adaHurufBesar = false
    for(const huruf of password.value){
        if(huruf >= 'A' && huruf<='Z'){
            adaHurufBesar = true
        }
    }

    if(!adaHurufBesar){
        errorPass.innerHTML = "Password must contain at least 1 uppercase"
    }else{
        errorPass.innerHTML = ""
    }

    if(confirmPassword.value != password.value){
        errorConPass.innerHTML = "Confirm password must same as password"
    }else{
        errorConPass.innerHTML = ""
    }
}

form.addEventListener('submit', validateForm)

