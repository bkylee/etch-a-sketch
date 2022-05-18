const body = document.body;
const container = document.createElement('div');
body.appendChild(container);
let rows = document.getElementsByClassName('row');
let cells = document.getElementsByClassName('cell')

function createRow (num){
    for (i = 0; i < num ; i ++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    }
}

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
