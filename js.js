let canvas = document.querySelector('.canvas');
makeSquares(16); //default number of squares on the canvas


// Starting below, the code is presented in chronological order from the ones that were typed first.

// put the squares into the canvas
function makeSquares (numSquares) { 
    
    canvas.innerHTML="";
    for (let i = 0; i < numSquares * numSquares; i++) { 
        let canvasSquares = document.createElement('div');
        canvasSquares.style.cssText = `
            border: lightgrey solid 1px;
            height: ${canvas.clientHeight/numSquares}px;
            aspect-ratio: 1/1;
            box-sizing: border-box;
            background-color:white;
            `;
        canvas.appendChild(canvasSquares);
    }    
};


// generate a new canvas but putting new squares into it 
let button = document.querySelector('.inputSection > button');
let input = document.querySelector('.inputSection > input')

button.addEventListener('click', () => {
    let inputValue = input.value;
    
    if (inputValue > 100) {
        alert('To prevent freezing, the maximum we have set is 100x100')
    } else if (inputValue < 1) {
        alert('Please enter a number between 1 to 100')
    } else {
        makeSquares(inputValue); // typeof inputValue at this point is still a string, but it works.
        input.value = "";
        input.focus();
        drawing();
    }
})



drawing(); // call the drawing function for the default state

function drawing() { // the drawing function colors the existing squares when there is a mousedown and mouseover (must be done in order, and then listens for mouseup to stop drawing)
    
    let appendedSquares = document.querySelectorAll('.canvas > div');
    let isDrawing = false;
    appendedSquares.forEach(square => {
        square.addEventListener('mousedown', () => {
                square.style.backgroundColor = getColor();
                isDrawing = true;
                console.log(isDrawing, "mousedown");
            });

        square.addEventListener('mouseover', () => {
            if (isDrawing) {
                square.style.backgroundColor =  getColor();
                console.log(isDrawing, "mouseover")
            }
        })
            
        square.addEventListener('mouseup', () => {
            isDrawing = false;
            console.log(isDrawing,'mouseup');
        })        
    })
}


// set the color selector 
let currentColorMode = 'black'

function getColor () {
    if (currentColorMode === 'random') {
        return randomColor();
    } else return 'black'
}

let randomColors = document.querySelector(".randomColors");
randomColors.addEventListener('click', () => {currentColorMode = 'random'});

let defaultBlack = document.querySelector(".defaultBlack");
defaultBlack.addEventListener('click', () => {currentColorMode = 'black'});


// get a random color
function randomNumber(topNumber) {
    return Math.floor(Math.random()*topNumber+1)
}
function randomColor() {
    return `RGB(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;

}