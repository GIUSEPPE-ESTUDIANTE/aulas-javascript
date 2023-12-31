/* Comandos de Repetiçâo
Instruçôes para realizar açôes 
por uma quantidade especifica de vezes. 

Comandos tradicionais:
- while         -> ENQUANTO
- do/while      -> FAÇA/ENQUANTO
-for            -> PARA 

obs.: normalmente o loop e controlado
atraveis de uma variavel contadora.*/

/* let contador = 1;
while ( contador <= 5 ){
    console.log(`valor de contador: ${contador}`);
    contador++;  // ++ incremento
} */

//  EXEMPLO DO/WHITE (FAÇA/ENQUANTO)
/* let i = 1;
do {
    console.log(`contador vale: ${contador} `);
    i++;
} while (i <= 3) */

/* Obs: normalmente variaveis de controle
de repetiçao sao chamadas de i, j ou k. */

//  EXEMPLO FOR (PARA)
/* for( let i = 1; i <= 10; i++ ){
    console.log(`i value ${i}`);
} */

/* Loop com array */
let clientes = ["by pamella", "lula", "bolsonaro", "lucas", "igor",];

// "Cache/memoria" da quantidade de elementos do array
let quantidade = clientes.length;

for (let i = 0; i < quantidade; i++) {
    console.log(`cliente: ${clientes[i]}`)


}

console.log("---------");


/* for/of -> para arrays */
let bandas = ["slayer", "dream theater", "nightwish"];

for (let banda of bandas) {
    console.log(banda);
}








// for/in -> para objetos
let livros = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http;//maujor.com",
    ano: 2016,
    editora: "novatec",
    edicao: 3

};

// para DADOS dentro/em LIVRO
for (let dados in livro) {
    // Acessar APENAS a propriedade
    // console.log(dados);

    // Acessar VALOR de cada propriedade
    // console.log(livro[dados]);

    console.log(`${propriedade} -> ${livro[propriedade]}`);
}

