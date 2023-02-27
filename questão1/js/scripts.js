//cria variável que recebe números inteiros através de um prompt
let numeroInt = prompt("digite um número");
//cria variável para completar a equação
let resultado = 1;
//começa repetição para cálculo fatorial (variável recebe numeroint, se variável maior que 1, diminui 1 do valor)
for (let i = numeroInt; i > 1; i--) {
    //linha que determina cáculo a ser feito durante a repetição
    resultado = resultado * i;
}
//retorna número fatorial e resultado do cálculo fatorial
alert( numeroInt + '! = ' + resultado);