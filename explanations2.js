let name1 = "mammad"
let name2 = "Javad"
let name3 = "Ali"

let names = ["mammad", "Javad", "Ali"]

// For all of them:
// make "name" is a good boy
// console.log the phrase

let phrase1 = name1 + " is a good boy."
console.log(phrase1)

let phrase2 = name2 + " is a good boy."
console.log(phrase2)

let phrase3 = name3 + " is a good boy."
console.log(phrase3)

// loop (be ezaye name){
//  do the opertation
// }

for (let numberOfTheName = 0; numberOfTheName < 3; numberOfTheName = numberOfTheName + 1) {
    let phrase = names[numberOfTheName] + " is a good boy."
    console.log(phrase)
}

function tellsIfOddOrEven(thisNumber) {
    let theMessageTwo = []

    for (let i = 0; i < thisNumber.length; i++) {
        if (thisNumber[i] % 2 == 0) {
            theMessageTwo.push(thisNumber[i] + ' is an even number.')
        }
        else if (thisNumber[i] % 2 !== 0) {
            theMessageTwo.push(thisNumber[i] + ' is an odd number')
        }
        else { theMessageTwo.push(thisNumber[i] + ' is not a number!') }
    }

    return theMessageTwo
}

function fildOldCustomers(customers) {
    let oldCustomers = []

    for (let cusomerNumber = 0; cusomerNumber < customers.length; cusomerNumber = cusomerNumber + 1) {
        if (customers[cusomerNumber].age > 65) {
            oldCustomers.push(customers[cusomerNumber])
        }
    }

    return oldCustomers

}

function(
    //input
) {
    //operation
}

if (
    //condition
) {
    //operation
}

for (
    //condition
) {
    //operation
}