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
// console.log(valorEmDolares); // quanto que era em dòlares

// console.log(valorConvertido);// quanto que fica em reais

console.log( formatarmoeda (valorEmDolares));
console.log( formatarmoeda(valorConvertido));

function formatarmoeda(valor, local, moeda) {
    let opcoes = {
        style: "currency",
        currency: "BRL"
    };

    return valor.toLocaleString("pt-br", opcoes)
}


