const readline = require('readline-sync');

let n = readline.question('Digite algo: ')

console.log(`O tipo é: ${typeof(n)}`);
//O tipo do método question do readline-sync sempre será uma string