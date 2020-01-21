const usuario = {
	nome: 'Elias',
	idade: 25,
	empresa: 'dot'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);	

const arr = [1, 2, 3, 4];

const [ a , b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(a, b, c, d){
	return a + b + c + d;
}

console.log(soma(1, 3, 4, 5));	

function soma2(a, b, ...params){
	return params.reduce((total, next) => total + next);
}

console.log(soma2(1, 3, 4, 5, 6, 7, 8));	


//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3)

const usuario1 = {
	nome: 'Jules',
	idade: 26,
	empresa: Resistance,
};

const usuario2 = { ...usuario1, nome: 'Frank Frink'};
console.log(usuario2)