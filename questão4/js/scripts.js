// cria variável para valor A que recebe valor do prompt
let numberA = prompt("digite um numero inteiro");
// cria variável para valor B que recebe valor do prompt
let numberB = prompt("digite outro numero inteiro");

// valor A e valor B precisam de transformação, pois o sinal "+" quando usado entre valores do tipo string, concatena os dois
// transforma valor A de string para número 
numberA = +numberA;
// transforma valor B de string para número
numberB = +numberB; 

// se valor A for igual ao valor B
if(numberA == numberB){
    // cria variável que recebe a soma dos valores (a variável recebe valor A + valor B)
    let igualC = numberA + numberB;
    // retorna escrito na tela o resultado da soma a partir da condição
    document.write(igualC);
    // se valor A não for igual ao valor B
} else {
    // cria variável que recebe multiplicação dos valores (a variável recebe valor A x valor B)
    let multiploC = numberA * numberB;
    // retorna escrito na tela o resultado da multiplicação dos valores
    document.write(multiploC);
}