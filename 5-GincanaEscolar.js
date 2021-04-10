/*
    A entrada contém vários casos de teste. A primeira linha de cada caso de teste contém um inteiro N (1 ≤ N ≤ 100),
    indicando a quantidade de alunos que farão parte de cada círculo. Em seguida, as N linhas de cada caso de teste 
    conterão duas informações, o Nome e o Valor (1 ≤ Valor ≤ 500) que consta na ficha de cada aluno, 
    separados por um espaço, na ordem de entrada na formação do círculo inicial.

    OBS: O Nome de cada aluno não deverá ultrapassar 30 caracteres e contém apenas letras maiúsculas e minúsculas, 
    sem acentos, e o caractere “_”. O final da entrada é indicado pelo número zero.
*/

let quantidadeAlunos = 0;
let contador = 0;
let filas = Array();

while (true) {
 
  quantidadeAlunos = parseInt(gets());

  if (quantidadeAlunos === 0) {break};
  let fila = Array(quantidadeAlunos);
  for (let i = 0; i < quantidadeAlunos; i++) {
    fila[i] = gets().split(" ");
    };
  filas[contador] = fila;
  contador++;
};

let y = 0;
while (y < filas.length) {
  
  pos = 0;
  posimpar = 0;
  nota = filas[y][pos][1];
  
  while (true) {
    tam = filas[y].length;
    if (tam === 1) {break};
    hor = filas[y].map((i,d) => d);
    hor = hor.concat(hor.concat(hor));
    arco = nota % tam;
    pos += tam;
    
    if (nota % 2 === 0) {
      pos = hor[pos - arco];
    }
    else {
      pos += posimpar;
      pos = hor[pos + arco];
    };
    
    posimpar = -1;
    saiu = filas[y].splice(pos,1);
    nota = saiu[0][1];
  };
  y++;
};

filas.forEach(i => console.log("Vencedor(a): " + i[0][0]));