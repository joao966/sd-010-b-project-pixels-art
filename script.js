let paletaBlack = window.document.getElementsByClassName('color')[0];
paletaBlack.style.background = 'black';
paletaBlack.className += " selected";
let paletaRed = window.document.getElementsByClassName('color')[1];
paletaRed.style.background = 'red';
let paletaBlue = window.document.getElementsByClassName('color')[2];
paletaBlue.style.background = 'blue';
let paletaGreen = window.document.getElementsByClassName('color')[3];
paletaGreen.style.background = 'green';

let pixelBoard = window.document.getElementById('pixel-board');
for (lines = 0; lines < 5; lines += 1) {
    let tableRow = window.document.createElement('tr');
    pixelBoard.appendChild(tableRow)
    for (columns = 0; columns < 5; columns += 1) {
        let tableCell = window.document.createElement('th')
        tableCell.style.background = "white";
        tableCell.style.width = "40px";
        tableCell.style.height = "40px";
        tableCell.className = "pixel"
        tableCell.style.border = "solid black 1px"
        tableRow.appendChild(tableCell)
    }
}
