window.onload

let colorPallete = document.getElementById('color-palette');
let divPallete = document.createElement('div')

for (let divs = 0; divs < 4; divs += 1) {
  divPallete = document.createElement('div')
  divPallete.className = 'color';
  colorPallete.appendChild(divPallete)
}

let boardSquares = [];
for (let i = 0; i < 5; i += 1) {
  boardSquares[i] = i;
}

let bigSquare = document.getElementById('pixel-board');
let createLines = document.createElement('tr');
let createCol = document.createElement('td');

for (let j = 0; j < boardSquares.length; j += 1) {
  createLines = document.createElement('tr');
  createLines.className = 'table-lines';
  bigSquare.appendChild(createLines);
  for (let k = 0; k < boardSquares.length; k += 1) {
  let lineSquare = document.querySelectorAll('.table-lines');
  lineSquare = document.querySelectorAll('.table-lines');
  createCol = document.createElement('td');
  createCol.className = 'pixel';
  lineSquare[j].appendChild(createCol);
  }
}




