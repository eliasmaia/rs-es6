/* 1º Exercicio */
class Usuario {
	constructor(email, senha){
		this.email = email;
		this.senha = senha;
	}

	isAdmin(){
		if(this.admin) {
			return true;
		} else {
			return false;
		}
	}
}

class Admin extends Usuario {
	constructor(email, senha){
		super(email, senha);
		this.admin = true;
	}

}

const User1 = new Usuario('emailteste@teste.com', 'senha123');
const Admin1 = new Admin('admin@teste.com', 'admin123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

/* 2º Exercicio */
const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
	{ nome: 'Juliete', idade: 27, empresa: 'Rocketseat'},
];

/* 2.1 Usando map para retornar apenas a idade */
const idades = usuarios.map(function (item) {
	return item.idade;
});
console.log(idades)

/* 2.2 Usando filter para retornar apenas pessoas acima de 18 anos e que trabalham na Rocketseat*/
const filter = usuarios.filter(function(item){
	return item.idade >= 18 && item.empresa === 'Rocketseat';
});
console.log(filter)

/* 2.3 Usando find para encontrar um usuário que trabalhe no Google */
const google = usuarios.find(function(item){
	return item.empresa === 'Google';
});
console.log(google)

/* 2.4 Unindo operações */
const dobro = usuarios.map(function(item){
	item.idade = item.idade *2; 
	return item;
});

const filter50 = dobro.filter(function(item){
	return item.idade < 50;
})

console.log(dobro)
console.log(filter50)

/* 3o exercicio - Transformar função em arrow function */

const arr = [1, 2, 3, 4, 5];

arr.map(function(item){
	return item + 10;
});

//depois
arr.map(item => {
	return item * 2;
});

/* 3.2 Transformando função normal em arrow function usando const */
const usuario = { nome: 'Diego', idade: 26 };

function mostraIdade(usuario){
	return usuario.idade;
}

mostraIdade(usuario);

//depois
const mostraIdade1 = (usuario) => ({ idade });

console.log(mostraIdade1(usuario))

/* 3.3 Arrow functions e valores padrão*/

const nome = "Elias"
const idade = 25

function mostraUsuario2(nome = 'Diego', idade = 18){
	return { nome, idade };
}

const showUser = (nome = 'Diego', idade = 18) => ({ nome, idade});

console.log(mostraUsuario2(nome, idade))
console.log(mostraUsuario2(nome))	 
console.log(showUser(nome, idade))
console.log(showUser(nome))	

/* 4o Exercicio - Desestruturação*/

const empresa = {
	nome1: 'Rocketseat',
	endereco: {
		cidade: 'Rio do Sul',
		estado: 'SC',
	}
};

const { nome1, endereco: {cidade, estado} } = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

/* 4.2 desestruturação em parâmetros */

function mostraInfo(usuario){
	return `${usuario.nome} tem ${usuario.idade} anos.`;
}

function mostraInfo2({ nome, idade }){
	return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo2(usuario));

/* 5º Exercicio */
const arr2 = [1, 2, 3, 4, 5, 6]

/* rest com array */
const [x, ...y] = arr2;
console.log(x);
console.log(y);

/* somando todos os parâmetros*/
function soma2(...params){
	return params.reduce((total, next) => total + next);
}

console.log(soma2(1, 2, 3, 4, 5, 6));

const user = {
 nome: 'Diogo',
 idade: 24,
 endereco: {
 cidade: 'Rio do Sul',
 uf: 'SC',
 pais: 'Brasil',
 }
};

/* copia-se todas as propriedades de um objeto, mudando somente aquela que se deseja*/
const usuario2 = {...user, nome: 'Gabriel'};
console.log(usuario2);
/* alterando propriedades aninhadas de um objeto */
const usuario3 = { ...user, endereco: { ...user.endereco, cidade: 'Lontras'}};
console.log(usuario3);


/* Exercicio 6 - template literals */
const usuar = 'Elias';
const idae = 25;

console.log('o usuario ' + usuario + ' possui ' + idade + ' anos');
console.log(`o usuario ${usuar} possui ${idae} anos.`);

/* Exercicio 7 - Object Short Syntax */
const name = "Joshua";
const age = 23;

const usr = {
	name: name,
	age: age,
	cidade: 'Teresina',
};

//depois
const usr1 = {
	name,
	age,
	cidade: 'Teresina',
};

console.log(usr1);