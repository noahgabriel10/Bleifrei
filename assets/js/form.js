const submit = document.getElementById("spielenbtn")
const vorname = document.getElementById("vorname")
const nachname = document.getElementById("nachname")
const email = document.getElementById("email")
submit.disabled = true

const validate = () => {
    if (email.value == "" || vorname.value == "" || nachname.value == "") {
        submit.disabled = true
    } else {
        submit.disabled = false
    }
}

email.addEventListener("keyup", (event) => {
    validate()
})

vorname.addEventListener("keyup", (event) => {
    validate()
})

nachname.addEventListener("keyup", (event) => {
    validate()
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
