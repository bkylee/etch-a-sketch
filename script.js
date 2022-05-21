const body = document.body;
const container = document.createElement('div');
body.appendChild(container);
let rows = document.getElementsByClassName('row');
let cells = document.getElementsByClassName('cell')

const reset = document.createElement('button');
reset.textContent = "Reset";
reset.addEventListener("click", ()=> {
    for (i = 0; i < cells.length; i ++){
        cells[i].style.background = "white";
    }
});
container.appendChild(reset);

const rainbow = ["red", "orange","yellow", "green", "blue", "indigo", "violet"] ;
function colourSelect(){
    return Math.floor(Math.random() *7);
}

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
            //cell.addEventListener('mouseout', ()=> {cell.style.background = "white"});
           rows[i].appendChild(cell);
        }
    }
}

button = document.createElement('button');


function grid (userInput = 16) {
    createRow(userInput);
    createCell(userInput);
}

grid();
