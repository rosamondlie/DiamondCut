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
    // if(username.value == ''){
    //     errorLog.innerHTML = "Fullname ga ke isi brok"
    //     return;
    // }
    const splitted = username.value.split('')
    if(splitted.length <= 2){
        errorUname.innerHTML = "Username must contain at least 2 words"
        return;
    }

    // if(email.value.includes('@') == false){
    //     errorLog.innerHTML = "Email must contain @"
    //     return;
    // }

    const keongIndex = email.value.indexOf('@')
    const dotIndex = email.value.indexOf('.')

    if(keongIndex == -1) {
        errorEmail.innerHTML = 'Email must contain @'
        return
    }

    if(dotIndex == -1) {
        errorEmail.innerHTML = 'Email must contain .'
        return
    }

    if(dotIndex < keongIndex) {
        errorEmail.innerHTML = '. must be after @'
        // return   
    }

    var adaHurufBesar = false
    for(const huruf of password.value){
        if(huruf >= 'A' && huruf<='Z'){
            adaHurufBesar = true
        }
    }

    if(!adaHurufBesar){
        errorPass.innerHTML = "Password must contain at least 1 uppercase"
        // return;
    }

    if(confirmPassword.value != password.value){
        errorConPass.innerHTML = "password tidak sama dengan confirm"
        // return;
    }
}

form.addEventListener('submit', validateForm)




// carousel 
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Initialize the first slide
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.add('active');
});