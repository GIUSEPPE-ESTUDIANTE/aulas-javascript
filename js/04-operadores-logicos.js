"use strict";

// Requisitos ds escola para aprovaçâo
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno ficticio
let aluno = "Jean";
let mediaFinal = 6.5;
let faltas = 10;
let resultado;

/* Operador logico e (AND) */

// if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas)  {
// resultado = "aprovado";
// } else {
//     resultado = "reprovado";
// }

if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    resultado = "aprovado";
} else if( faltas > limiteDeFaltas){
    resultado = "reprovado por faltas";
} else {
    resultado = "reprovado";
}

console.log(`O aluno ${aluno} esta ${resultado}`);
console.log(`Media do aluno: ${mediaFinal}`);
console.log(`faltas do aluno: ${faltas}`);

console.log("-------------");
/* Operador logico  */
let diaDasemana = "domingo";

if(diaDasemana == "sabado" || diaDasemana == "domingo") {
    console.log("final de semana :)");
} else {
    console.log("va trabalhar")
}

console.log("--------------");

/* Operador logico ! (NOT - NÂO/NEGAÇÂO) */
let blackFriday = true;
if( !blackFriday ){
    console.log("Preços normais...");
} else {
    console.log("preços com desconto...");
}


