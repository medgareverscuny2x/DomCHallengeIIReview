//Create an HTML page with two buttons that argue with each other.
//When one button is clicked, the text "I'm right" should be placed next to it. 
//When the other button is clicked, the text is replaced with, "No, I'm right!"
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let text = document.getElementById("text")

function editTextOne() {
    text.innerText = "I'm right"
}

function editTextTwo()  {
    text.innerText = "No, I'm right!"
}

button1.addEventListener("click", editTextOne)
button2.addEventListener("click",editTextTwo)

//Create an HTML page with a large element on the page that says "Don't hover over me" inside of it.
//When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!
let hover = document.getElementById("header")

function hoverWarning() {
    alert("I told you not to hover!")
}

// hover.addEventListener("mouseover", hoverWarning)

//Create an HTML page with a form. 
//It should include inputs for a username, email, and password. 
//Also a submit button.
//In a Javascript file, write a program which checks the following things:
//checks that the password is 12345678
//if the password is incorrect, send an alert message
//Your page should also include an <h1> tag. 
//If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.
let login = document.getElementById("submitButton")
let password = document.getElementById("password")
let header = document.querySelector("h1")

function validate() {
    //needs to check if the password value i entered is 12345678
    //to do that, I need access to the password fields value
    if (password.value === "12345678")  {
        alert("Correct")
        header.innerHTML = "correct"
    }   else    {
        alert("Incorrect")
    }
}

login.addEventListener("click", validate)
