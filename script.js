//set foundation variables and constants 
const body = document.body;
//container to hold grid in body
const container = document.createElement('div');
let rows = document.getElementsByClassName('rows');
let cells = document.getElementsByClassName('cell');
body.appendChild(container);

//function to create rows based on number of numberRows set in parameter
function createRow (numberRows) {
    for (x = 0; x < numberRows ; x++) {
        const row = document.createElement('div');
        container.appendChild(row).className = 'rows';
    }
}

function createColumns (numberCells) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < numberCells; j++) {
            let cell = document.createElement("div");
            rows[j].appendChild(cell).className = "cell";
            cell.addEventListener('hover', ()=>cell.background = "blue");
    }
}
}

function grid (userInput = 4) {
createRow(userInput);
createColumns(userInput);
}

grid();
