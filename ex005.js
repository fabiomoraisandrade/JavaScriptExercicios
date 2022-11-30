const readline = require('readline-sync');

let n = readline.questionInt('Digite um numero inteiro: ');

console.log(`O antecessor do número ${n} é: ${n - 1} \nO sucessor do número ${n} é: ${n + 1}`);