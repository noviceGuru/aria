// let newParagraph = document.createElement('h1')
// let body = document.body

// newParagraph.textContent = 'P 2'

// body.appendChild(newParagraph)

// let names = ['Kir' , 'khaye' , 'soozak' , 'koon', 'Aria Mirazaee']

const createH1TagsForBody = (name) => {
    let newElement = document.createElement('h1')
    let bodyTwo = document.body
    newElement.textContent = name
    newElement.style.cursor = 'pointer'
    if (name === 'Aria' ){ newElement.style.backgroundColor = 'blue'}
    bodyTwo.appendChild(newElement)
    newElement.addEventListener('click', ()=> console.log(name))
}

// createH1TagsForBody('Amin')

// names.forEach(el => createH1TagsForBody (el))
export default createH1TagsForBody;
