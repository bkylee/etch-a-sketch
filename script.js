const body = document.body;
const container = document.createElement('div');
body.appendChild(container);
let rows = document.getElementsByClassName('row');
let cells = document.getElementsByClassName('cell')

const reset = document.createElement('button');
reset.textContent = "Reset";
reset.addEventListener("click", resetGrid);
container.appendChild(reset);


function resetGrid (){
        for (i = 0; i < cells.length; i ++){
        cells[i].style.background = "white";
}
}
//let randomColour = Math.floor(Math.random()*16777215).toString(16);


//button to create a new grid based on number entered
const gridNumber = document.createElement('button');
gridNumber.addEventListener('click', newGrid());
gridNumber.textContent = "New Grid";
container.appendChild(gridNumber);

function newGrid(){
    x = prompt("Please enter a number greater than 0 to set the X and Y axis for the new grid.");
    if (isNaN(x)) {
        return newGrid(x);
    }
    else if (x < 0) {
        return newGrid(x);
    }
    grid(x);
}

//function to create one row for cells. Parameter takes in the number of rows wanted
function createRow (num){
    for (i = 0; i < num ; i ++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}


//function to create cells in each row created. Parameter takes in the number of cells per row 
function createCell(num) {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseenter', ()=> {cell.style.background = "black"});
           rows[i].appendChild(cell);
        }
    }
}


function grid (userInput = 16) {
    createRow(userInput);
    createCell(userInput);
}

grid();
