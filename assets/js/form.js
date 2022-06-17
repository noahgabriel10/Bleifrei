const submit = document.getElementById("spielenbtn")
const vorname = document.getElementById("vorname")
const nachname = document.getElementById("nachname")
const email = document.getElementById("email")
const err = document.getElementById("Err")

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var vornameErr = nachnameErr = emailErr = true;
submit.disabled = true;


const validate = () => {

    if (vorname.value == "") {
        err.innerText = "Bitte fülle alle Felder aus!";
        vornameErr = true;
    } else {
        err.innerText = "";
        vornameErr = false;
    } 

    if (nachname.value == "") {
        err.innerText = "Bitte fülle alle Felder aus!";
        nachnameErr = true;
    } else {
        err.innerText = "";
        nachnameErr = false;
    }

    if (email.value == "") {
        err.innerText = "Bitte fülle alle Felder aus!";
        emailErr = true;
    } else if (email.value.match(validRegex)) {
        err.innerText = "";
        emailErr = false;
    } else {
        err.innerText = "Bitte gib eine gültige E-Mail Adresse an!";
        emailErr = true;
    }

    if (vornameErr || nachnameErr || emailErr == true) {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }

    /*

    if (vorname.value == "") {
        err.innerText = "Bitte fülle alle Felder aus!"
    } else {
        err.innerText = ""
        vornameValid = true
    } 

    if (nachname.value == "") {
        err.innerText = "Bitte fülle alle Felder aus!"
    } else {
        err.innerText = ""
        nachnameValid = true
    }

    if (email.value == "") {
        err.innerText = "Bitte fülle alle Felder aus!"
    } else if (email.value.match(validRegex)) {
        err.innerText = ""
        emailValid = true
    } else {
        err.innerText = "Bitte gib eine gültige E-Mail Adresse an!"
    }

    if (vornameValid == false || nachnameValid == false || emailValid == false) {
        submit.disabled = true
    } else {
        submit.disabled = false
    }
    
    
    
    if (email.value == "" || vorname.value == "" || nachname.value == "") {
        submit.disabled = true
        err.innerText = "Bitte fülle alle Felder aus!"
    } else {
        submit.disabled = false
        err.innerText = ""
    }
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
        submit.disabled = false
    } else {
        submit.disabled = true
        err.innerText = "Bitte gib eine gülltige E-Mail Adresse an!"
    }
    */
}



vorname.addEventListener("keyup", (event) => {
    validate();
})

nachname.addEventListener("keyup", (event) => {
    validate();
})

email.addEventListener("keyup", (event) => {
    validate();
})






submit.addEventListener("click", async (event) => {
    event.preventDefault()
    const result = await databaseClient.insertInto("users", ["vorname","nachname","email"], [vorname.value, nachname.value, email.value])
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf die Game Page  
        location.href = "./game.html"
    }

})
