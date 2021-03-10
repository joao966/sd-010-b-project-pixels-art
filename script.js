function criarCores(){
  let pai = document.getElementById('color-palette')
 
  for(i = 0; i < 4; i += 1 ){
    let filho = document.createElement('li')
    filho.className = 'color'
    pai.appendChild(filho)
  }
  let cor = document.getElementsByClassName('color')
  
  let black = cor[0];
  let green = cor[1];
  let red = cor[2];
  let blue = cor[3];

  

  black.style.backgroundColor = 'black';
  green.style.backgroundColor = 'green';
  red.style.backgroundColor = 'red';
  blue.style.backgroundColor = 'blue';
} criarCores()


function criarQuadro(){
  let pai = document.getElementById('pixel-board')
 
  for(i = 0; i < 6; i += 1) {
    let filho = document.createElement('div')
    filho.className = 'pixel-linha'  
    pai.appendChild(filho);

    for(j = 0; j < 6; j += 1) {
    let filho2 = document.createElement('div')
    filho2.className = 'pixel'
    filho.appendChild(filho2); 
    }   
  } 
} criarQuadro()

  