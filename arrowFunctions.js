// function printMyName(name){
//     console.log(name + " is a fantastic boy.")
// }

// printMyName('Amin')

let printiMyName = (name) => {
    console.log(name + " is a good boy.")
}

printiMyName('Amin')

// Return value
// if you don't include the operation in {}, it will actually return the value.

const calculatePrice = amount => amount*12 //  returns amount*12
// const calculatePrice = amount => {amount*12} doens't return anything

let finalPrice = calculatePrice(5)

console.log(finalPrice)