/* Esse algoritmo é responsável por contar quantas senhas de uma fila de banco precisam ser ordenadas.

    A ordem de atendimento será decrescente: aqueles que receberam número maior deverão ser atendidos primeiro. 

    A primeira linha contém um inteiro N, indicando o número de casos de teste a seguir.
    Cada caso de teste inicia com um inteiro M indicando o número de clientes

    dada a ordem de chegada dos clientes reordene a fila de acordo com o número recebido via sms,
    e diga quantos clientes não precisaram trocar de lugar nessa reordenação.

*/


//Total de casos a serem processados para ordenar filas de banco com senhas do maior pelo menor
let totalDeCasos = parseInt(gets()); //Recebe a quantidade de casos a serem processados

//Para cada iteração desse laço, um caso será verificado
for (let N = 1; N <= totalDeCasos; N++) {

    //Processamento 1
    let posicionado = 0; //Contador de senhas de clientes que não foram ordenadas
    let totalDeClientes = parseInt(gets()); //Total de clientes na fila

    /*Leitura de cada senha de clientes, isto é, as senhas estão em uma linha separadas por espaço (100 50 20)
        A função split, separada cada senha por espaço
        A função map insere cada senha/cliente em no array
    */
    let senhas = (gets()).split(" ").map((cliente) => cliente); 
    

    /* Processamento 2
        Ordenação das senhas em ordem númerica (de maior para menor)
    */
    let senhasOrdenadas = senhas.
        map((cliente) => cliente).
        //Ordenando em ordem descrescente e númerica
        sort((a, b) => {  //Função auxiliar para o array poder serja ordenado numericamente.
            return (b - a)
        });


    //Processamento 3 - Contador de senhas não ordenadas
    let P = 0; //contador de senhas não ordenadas
    //Comparando valores para pegar os não alterados
    while( P < totalDeClientes){
        if ( senhas[P] === senhasOrdenadas[P]) { //Se senha igual a senhaOrdenada, tal valor não foi ordenado
            posicionado++;
        };
        P++;
    }

    //Saída dos não alterados
    console.log(posicionado);
};



/*Comparando valores para pegar os não alterados
for (let j = 0; j < totalDeClientes; j++) {

};*/