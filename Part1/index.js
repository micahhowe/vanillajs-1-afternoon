const squares = document.getElementsByTagName('td')
let board = []


//console.log(topRight)

function play(clickedId) {
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)
    if(playerSpan.innerText === 'X' && clickedElement.innerText !== 'X' && clickedElement.innerText !== 'O'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    }
    else if(playerSpan.innerText === 'O' && clickedElement.innerText !== 'X' && clickedElement.innerText !== 'O') {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }  
    let topLeft = board[0]
    let topCenter = board[1]
    let topRight = board[2]
    let middleLeft = board[3]
    let middleCenter = board[4]
    let middleRight = board[5]
    let bottomLeft = board[6]
    let bottomCenter = board[7]
    let bottomRight = board[8]
    let winCheck = false;
    // Top Match
    if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
        winCheck = true
        
        setTimeout(alert(topRight + ' is the winner'), 1000)
    }
    //Midle Match
    if (middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft){
        winCheck = true
        setTimeout(alert(middleRight + ' is the winner'), 1000)
    }
    //Bottom Match
    if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft){
        winCheck = true
        setTimeout(alert(bottomRight + ' is the winner'), 1000)
    }
    // All Left Match
    if (topLeft !== undefined && topLeft === middleLeft && bottomLeft === middleLeft){
        winCheck = true
    (alert(topLeft + ' is the winner'), 1000)
    }
    //All Center Match
    if (topCenter !== undefined && middleCenter === bottomCenter && bottomCenter === topCenter){
        winCheck = true
        alert(topCenter + ' is the winner')
        }
    //All Right Match
    if (topRight !== undefined && topRight === middleRight && bottomRight === topRight){
        winCheck = true
        alert(topRight + ' is the winner')
        }
    //One Diagonal Match
    if (topRight !== undefined && topRight === middleCenter && middleCenter === bottomLeft){
        winCheck = true
        alert(topRight + ' is the winner')
        }
    //Other Diagonal Match
    if (topLeft !== undefined && topLeft === middleCenter && middleCenter === bottomRight){
        winCheck = true
        alert(topLeft + ' is the winner')
    }
    // I'd like to take this opportunity to apoligize for this next 3 lines of code
    else if(topLeft !== undefined && topRight !==undefined && middleCenter !== undefined && topCenter !== undefined && middleLeft !== undefined && middleRight !== undefined && bottomRight !== undefined && bottomLeft !== undefined && bottomCenter !==undefined && winCheck == false){
        alert('Cats Game!')
    }
}
function reset(){
    for(i=0;i<10;i++){
        document.getElementById(i).innerText = ''    
    }
    //console.dir(squares)
         board = []
        // console.log(board)
        
}
