/* PSEUDOCODE

function makeSquares(x)
    loop: creates 1 square x number of times 
        square properties
            height = canvas.length/x
            width = height
            background-color:white
        append the square into the canvas       

makeSquares(16);

addeventlistener for button "click":
    take an input on the size of the grid: (x*x)
    makesSquares(x);
    append the squares into the canvas

forEach square:
    addeventlistener "click"
        square.background-color: black    


function eraser 
    square.background-color:white

function clear
    select all squares
        background.color:white

addevent listener click for eraser button

addevent listener click for clear button

*/

let canvas = document.querySelector(".canvas");



function makeSquares(numSquares) {
    if (numSquares > 100) {
        alert ("To prevent crashes, we have set a limit to 100 x 100 squares and will thus not process any larger amount")
    }
    for (let i = 0; i < numSquares * numSquares; i++) {
        let canvasSquares = document.createElement("div");
        canvasSquares.style.cssText = `            
            border: black solid 1px;
            height: ${canvas.clientHeight/numSquares}px; 
            aspect-ratio: 1/1;
            box-sizing:border-box;
            background-color: white;`;
        canvas.appendChild(canvasSquares);
    }
}

makeSquares(2);



