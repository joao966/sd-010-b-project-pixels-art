const colorPalette = document.createElement('table');
colorPalette.id = 'color-palette';
document.body.appendChild(colorPalette);

const sizePalette = 4;

function createPalette() {
  for (let index = 0; index < sizePalette; index += 1) {
    const square = document.createElement('td');
    square.className = 'color';
    colorPalette.appendChild(square);
  }
}

function colorSquare() {
  const square = document.querySelectorAll('.color');
  square[0].className = 'selected';
  square[0].style.backgroundColor = 'black';
  square[1].style.backgroundColor = 'blue';
  square[2].style.backgroundColor = 'green';
  square[3].style.backgroundColor = 'red';
}

const pixelBoard = document.createElement('table');
pixelBoard.id = 'pixel-board';
document.body.appendChild(pixelBoard);

const sizeBoard = 5;

function createColorBoard() {
  for (let index1 = 0; index1 < sizeBoard; index1 += 1) {
    const boardLine = document.createElement('tr');
    for (let index2 = 0; index2 < sizeBoard; index2 += 1) {
      const lineElement = document.createElement('td');
      lineElement.className = 'pixel';
      boardLine.appendChild(lineElement);
      pixelBoard.appendChild(boardLine);
    }
  }
}

createPalette();
colorSquare();
createColorBoard();
