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
let clientes = ["by pamella", "lula","bolsonaro", "lucas", "igor",];

let quantidade = clientes.length;

for ( let i = 0; i < quantidade; i++ ){
    console.log(`cliente: ${clientes[i]}`)


}