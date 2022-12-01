const readline = require('readline-sync');

let n = readline.questionInt('Digite um numero: ');

const multiplicationTable = (num) => {
    for (let i = 1; i <= 9; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplicationTable(n);