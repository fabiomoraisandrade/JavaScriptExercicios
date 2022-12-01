const readline = require('readline-sync');

let n1 = readline.questionFloat('Digite a primeira nota: ');
let n2 = readline.questionFloat('Digite a segunda nota: ');

const arithmeticAverage = (num1, num2) => {
    let mean = (num1 + num2) / 2;
    console.log(`A média aritmética dos numeros ${num1} e ${num2} é: ${mean}`);
}

arithmeticAverage(n1, n2);

