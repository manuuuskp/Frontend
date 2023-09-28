(function tictactoe() {
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WIN_CONDITION = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.board');

cellElements.forEach(cell => cell.addEventListener('click', (e) => {
    const target = e.target;
    proceedGame(target);
    //selectCell
    //checkWin
    //checkDraw
    //changeTurn
}, {once: 'true'}));
let currentCircle = false;
let currentCellClass = currentCircle ? CIRCLE_CLASS : X_CLASS;
board.classList.add(currentCellClass);

function setCurrentClass() {
    board.classList.remove(currentCellClass);
    currentCellClass = currentCircle ? CIRCLE_CLASS : X_CLASS;
    board.classList.add(currentCellClass);
}

function proceedGame(target) {
    selectCell(target);
    if(checkWin()) {
        console.log(`${currentCellClass} wins`);
        return;
    }
    if(checkDraw()) {
        console.log('Game Draw');
        return;
    }
    setCurrentClass();
}

function selectCell(target) {
    target.classList.add(currentCellClass);
    currentCircle = !currentCircle;
}
function checkWin() {
    return WIN_CONDITION.some(winArr => {
        return winArr.every(winCell => {
            return cellElements[winCell].classList.contains(currentCellClass);
        })
    });
    console.log(checkWinCond);
}

function checkDraw() {
    return [...cellElements].every(cell => cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS));
}
})()
