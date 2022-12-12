const request = require('request');

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL';

// request(options, callback)

const options = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
}

const callbackAllQuotes = (erro, res, body) => {
    let json = JSON.parse(body);
    console.log(json);
}

const callbackQuoteDolar = (erro, res, body) => {
    let json = JSON.parse(body);
    quoteDolar = json.USDBRL['bid'];
    date = json.USDBRL['create_date'];
    console.log(`Dolar = R$${quoteDolar}. Data da cotação: ${date}`);
    return quoteDolar
}

request(options, callbackQuoteDolar);