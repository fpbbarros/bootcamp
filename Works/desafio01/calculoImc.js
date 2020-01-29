const nome = 'Fábio';
const peso = 85.6;
const altura = 1.65;

let imc = calculaImc(peso, altura);

imc >= 30 ? console.log(`${nome} você está acima do peso`) : console.log(`${nome} você não está acima do peso`);

function calculaImc(peso, altura) {
  return peso / (altura * altura);
}






