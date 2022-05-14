const gridX = 4;
const body = document.body;
const grid = document.createElement('div');
const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');

function createDivRow (columns) {
    for (x = 0; x < columns ; x++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'gridBox');
        box.style.flex;
        grid.appendChild(box);
    }
}

