const readline = require('readline-sync');

const convertTemp = (c) => {
    let f = (c * (9 / 5)) + 32;
    console.log(`A temperatura ${c}°C equivale a ${f.toFixed(2)}°F`);
}

let tempCelsius = readline.questionFloat('Digite a temperatura em graus Celsius: ');

convertTemp(tempCelsius);