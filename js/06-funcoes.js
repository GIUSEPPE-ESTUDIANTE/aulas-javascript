"use strict"


/* sobre funçôes 

Funçôes sâo blocos de codigo que
podem ser executados e reaproveitados
em praticamnete qualquer lugar de 
uma aplicaçao/site.

Usar funçoes tambem e benefico do 
ponto de vista de organizaçao de codigo

O JS ja possui centenas de funçoes prontas.
Exemplos:
log()
alert()
tofixed(2)
*/

// como escrever funçoes no JS?

// Forma 1: funçao anonima
const exemplo1 = function () {
    console.log("Funçao anonima");
};

// Forma 2: funçao nomeada/declarada 
function exemplo2() {
    console.log("Funçao nomeada/declarada");
}

// Forma 3: arrow function
const exemplos3 = () => {
    console.log("Arrow Function");
}

// Chamada de funçao para execuçao
exemplo1();
exemplo2();
exemplos3();

/* funçao com parametros e retorno
de dados/resultados */
function somar(valor1, valor2) {
    return valor1 + valor2;
}
/* chamamos a funçao diversas vezes 
e passando valores diferentes como 
parametros */
console.log(somar(10, 20));
console.log(somar(15, 50));
console.log(somar(30, 47.8));


/* Formataçao de valores em reais */
let preco = 5000;
let desconto = preco * 0.10; // 10%
let precoFinal = preco - desconto;

function formatarpreco(valor){
    let opcows = {
        style: "currency",
        currency: "BRL"

    };


   return valor.toLocaleString("pt-br",opcoes);


}

console.log(`Preço: ${preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
})}`
);
console.log(`Desconto: ${desconto.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL"
}


)}`);
console.log(`preço final ${precoFinal.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL"
}

)}`);



console.log("------------");


/*  Sobre Arrow Function
Sintaxe moderna para funçoes no JS,
bastante usada por bibliotecas, frameworks
(React, Angular, Vue e etc).

A Sintaxe Geral è

const algumNome = () => {};

no entanto, esta sintaxe oide ser mais concisa.*/

// function dobra(valor){
//     return valor * 2;
// }

//  Versâo 2 (arrow Function)
// const dobra = (valor) => {
//     return valor * 2;
// };


// Versâo 3 (Arrow Function com retorno implicito)
const dobra = valor =>valor * 2;
    


// Chamadas

console.log( dobra(10) );
console.log( dobra(1325));
console.log( dobra(55.47));
