console.log(document)
    
let theButton = document.getElementById("magicButton")

// addEventListener("What element", "What to do")
// theButton.addEventListener("click", (e)=>console.log('Amin'))

// More straightforward
theButton.onclick = () =>console.log('Amin')