const readline = require('readline-sync');

let n = readline.questionFloat('Digite um numero: ');

if (n >= 0) {
    console.log(`O dobro de ${n} é ${2*n}. \nO triplo de ${n} é ${3*n}. \nA raiz quadrada de ${n} é ${n**(1/2)}.`);
} else {
    console.log(`O dobro de ${n} é ${2*n}. \nO triplo de ${n} é ${3*n}. \nO número é negativo, portanto não existe raiz quadrada. `);
}
