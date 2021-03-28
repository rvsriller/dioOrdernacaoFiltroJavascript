/*
Esse algoritmo é responsável por ler um número x de listas na entrada, 
essas listas possuem itens que devem ser comprados no supermercado, porém, alguns desses
itens podem estar repetidos. Durante o processamento, esses itens repetidos serão removidos.
Dessa maneiras, todas as listas estarão otimizadas após o processamento e os itens são ordenados
em ordem alfabética.

Há métodos utilizando funções como Split, Set e Sort para solucionar esse desafio.
*/

//Recebe quantidade de listas
let numeroDeListas = parseInt(gets()); 

/*
*  Iteração de cada lista 
*  Para cada lista, o metodo split gera um array com cada item da lista
*  O metodo Set remove cada item repetido do array
*  O metodo map ou sort ordena os elementos do array 
*/
for (let n = 0; n < numeroDeListas; n++) {
    //Recebe os produtos
    let produtos = (gets()).split(" ");

    //Remove repetidos 1a parte
    let listaProdutos = new Set(produtos); 

    //Ordena em ordem alfabética e remove símbolos ',' da lista
    let listaOrdenada = [...listaProdutos].sort().toString().replace(/,/g, ' '); //ordena a lista em ordem alfabética e remove ","
    
    //Exibe a lista na tela
    console.log(listaOrdenada);
};