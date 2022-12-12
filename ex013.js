const readline = require('readline-sync');

const salaryIncrease = (s, i) => {
    newSalary = s * (100 + i) / 100;
    console.log(`O novo salário com aumento de ${i}% é R$${newSalary.toFixed(2)}`);
}

let salary = readline.questionFloat('Digite o valor do salario: R$');
let increase = readline.questionFloat('Digite a porcentagem do aumento: ');

salaryIncrease(salary, increase);