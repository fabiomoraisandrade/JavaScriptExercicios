const readline = require('readline-sync');

const paintWall = (w, h) => {
    let area = w * h;
    let paint = area / 2;
    console.log(`A parede possui ${area} m^2. Para pintá-la serão necessários ${paint} l.`);
}

let width = readline.questionFloat('Digite a largura da parede (m): ');
let height = readline.questionFloat('Digite a altura da parede (m): ');

paintWall(width, height);