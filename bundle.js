"use strict";

var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Cleiton';
console.log(usuario);

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

console.log(teste(10));
