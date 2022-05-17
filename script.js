const body = document.body;
const container = document.createElement('div');
body.appendChild(container);
let rows = document.querySelectorAll('.row');
let cells = document.querySelectorAll('.cell')
container.append(rows);
container.append(cells)

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
            // cell.classList.add('cell');
            // cell.addEventListener('hover', ()=> cell.style.background = "black");
           rows[i].appendChild(cell);
        }
    }
}

function grid (userInput = 4) {
    createRow(userInput);
    createCell(userInput);
}

grid();