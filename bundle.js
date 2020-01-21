"use strict";

var usuario = {
  nome: 'Elias',
  idade: 25,
  endereco: {
    cidade: 'Teresina',
    estado: 'Piaui'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
