const usuario = {
	nome: 'Elias',
	idade: 25,
	endereco: {
		cidade: 'Teresina',
		estado: 'Piaui',
	},
};

const { nome, idade, endereco: { cidade} } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }){
	console.log(nome, idade);
}

mostraNome(usuario);