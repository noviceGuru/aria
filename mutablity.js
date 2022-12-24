// ==== 1. Primitive types
// const name = 'Amin'

// name = 'Aria'
// let firstName = 'Amin'
// firstName = 'Aria'

// let isOld = true
// isOld = false
// console.log(isOld)

// ==== 1. Objects

// const customer = {
//     name: "michael",
//     surname: "Jordan",
//     age: 52
// }

// customer.surname = "Jackson"

// console.log(customer)

// Note : You can change instances of a const object.

// const names =[ 'Amin', 'Aria', 'Elahe']

// names[2] = 'Nazanin'

// console.log(names)

// Note : You can change instances of a const array.

// =======================
// Shallow copy
// let customer = {
//     name : 'Valad',
//     surname : 'Beig'
// }

// const customerCopy = customer

// console.log(customerCopy)

// customer.name = 'Shams'

// console.log(customerCopy)
// What happened : JS makes a pointer, and does not really copy the object. So, every time you go to check
// the copy, it actually redirects you to the original object.
// As a result, if the original changes, the copy will change too.

// DEEP COPY
// Spread operator ...

// let customer = {
//     name : 'Valad',
//     surname : 'Beig',
//     healthStatus:{
//         heart : 'good',
//         stomach : 'bad'
//     }
// }

// let customerCopy = {...customer} // Deep copy [only for one level]

// console.log(customerCopy)

// customer.healthStatus.heart = 'bad'

// console.log(customerCopy)

// Arrays exmaple

// let favoriteBreads = ['taftoon', 'sangak', 'lavash']

// let favoriteBreadsCopy = favoriteBreads // Shallow copy

// favoriteBreads[1] = 'brabari'

// console.log(favoriteBreadsCopy)

// Deep copy
// let favoriteBreads = ['taftoon', 'sangak', 'lavash']

// let favoriteBreadsCopy = [...favoriteBreads] // Deep copy

// favoriteBreads[1] = 'brabari'

// console.log(favoriteBreadsCopy)