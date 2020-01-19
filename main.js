const arr = [1, 2, 3, 4, 5, 6]

/* Antes 
const newArr = arr.map(function(item) {
	return item * 2;
});

Só um parâmetro, pode fazer isso:

const newArr = arr.map(item => {
	return item * 2;
});

*/

/* Quando a função não tem muito processamento, e só retorna algo, pode-se fazer isso: */
const newArr = arr.map(item => item * 2);

console.log(newArr)

/* Isso é bom em relação à verbosidade, quando se usa função anônima */

/* Criando funções com arrow function e constantes */
const teste = () => [1, 2, 3];
const teste1 = () => 'teste';
const teste2 = () => { nome: 'Diego'}; //não vai funcionar usar chaves para retornar objeto

/* Deveria ser assim: 

const teste = () => {
	return { nome: 'Diego'}
}; */

/* Para retornar o objeto, tem que colocar o parentese em volta da chave */
const teste3 = () => ({ nome: 'Diego' });

console.log(teste());
console.log(teste3());
