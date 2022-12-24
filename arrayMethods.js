// Favorite ones
// map (returs an array)
// forEach (doesn't return anything)
// filter
// find

// example 
let array = ['Amin', 'Aria', 'Joe', 'Jim']

// const doThisForEachOfThem = element => {
//     console.log(element + " is a good boy.")
// }

// array.forEach(doThisForEachOfThem)

let arrayIsAGoodBoy = array.map( element => {
    let phrase = element + " is a good boy."
    return phrase
})

console.log(arrayIsAGoodBoy)