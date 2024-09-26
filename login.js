let signupbtn = document.getElementById("signupBtn")
let signinbtn = document.getElementById("signinBtn")
let namefield = document.getElementById("nameField")
let title = document.getElementById("title")

signinbtn.onclick = function(){
    namefield.style.maxHeight="0";
    title.innerHTML = "Sign In"
    signupbtn.classList.add("disable")
    signinbtn.classList.remove("disable")
}

signupbtn.onclick = function(){
    namefield.style.maxHeight="65px";
    title.innerHTML = "Sign Up"
    signupbtn.classList.remove("disable")
    signinbtn.classList.add("disable")
}

