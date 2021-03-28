/*
Esse algoritmo é responsável por ler um número x de valores positivos como entrada, 
devendo desconsiderar os valores nulos e negativos. Após o processamento, os valores pares e impares são ordenados.

Pares em ordem crescente
Impares em ordem decrescente

Há métodos utilizando funções como filter e Sort para solucionar esse desafio.

*/


/**
 * Solução 1 - Utilizando a função Filter e Sort
 * totalItens armazena a quantidade de itens a serem verificados
 * itens armazena todos os valores recebidos em vetor
*/
let totalItens = gets();
let numbers = [];

//Vetor com o tamanho total de itens. Cada item é guardado na variavel itens
for (let i = 0; i < totalItens; i++) {
  numbers.push(parseInt(gets()));
} 

//Filtrar todos os itens pares
let par = numbers.filter((item) => { 
    if( item % 2 == 0) return item;
});

//Filtrar todos os itens impares
let impar = numbers.filter((item) => { 
    if( item % 2 != 0) return item;
});

//Ordenar os números pares em ordem crescente
par.sort((a,b) => a - b);

//Ordenar os numeros impares em ordem descrescente
impar.sort((a,b) => b - a);

let itens = par.concat(impar);

for ( item of itens){
  console.log(item);
}



/**
 * Solução 2 - Sem utilizar a função filter
 */

//Vetor com o tamanho total de itens. Cada item é guardado na variavel itens
for (let i = 0; i < totalItens; i++) {
  let item = parseInt(gets());
  
  //Verifica se o item é par
  if( item % 2 === 0){
    par.push(item);
  } else { //O item é impar
    impar.push(item);
  }
  
} 
//Ordena em ordem crescente
par.sort((a, b) => {
  return a - b;
});

//Ordena em ordem decrescente
impar.sort((a, b) => {
  return b - a;
});

//Adiciona todos os itens em uma variável
numbers = par.concat(impar);

//Exibe item por item da lista numbers, corretamente ordenados
for ( item of numbers){
  console.log(item);
}