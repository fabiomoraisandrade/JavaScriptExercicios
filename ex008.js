const readline = require('readline-sync');

const requireValue = () => {
    let dist = readline.questionFloat('Digite um valor em metros: ');
    if (dist >= 0) {
        metersToMilimeter(dist);
    } else {
        console.log('Valor inválido');
        requireValue();
    }
}

const metersToMilimeter = (n) => {
    let milimeter = n * 1000;
    console.log(`${n} m correponde a ${milimeter} mm`);
}

requireValue();