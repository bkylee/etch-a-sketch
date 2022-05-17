const body = document.body;
const container = document.createElement('div');
body.appendChild(container);
let rows = document.querySelectorAll('div.row');
let cells = document.querySelectorAll('div.cell')
container.append(rows);
container.append(cells)

function createRow (num){
    for (i = 0; i < num ; i ++) {
        let row = document.createElement('div');
        row.className('row');
        container.appendChild('row');
    }
}

function createCell(num) {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++){
            let cell = document.createElement('div').
            cell.className('cell').addEventListener('hover', ()=> cell.style.background = "black");
           rows[j].appendChild('.cell');
        }
    }
}

function grid (userInput = 4) {
    createCell(userInput);
    createCell(userInput);
}

grid();