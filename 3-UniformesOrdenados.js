let pedidos = gets(); //Recebe quantidade de pedidos
let estudantes = []; //Armazena informações de todos os estudantes separados por objetos

for (let i = 0; i < pedidos; i++){
    let nome = gets(); //Recebe o nome do estudante
    let uniforme = gets(); //Recebe os parametros sobre o uniforme
    let informacoes = uniforme.split(" "); //Separa os parametros em um vetor
    let cor = informacoes[0]; //Recebe o parametro 0 onde contem informações sobre a cor 
    let tamanho = informacoes[1]; //Recebe o parametro 1 onde contem informações sobre o tamanho 

    estudantes.push({ nome: nome, cor: cor, tamanho: tamanho }); //Monta o objeto com informações de cada estudante
}

//Ordena cada objeto com base em seu tamanho e cor | If ternario
estudantes.sort((a,b) => (a.cor > b.cor) ? 1 :
                       (a.cor === b.cor) ? (a.tamanho < b.tamanho) ? 1 :
                       (a.cor === b.cor) && (a.tamanho === b.tamanho) ?
                       (a.nome > b.nome) ? 1 : -1 : -1 : -1);


estudantes.map(estudante => console.log(estudante.cor, estudante.tamanho, estudante.nome));