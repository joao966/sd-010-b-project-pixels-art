let palet = document.getElementsByClassName('color');
for (let index = 0; index < palet.length; index +=1) {
  palet[index].addEventListener('click', function(event) {
    document.getElementsByClassName('selected')[0].classList.remove('selected');
    event.target.classList.add('selected');
  })
}
let quadro = document.getElementsByClassName('pixel');
for (let quadroIndex = 0; quadroIndex < quadro.length; quadroIndex += 1){
  quadro[quadroIndex].addEventListener('click', function(event){
    if (document.getElementsByClassName('color')[0].classList.contains('selected')) {
      event.target.style.background = 'black';
    } if (document.getElementsByClassName('color')[1].classList.contains('selected')) {
      event.target.style.background = 'red';
    } if (document.getElementsByClassName('color')[2].classList.contains('selected')) {
      event.target.style.background = 'blue';
    } if (document.getElementsByClassName('color')[3].classList.contains('selected')) {
      event.target.style.background = 'green';
    }
  })
}



// let quadradinhos = document.getElementsByClassName('pixels')[0];
// quadradinhos.addEventListener('click', function () {

//   let pixels = getElementsByClassName('pixel')[index];
//   for (let index = 0; index <= pixels.length; index += 1) {

//     if (document.getElementsByClassName('preto')[0].classList.contains('selected')){
//       document.getElementsByClassName('pixels')[0].classList.remove('cor');
//       document.getElementsByClassName('pixels')[0].classList.add('preto')
//   }
//   if (document.getElementsByClassName('vermelho')[0].classList.contains('selected')) {
//     event.target.classList.add(' vermelho');
//   }
//   if (document.getElementsByClassName('azul')[0].classList.contains('selected')) {
//     event.target.classList.add(' azul');
//   }
//   if (document.getElementsByClassName('verde')[0].classList.contains('selected')) {
//     event.target.classList.add(' verde');
//   }
// }
// })


//   let corButon = document.querySelector('.preto');

//   let button = document.getElementById('black');
//   let button2 = document.getElementById('red');
//   let button3 = document.getElementById('blue');
//   let button4 = document.getElementById('green');

//   button.addEventListener('click', function () {
//     if (corButon = document.querySelector('.preto')) {
//       corButon = document.querySelector('.cor');
//     } else {
//       corButon = document.querySelector('.preto');
//     }

//   })
//   button2.addEventListener('click', function () {
//     if (corButon = document.querySelector('.vermelho')) {
//       corButon = document.querySelector('.cor');
//     } else {
//       corButon = document.querySelector('.vermelho');
//     }
//   })
//   button3.addEventListener('click', function () {
//     if (corButon = document.querySelector('.azul')) {
//       corButon = document.querySelector('.cor');
//     } else {
//       corButon = document.querySelector('.azul');
//     }
//   })

//   button4.addEventListener('click', function () {
//     if (corButon = document.querySelector('verde')) {
//       corButon = document.querySelector('cor');
//     } else {
//       corButon = document.querySelector('verde');
//     }
//   })
// }
//   button.addEventListener('click', function () {
//     let corButon = document.querySelector('.selected');



    // if (document.getElementsByClassName('pixel')[0].classList.contains('cor')) {
    //   document.getElementsByClassName('cor')[0].classList.add('preto');
    //   document.getElementsByClassName('preto')[0].classList.remove('cor');
//     } else if (document.getElementsByClassName('pixel')[0].classList.contains('red')) {
//       document.getElementsByClassName('red')[0].classList.add('preto');
//       document.getElementsByClassName('preto')[0].classList.remove('red');
//     } else if (document.getElementsByClassName('pixel')[0].classList.contains('azul')) {
//       document.getElementsByClassName('azul')[0].classList.add('preto');
//       document.getElementsByClassName('preto')[0].classList.remove('azul');
//     } else if (document.getElementsByClassName('pixel')[0].classList.contains('green')) {
//       document.getElementsByClassName('green')[0].classList.add('preto');
//       document.getElementsByClassName('preto')[0].classList.remove('green');
//     } else {
//       document.getElementsByClassName('preto')[0].classList.add('cor');
//       document.getElementsByClassName('cor')[0].classList.remove('preto');
//     }

//   })
