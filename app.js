const grid = document.getElementById('grid');

for (let i = 0; i <200; i++) {
    let excel = document.createElement('div');
    grid.appendChild(excel);
}
for (let i = 0; i <10; i++) {
    let excel = document.createElement('div');
    excel.classList.add('taken');
    grid.appendChild(excel);
}

let squares = Array.from(document.querySelectorAll('#grid div'));
const scoreDisplay = document.getElementById('#score');
const startBtn = document.getElementById('#start-btn');

const width = 10;

// The Tetrominoes
const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
]

const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
]

const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
]

const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
]

const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
]

const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

// get tetromino randomly
let random = Math.floor(Math.random() * theTetrominoes.length);
let random2 = Math.floor(Math.random() * theTetrominoes.length);
let currentPosition = 4;
let currentRotation = 0;
let current = theTetrominoes[random][currentRotation];

function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
    })
}

draw();

function undraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetromino')
    })
}

let interval = setInterval(moveDown, 100);

function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
}

function freeze() {
    if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('taken')
        })
        random = Math.floor(Math.random() * theTetrominoes.length);
        current = theTetrominoes[random][currentRotation];
        currentPosition = 4;
        draw();
    }
}
