function createBoxTable(numOfItems, itemClass, parentId, numOfLines = 1) {
  const paletteBox = document.getElementById(parentId);
  const boxTable = document.createElement('table');

  paletteBox.appendChild(boxTable);
  for (let line = 1; line <= numOfLines; line += 1) {
    const boxLine = document.createElement('tr');
    boxTable.appendChild(boxLine);
    for (let item = 1; item <= numOfItems; item += 1) {
      const boxItem = document.createElement('td');
      boxLine.appendChild(boxItem);
      boxItem.classList.add(itemClass);
    }
  }
}

function addClassToPaletteBox() {
  const boxes = document.getElementsByClassName('color');
  for (let index = 0; index < boxes.length; index += 1) {
    boxes[index].classList.add(`color${index + 1}`);
    if (getComputedStyle(boxes[index]).backgroundColor === 'rgb(0, 0, 0)') {
      boxes[index].classList.add('selected');
    }
  }
}

function clickPaletteBox(event) {
  const selectedBox = document.querySelector('.selected');
  selectedBox.classList.remove('selected');
  event.target.classList.add('selected');
}

function addPaletteBoxClickEvent() {
  const boxes = document.getElementsByClassName('color');
  for (let index = 0; index < boxes.length; index += 1) {
    boxes[index].addEventListener('click', clickPaletteBox);
  }
}

function changeBgColor(event, color) {
  const element = event;
  element.target.style.backgroundColor = color;
}

function addPixelClickEvent(eventFunction) {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', eventFunction);
  }
}

const colorPalette = 'color-palette';

createBoxTable(4, 'color', colorPalette);

createBoxTable(5, 'pixel', 'pixel-board', 5);

window.onload = () => {
  addClassToPaletteBox();
  addPaletteBoxClickEvent();
  addPixelClickEvent((event) => {
    const selectedColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
    changeBgColor(event, selectedColor);
  });
};
