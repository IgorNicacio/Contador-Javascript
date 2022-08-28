let saveID = document.getElementById("save-id")
let numero = document.getElementById("numero")
let count = 0

function increment(){
    count += 1
    numero.textContent = count
}

function decrement(){
    count -= 1
    numero.textContent = count
}
function save(){
    let save = count + "; "
    saveID.textContent += " " + save 
    numero.textContent = 0
    console.log(count)
}