function createColorPalette() {
  const pallet = document.createElement('ul');
  pallet.id = 'color-palette';
  document.body.appendChild(pallet);
  const colors = ['black', 'blue', 'red', 'green'];
  for (let i = 0; i < colors.length; i += 1) {
    const newColor = document.createElement('li');
    newColor.className = 'color';
    newColor.style.backgroundColor = colors[i];
    pallet.appendChild(newColor);
  }
}
function blackSquareSelected() {
  const blackSquare = document.querySelector('.color');
  blackSquare.className += ' selected';
}

function createClearBtn() {
  const clearBtn = document.createElement('button');
  clearBtn.id = 'clear-board';
  clearBtn.innerText = 'Limpar';
  const allPixels = document.getElementsByClassName('pixel');
  document.body.appendChild(clearBtn);
  clearBtn.addEventListener('click', () => {
    for (let i = 0; i < allPixels.length; i += 1) {
      allPixels[i].style.backgroundColor = 'white';
    }
  });
}

function createPixelsBoard() {
  const board = document.createElement('ul');
  board.id = 'pixel-board';
  document.body.appendChild(board);
  for (let i = 0; i < 5; i += 1) {
    const tableRow = document.createElement('div');
    tableRow.className = 'board-tr';
    board.appendChild(tableRow);
  }
  const tableRows = document.getElementsByClassName('board-tr');
  for (let i2 = 0; i2 < tableRows.length; i2 += 1) {
    for (let i3 = 0; i3 < 5; i3 += 1) {
      const pixel = document.createElement('li');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      tableRows[i2].appendChild(pixel);
    }
  }
}
function applySelectedColor() {
  const allPixels = document.getElementsByClassName('pixel');
  console.log(allPixels);
  console.log(allPixels.length);
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].addEventListener('click', (evt) => {
      const { target } = evt;
      target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
}

function selectColor() {
  const allColors = document.getElementsByClassName('color');
  for (let i = 0; i < allColors.length; i += 1) {
    allColors[i].addEventListener('click', (evt) => {
      for (let i2 = 0; i2 < allColors.length; i2 += 1) {
        allColors[i2].className = 'color';
      }
      const { target } = evt;
      target.className += ' selected';
    });
  }
}
function createInput() {
  const input = document.createElement('input');
  input.id = 'board-size';
  input.type = 'number';
  input.min = '1';
  input.max = '50';
  document.body.appendChild(input);
}

function newBoard() {
  const board = document.getElementById('pixel-board');
  const input = document.getElementById('board-size');
  board.innerHTML = '';
  for (let i = 0; i < input.value; i += 1) {
    const tableRow = document.createElement('div');
    tableRow.className = 'board-tr';
    board.appendChild(tableRow);
  }
  const tableRows = document.getElementsByClassName('board-tr');
  for (let i2 = 0; i2 < tableRows.length; i2 += 1) {
    for (let i3 = 0; i3 < input.value; i3 += 1) {
      const pixel = document.createElement('li');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      tableRows[i2].appendChild(pixel);
    }
  }
  applySelectedColor();
}
function createInputBtn() {
  const inputBtn = document.createElement('button');
  inputBtn.id = 'generate-board';
  inputBtn.innerText = 'VQV';
  document.body.appendChild(inputBtn);
  inputBtn.addEventListener('click', newBoard);
}
createColorPalette();
createClearBtn();
selectColor();
createInput();
createInputBtn();

window.onload = function onLoad() {
  blackSquareSelected();
  createPixelsBoard();
  applySelectedColor();
};
