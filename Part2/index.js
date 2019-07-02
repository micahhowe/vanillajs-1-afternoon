let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')
//console.log(idInput,colorInput)

function setCard() {
    let card = document.getElementById(idInput.value)
    //console.log(2, card)
    card.style.color = colorInput.value;
}
function reset1(){
    for(b=0;b<5;b++){
    let cardi = document.getElementsByTagName('section')
    cardi[b].style.color = "grey"
    console.log(cardi[b])
    }
}

