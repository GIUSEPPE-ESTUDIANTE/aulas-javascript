"use strict";


const alunos = [
    {
        id: 2,
        nome: "joaozinho"


    },
    {
        id: 2,
        nome: "mariazinha"
    },
    {
        id:3,
        nome: "Giuseppezinho"
    }

];

let quantidadeAlunos = alunos.length

for(let i = 0; i < quantidadeAlunos; i++){
    console.log(alunos[i].nome)
}
console.log("------------");

let i =0;
while ( i < quantidadeAlunos ){
    console.log(alunos[i].nome);
    i++;
}


