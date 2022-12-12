const readline = require('readline-sync');

const discountPrice = (p, d) => {
    let newPrice = p * (100 - d) / 100;
    console.log(`O preço do produto com ${d}% de desconto é R$${newPrice.toFixed(2)}`);
}

let price = readline.questionFloat('Digite o valor do produto: R$');
let discount = readline.questionFloat('Digite a porcentagem do desconto: ');

discountPrice(price, discount);