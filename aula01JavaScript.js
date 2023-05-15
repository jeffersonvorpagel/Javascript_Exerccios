//você tera 5 variaveis. sendo elas:
//preço gasolina;
//preço etanol;
//valor medio de gasto do carro;
//distancia em km de viagem;
//O tipo do combustivel do seu carro;

//imprima no console o valor que sera gasto em combustivel para realizar essa viagem

const valor_combustivelGasolina = 5.79;
const Valor_combustivelEtanol = 6.66;
const media_combustivel = 10;
const distancia = 100;
const tipodecombustivel = 'Etanol';

const litrosConsumidos = distancia / media_combustivel;

if (tipodecombustivel === 'Etanol') {
    const gastototal = valor_combustivelGasolina * litrosConsumidos;
    console.log(gastototal.toFixed(2));
} else {
       const gastototal = Valor_combustivelEtanol * litrosConsumidos;
       console.log(gastototal.toFixed(2));
}


