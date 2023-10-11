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
let contador = 1;
do {
    console.log(`contador vale: ${contador} `);
    contador++;
} while (contador <= 3)

