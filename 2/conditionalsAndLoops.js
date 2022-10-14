// #region Conditionals

// function ifNameAminPrintYes(name) {
//     if (name === 'Amin') {
//         console.log('Yes!')
//     } else {
//         console.log('No!')
//     }
// }

// function ifNameAminOrAriaPrintYesOrMaybe(name) {
//     if (name === 'Amin') {
//         console.log('Yes!')
//     } else if (name === 'Aria') {
//         console.log('Maybe')
//     } else {
//         console.log('No')
//     }
// }
// = means => put this value inside this variable.
// == means equals to. Problem: '2' == 2 is true.
// === means equals to. '2' === 2 is false


// STUDY THESE
// == !=
// === !==
// >
// <
// =>
// =<
// switch
// ternary operator

// ifNameAminPrintYes('Aria')
// ifNameAminOrAriaPrintYesOrMaybe('Amin')
// ifNameAminOrAriaPrintYesOrMaybe('Aria')
// ifNameAminOrAriaPrintYesOrMaybe('Rasool')

// #endregion Conditionals

// #region Loops

// repeat it on every instance of this piece of data (can be array, object or even string) until a condition is satisfied.

let names = ['Amin', 'Aria', 'Pooria', 'Michael Jordan']

for (let index = 0; index < names.length; index++) {
    if(names[index] === 'Amin'){
        console.log(names[index] + ' kir darad.')
    }else{
        console.log(names[index] + ' kir nadarad.')
    }
}

// #endregion loops


// #region Exercises

//1. Write a function that accepts an array of numbers, and prints only the elements that are bigger than 10.
//2. Write a function that accepts an array of strings, and prints only the elements that are longer than 5 charachters.

//3. write a function that accepts an array of numbers, and prints the sum of all the numbers in the array.
//4. write a function that accepts a number and prints an array of natural numbers, long as the accepted number.

// #endregion Exercises