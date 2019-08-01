const personagem = document.querySelector('#personagem');
let vezesDireita = 1;
let vezesEsquerda = 1;
let vezesBaixo = 1;
let saltoDireita = 1;
let saltoParaBaixo = 1;

personagem.onclick = function() {
  saltoDireita = vezesDireita * 200;
  personagem.style.left = saltoDireita + 'px';
  vezesDireita = vezesDireita + 1;
} 

window.onkeydown = function(event){
    if(event.code == "ArrowRight") {
        saltoDireita = vezesDireita * 200;
        personagem.style.left = saltoDireita + 'px';
        vezesDireita = vezesDireita + 1;
    } else {

    if(event.code == "ArrowDown"){
    saltoParaBaixo = vezesBaixo * 200;
    personagem.style.top = saltoParaBaixo + 'px';
    vezesBaixo = vezesBaixo + 0;
     } else {
        alert ('Você perdeu!')
     }
  } 
  if (vezesDireita == 7 && vezesBaixo == 2){
      alert("Você venceu!")
  }
}