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
    const newCells = document.getElementsByClassName('cell');
        for (i = 0; i < newCells.length; i ++){
        newCells[i].style.background = "white";
}
}


//button to create a new grid based on number entered
const gridNumber = document.createElement('button');
gridNumber.addEventListener('click', newGrid);
gridNumber.textContent = "New Grid";
container.appendChild(gridNumber);

function newGrid(){
    x = prompt("Please enter a number greater than 0 to set the X and Y axis for the new grid.");

    //get all elements with "cell" class and convert nodelist to an Array to iterate over and remove from DOM 
    cells = Array.from(document.getElementsByClassName('cell'));
    cells.forEach(element => {
        element.remove();
    });
    //check if input is a number and is greater than 0
    //return new grid based on entered number
    if (x < 0 || isNaN(x)) {
        return newGrid();
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

//default grid is 16x16
function grid (userInput = 16) {
    createRow(userInput);
    createCell(userInput);
}

grid();
