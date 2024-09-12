let password = document.getElementsByClassName("password")[0];
let message = document.getElementsByClassName("message")[0];
let str = document.getElementsByClassName("strength")[0];

let textOne = document.getElementsByClassName("text-1")[0];
let textTwo = document.getElementsByClassName("text-2")[0];
let textThree = document.getElementsByClassName("text-3")[0];

let imageOne = document.getElementsByClassName("image-1")[0];
let imageTwo = document.getElementsByClassName("image-2")[0];
let imageThree = document.getElementsByClassName("image-3")[0];



password.addEventListener('input', () => {
    if(password.value.length > 0){
        message.style.display = "block";
    }
    else{
        message.style.display = "none";
    }
    if(password.value.length < 4){
        str.innerHTML = "Weak";
        password.style.borderColor = "#ff5925"
        message.style.color = "#ff5925";
    }
    else if(password.value.length <= 4 && password.value.length < 8){
        str.innerHTML = "Medium";
        password.style.borderColor = "yellow"
        message.style.color = "yellow";
    }
    else if(password.value.length > 8){
        str.innerHTML = "Strong";
        password.style.borderColor = "#26d730"
        message.style.color = "#26d730";
    }


    const hasNumber = /\d/;
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;


    if(hasSpecialCharacter.test(password.value)){
        textOne.style.color = "#00c217"
        imageOne.src = "Images/tick.svg";
    }
    if(hasNumber.test(password.value)){
        textTwo.style.color = "#00c217"
        imageTwo.src = "Images/tick.svg";
    }
    if(password.value.length >= 8){
        textThree.style.color = "#00c217"
        imageThree.src = "Images/tick.svg";
    }
})
