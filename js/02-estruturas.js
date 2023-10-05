/* Estruturas de Dados  
 -Arrays (vetores/matrizes):
 lista de dados indexados, sequeciais e acessiveis por um indice numerico.

 -objetos
 lista de dados nao indexados e formados por propriedades 
 e valores*/
//  Arrays

let cursos =["node.js", "React", "SQL", "UX/UI Design"]

console.log(cursos); // saida direita/estrurada

console.log(cursos[2]); // SQL 

const dados = ["Giuseppe","costa","19","(11)94296-2546","Sâo Paulo"]

console.log(dados[0]);

console.log(dados[2]);

console.log(`${dados[0]} tem ${dados[2]} anos.`);


console.log("---------");

// Objeto

let carro = {
marca:"fiat",
modelo: "uno com escada",
portas: 2,
cor: "branco",
opcionais: ["Ar condicionado ", "vidros eletricos","Alarme"]

}
    
console.log(carro);
console.log(carro.modelo);


console.log(
    `carros da ${carro.marca} tem a cor ${carro.cor}`
)

console.log(`Este carro tem ${carro.opcionais[0]} e ${carro.opcionais[2]}`);
    
     
    


