const readline = require('readline-sync');

let n1 = readline.questionInt('Digite o primeiro numero: ');
let n2 = readline.questionInt('Digite o segundo numero: ');

let s = n1 + n2;

console.log(`A soma do numero ${n1} e do numero ${n2} é igual a: ${s}`);