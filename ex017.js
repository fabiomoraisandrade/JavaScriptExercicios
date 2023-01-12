const readline = require('readline-sync');

const hypotenuseCalculation = (firstLeg, secondLeg) => {
    let hypotenuse = (firstLeg ** 2 + secondLeg ** 2) ** (1/2);
    console.log(`A hipotenusa do triângulo é ${hypotenuse.toFixed(2)}`);
}

let firstSide = readline.questionFloat('Insira o lado do primeiro cateto do triangulo: ');
let secondSide = readline.questionFloat('Insira o segundo cateto do triangulo: ');

hypotenuseCalculation(firstSide, secondSide);