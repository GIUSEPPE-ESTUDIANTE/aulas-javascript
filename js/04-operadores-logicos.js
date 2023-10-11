"use strict";

// Requisitos ds escola para aprovaçâo
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno ficticio
let aluno = "Jean";
let mediaFinal = 8.5;
let faltas = 8;

/* Operador logico e (AND) */

if(mediaFinal >= mediaMinima && faltas < limiteDeFaltas)  {
resultado = "aprovado";
} else {
    resultado = "reprovado";
}

console.log(`O aluno ${aluno} esta ${resultado}`);
console.log(`Media do aluno: ${mediaFinal}`);
console.log(`faltas do aluno: ${faltas}`);

