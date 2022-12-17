//'amin' name
//'arabi' surname
// 34 age
// yes (true) has kids
// false    is rich
// Nike, Adidas, Geox  favorite shoes

let theFirstClient = {
    // key : value
    name : 'Amin',
    surname : 'Arabi',
    age: 34,
    hasKids: true,
    isRich: false,
    favoriteShoes: ['Nike', 'Adidas', 'Geox']
}

function printDadsName(){
    console.log('Mohammad')
}

let theSecondClient = {
    // key : value
    name : 'Aria',
    surname : 'Mirzaee',
    age: 34,
    hasKids: false,
    isRich: true,
    favoriteShoes: ['Charme Mashhad', 'Reebok', 'Geox'],
    printDadsName: printDadsName
}

// theSecondClient.birthday = '05-03-1988'
// theSecondClient.printDadsName()
// console.log(typeof(printDadsName))
// console.log(typeof(theSecondClient.favoriteShoes))
// console.log(theSecondClient.favoriteShoes[1])
// console.log(theSecondClient.birthday)
theSecondClient.favoriteShoes.forEach(
    function(element){
        console.log(element)
    }
)