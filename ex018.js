const readline = require('readline-sync');

const degreesToRadians = (degree) => {
    radians = (degree * Math.PI) / 180;
    return radians;
}

const showSin = (angle) => {
    let sin = Math.sin(degreesToRadians(angle));
    return sin;
}

const showCos = (angle) => {
    let cos = Math.cos(degreesToRadians(angle));
    return cos;
}

const showTan = (angle) => {
    let tan = Math.tan(degreesToRadians(angle));
    return tan;
}

let angle = readline.questionFloat('Informe um angulo (graus): ');

console.log(`O seno de ${angle} graus é ${showSin(angle)} rad. \n
O cosseno de ${angle} graus é ${showCos(angle)} rad. \n
A tangente de ${angle} graus é ${showTan(angle)} rad.`);