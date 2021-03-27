/*
Esse algoritmo é responsável por ler um número x de valores positivos como entrada, 
devendo desconsiderar os valores nulos e negativos. Após o processamento, os valores pares e impares são ordenados.

Pares em ordem crescente
Impares em ordem decrescente

As funções filter e Sort são utilizadas para solucionar esse desafio.

*/


/**
 * totalItens armazena a quantidade de itens a serem verificados
 * itens armazena todos os valores recebidos em vetor
*/
let totalItens = gets();
let itens = [];

//Vetor com o tamanho total de itens. Cada item é guardado na variavel itens
for (let i = 0; i < totalItens; i++) {
  itens.push(parseInt(gets()));
} 

//Filtrar todos os itens pares
let par = itens.filter((item) => { 
    if( item % 2 == 0) return item;
});

//Filtrar todos os itens impares
let impar = itens.filter((item) => { 
    if( item % 2 != 0) return item;
});

//Ordenar os números pares em ordem crescente
par.sort((a,b) => a - b).forEach(par => console.log(par));

//Ordenar os numeros impares em ordem descrescente
impar.sort((a,b) => b - a).forEach(impar => console.log(impar));
