const createElement = (elementType, id, innerText, appendTo) => {
    let addedElement = document.createElement(elementType)
    addedElement.id = id
    addedElement.innerText = innerText
    appendTo.appendChild(addedElement)
    return addedElement
}

createElement("div", "button-container", "", document.body)

// Add elements to the DOM
let firstNumber
let secondNumber
let operation

const inputNumber = createElement("input", "input-number", "", document.body)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13,0]
const numberButtons = numbers.map(e => createElement("button", `button-${e}`, e, document.body))
const equalButton = createElement("button", "equal", "=", document.body)
const clearButton = createElement("button", "clear", "C", document.body)
const operations = ["*", "+", "-", "/"]
const operationsButtons = operations.map(e => createElement("button", `button-${e}`, e, document.body))

// Adding onclick functions
numberButtons.forEach(e => e.onclick = () => {
    if (operation) {
        inputNumber.value = e.innerText
        operation = null
    } else {
        inputNumber.value += e.innerText
    }
})

operationsButtons.forEach(e => e.onclick = () => {
    console.log(e.innerText)
    operation = e.innerText
    firstNumber = inputNumber.value + operation
})

equalButton.onclick = () => {
    inputNumber.value = eval(firstNumber + inputNumber.value)
    operation = undefined
    firstNumber = undefined
    secondNumber = undefined
}

clearButton.onclick = () => {
    operation = undefined
    firstNumber = undefined
    secondNumber = undefined
    inputNumber.value = ""
}

// inputNumber.value = inputNumberValue