const gridX = 4;
const body = document.body;
const grid = document.createElement('div');
body.appendChild(grid);

function createRow (columns) {
    for (x = 0; x < columns ; x++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'gridBox');
        box.style.flex;
        grid.appendChild(box);
    }
}

function createGrid (rows, columns) {
    for (x = 0; x < rows ; x ++) {
        createRow(columns);
    }
}

createGrid(4,4);


