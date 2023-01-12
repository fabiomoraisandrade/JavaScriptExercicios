const readline = require('readline-sync');

const carRentalPrice = (distance, days) => {
    const pricePerDay = 60.00;
    const pricePerKm = 0.15;
    let total = (pricePerDay * days + pricePerKm * distance).toFixed(2);
    console.log(`Sabendo que o preço do aluguel por dia é R$${pricePerDay} e cada quilometro percorrido é cobrada uma taxa de R$${pricePerKm}, o preço total do aluguel do carro é de R$${total}.`);
}

let dist = readline.questionFloat('Qual a quantidade de quilometros a ser percorrida? ');
let d = readline.questionInt('Qual a quantidade de dias que o carro sera alugado? ');

carRentalPrice(dist, d);
