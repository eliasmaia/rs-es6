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