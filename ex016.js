const readline = require('readline-sync');

const integerPart = (number) => {
    console.log(`A parte inteira do número ${number} é ${Math.trunc(number)}`);
}

let num = readline.questionFloat('Insira um numero real: ');
integerPart(num);