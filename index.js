let winningMatrix = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['1','4','7'],
        ['2','5','8'],
        ['3','6','9'],
        ['1','5','9'],
        ['3','5','7']
    ],
    gameStatusX = [],
    gameStatusO = [],
    currentPlayer = Math.round(Math.random()) ? 'X' : 'O';
    winnerPlayer = '',
    count = 0,
    check = [],
    cells = document.getElementsByClassName("cell"),
    resetButton = document.getElementById("reset"),
    message = document.getElementById("heading");

function changeCurrentPlayer(){
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

function gameCompleted(flag){
    if(flag){
        winnerPlayer = currentPlayer;
        document.getElementById("board").style.pointerEvents = "none";
        message.textContent = " Player "+ winnerPlayer + " has WON ";
    }
    else if(count == 9)
    message.textContent = " Match is DRAW " ;
}

function gameValidate(){
    let flag = false;
    if(currentPlayer === 'X')
        check = gameStatusX;
    else
        check = gameStatusO;

    for(var i = 0; i< winningMatrix.length; i++){
        var win = winningMatrix[i];
        var first = check.includes(win[0]);
        var second = check.includes(win[1]);
        var third = check.includes(win[2]);
        if(first && second && third)
            {
                flag = true;
                break;
            }
    }
    gameCompleted(flag);
}

for(let i = 0;i<cells.length; i++){
    cells[i].addEventListener("click", function(){
        this.textContent = currentPlayer;
        this.style.zIndex = "-1";
        this.style.userSelect = "none";
        if(currentPlayer === 'X')
            gameStatusX.push(this.classList[1]);
        else
            gameStatusO.push(this.classList[1]);
            count++;
        if(count > 4)
            gameValidate();
        changeCurrentPlayer();
    });
}

resetButton.addEventListener("click", function(){
    window.location.reload();
});