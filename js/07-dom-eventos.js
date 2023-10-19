"use strict";

/* Funçôes de seleçâo no DOM

-getElementyById()
Seleciona UM elemento atraves de um id

-querySelector()
Seleciona UM elemento através de um seletor.

-querySelectorALL()
Seleciona VÀRIOS elementos atraves de um/varios seletor(es)

*/


/* Exemplo */

// 
const subtitulo = document.getElementById("subtitulo-dom");
const desemho = document.querySelector(".exemplo");
const descricao = document.querySelector("#descricao")

console.log(desemho);
console.log(descricao);

const elementos = document.querySelectorAll("h3, a");
console.log(elementos);
console.log(elementos[1]);

// Modificando o DOM
const titulo = document.querySelector("h1");
titulo.textContent = "Ola JavaScript";
titulo.style.textAlign = "center"; // CSS inline via JS
titulo.classList.add("destaque"); // classe CSS via JS

const linksReferencia = document.querySelectorAll("ul li a");
console.log(linksReferencia);

let quantidadelinks = linksReferencia.length;

for(let link of linksReferencia) {
    link.setAttribute("target","_blank");
    
    
}

// for( let i= 0; i <quantidadelinks; i++ )  {
//     linksReferencia[i].setAttribute("target", "_blank")
// }

/* Manipulando Eventos */
const pagina = document.querySelector("body");
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");

const audio = document.querySelector("#som");
const meme = document.querySelector("#meme");



// Ouvinte de evento 
exemplo01.addEventListener("click", function(){
    pagina.style.fontFamily = "verdana";
    mensagem.textContent = "Fonte alterada";
    mensagem.style.backgroundColor ="yellow";

    // Executamos o àudio com play
    som.play()

    // Removemos o atribuito hidden
    meme.removeAttribute("hidden");
});

// Exemplpo modo noturno 
const botao = document.querySelector("#noturno")

botao.addEventListener("click", gereciarModoNoturno);

function gereciarModoNoturno(){
    mensagem.textContent = "Ok!";
    pagina.classList.toggle("modo-noturno");

    if( pagina.classList.contains("modo-noturno") ){
        botao.textContent = "desativar";

    } else {
        botao.textContent = "Ativar";
    };
}





