console.log('Amin')

const inputElement = document.getElementById("input")
console.log(inputElement.type)
// inputElement.type = "checkbox"

const buttonElement = document.getElementById("submitButton")
buttonElement.type="submit"
buttonElement.onclick = (e) => {
    console.log(e)
}
console.log(buttonElement)