"use strict";

// Dados de entrada(exemplos de valores)
let valorDaCotacaoDoDia = 5.03;
let valorEmDolares = 2500;


let valorConvertido = converteMoeda(valorDaCotacaoDoDia, valorEmDolares);

// variavel que recebera o resultado processado pela funçâo DEPOIS QUE
// a funçâo terminar sua execuçâo 
function converteMoeda(valor, cotacao){
    return valor * cotacao;
}

// Saidas apos o processamento
console.log(valorEmDolares);
console.log(valorConvertido);