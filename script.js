let gridContainer = document.querySelector('#gridContainer');
let btnResize = document.querySelector('.resize');
let btnChangeColor = document.querySelector('.changeColor');
let btnToBlack = document.querySelector('.blackColor');
let gridSquare; 
let allGridSquares;
let number = 16*16;
let userNumber;
let size;

function generateGrid () {
    for (let i =1; i<=number; i++){
        gridSquare = document.createElement('div');
        gridSquare.classList.add('cell');
        gridContainer.appendChild(gridSquare);
    }
}

function setBlackColor () {
    this.style.backgroundColor = 'black';
}

function setColorTo () {
    this.style.backgroundColor = getRandomColor();
}

function mouseOverEvent () {
    allGridSquares = document.querySelectorAll('.cell');
    for (let i = 0; i<allGridSquares.length; i++) {
        allGridSquares[i].addEventListener('mouseover', setBlackColor);
    }
}

function clearGrid () {
    while (gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function setFlexBasis () {
    size = 608/userNumber + 'px';
    for (let i = 0; i<allGridSquares.length; i++) {
        allGridSquares[i].style.flexBasis = size;
    }
}

function resizeGrid () {
    for (let i = 0; i < allGridSquares.length; i++) {
        allGridSquares[i].style.backgroundColor = "white";
    }
    
    userNumber = +prompt("What size do you want to apply?", '16');

    if (userNumber==0) {
        userNumber = 8;
    } else if (userNumber>100) {
        userNumber= 100;
    } else if (userNumber<8){
        userNumber = 8;
    }
    number = userNumber*userNumber;

    clearGrid();
    generateGrid();
    mouseOverEvent();
    setFlexBasis();
}

function getRandomColor () {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let clr = `rgb(${r}, ${g}, ${b})`;

    return clr;
}

function setColor () {
    allGridSquares=document.querySelectorAll('.cell');

    for (let i = 0; i<allGridSquares.length; i++){
        allGridSquares[i].removeEventListener('mouseover', setBlackColor);
        allGridSquares[i].addEventListener('mouseover', setColorTo);
    }
}

function backToBlack () {
    allGridSquares=document.querySelectorAll('.cell');

    for (let i = 0; i<allGridSquares.length; i++){
        allGridSquares[i].removeEventListener('mouseover', setColorTo);
        allGridSquares[i].addEventListener('mouseover', setBlackColor);
    }

}



generateGrid();
mouseOverEvent();


btnResize.addEventListener('click', resizeGrid);
btnChangeColor.addEventListener('click', setColor);
btnToBlack.addEventListener('click', backToBlack);