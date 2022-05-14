//set foundation variables and constants 
const body = document.body;
//container to hold grid in body
const container = document.createElement('div');
let rows = document.getElementsByClassName('rows');
let cells = document.getElementsByClassName('cells');
body.appendChild(grid);


//function to create rows based on number of cells set in parameter
function createRow (cells) {
    for (x = 0; x < cells ; x++) {
        const row = document.createElement('div');
        container.appendChild(row).className = 'rows';
    }
}

function createColumns (numberCells) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < numberCells; j++) {
            let cell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
    }
}
}