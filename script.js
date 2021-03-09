const body = document.body;

const paletteBox = document.createElement('div');

paletteBox.id = '#color-palette';

body.appendChild(paletteBox);

/*Cria as cores dinâmicamente */
let colors = ['black'];

for (let nColor = 1; nColor < 5; nColor += 1){
    let colorInt = Math.random()*4095;

    for (let n = 0; n < nColor; n += 1){
        if (colorInt == parseInt(colors[n])){
           while (colorInt === parseInt(colors[n])){
                colorInt = Math.random()*4095;
           }
        }
    }
    
    if (colorInt == 4095) colorInt = colorInt - 1;

    colorInt = Math.floor(colorInt)
    let colorHex = Number(colorInt).toString(16)
    if (colorHex.length < 3) colorHex += '0';
    colorHex = '#'+colorHex;

    colors.push(colorHex);
}
console.log(colors);
/*--------------------------------------------------------- */

for (let color = 0; color < 5; color += 1) {
    let colorElement = document.createElement('div');
    colorElement.className = 'color';
    colorElement.style.backgroundColor = colors[color];
    console.log(colors[color]);
    paletteBox.appendChild(colorElement);
}