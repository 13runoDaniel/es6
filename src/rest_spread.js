function somar(num1, num2) {
    return num1 + num2;
}
console.log(somar(2, 8)); // 10

/* ARGUMENTS */
function somar1() {
    console.log(arguments); // [Arguments] { '0': 9, '1': 23 }
}
console.log(somar1(9, 23)); // undefined

function somar2() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}
console.log(somar2(10, 9, 23, 14)); // 56
//

/* REST */
function somarComRest(...numeros) {
    const somar = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0);
    return somar;
}
console.log(somarComRest(12, 23, 14, 4, 6, 5, 10, 7, 8, 17, 9)); // 115
//

/* SPREAD */
const numeros = [1, 2, 3, 4];
console.log(...numeros); // 1 2 3 4

const timesDeFutebolPaulista = ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos'];
const timesDeFutebolCarioca = ['Botafogo', 'Flamengo', 'Fluminense', 'Vasco'];
const timesDeFutebol = [...timesDeFutebolPaulista, ...timesDeFutebolCarioca];
console.log(timesDeFutebol); // [ 'Corinthians', 'Palmeiras', 'São Paulo', 'Santos', 'Botafogo', 'Flamengo', 'Fluminense', 'Vasco' ]

/* SPREAD COM OBJETO */
const carroDoBruno = {
    modelo: 'Gol',
    fabricante: 'Volkswagen',
    motor: 1.6,
    ano: 2012,
};
console.log(carroDoBruno); // { modelo: 'Gol', fabricante: 'Volkswagen', motor: 1.6, ano: 2012 }

const carroDoOswaldo = {
    ...carroDoBruno,
    motor: 1.0,
    ano: 2006,
};
console.log(carroDoOswaldo); // { modelo: 'Gol', fabricante: 'Volkswagen', motor: 1, ano: 2006 }
//

/* DESESTRUTURAÇÃO */
const { motor: motorDoCarroDoBruno } = carroDoBruno;
const { motor: motorDoCarroDoOswaldo } = carroDoOswaldo;
console.log(`Motor do Bruno ${motorDoCarroDoBruno} - Motor do Oswaldo ${motorDoCarroDoOswaldo}`); // Motor do Bruno 1.6 - Motor do Oswaldo 1
//

/* DESESTRUTURAÇÃO EM ARRAYS COM SPREAD */
const [time1, time2, time3, time4, ...outrosTimes] = timesDeFutebol;
console.log(time1); // Corinthians
console.log(time2); // Palmeiras
console.log(time3); // São Paulo
console.log(time4); // Santos
console.log(outrosTimes); // [ 'Botafogo', 'Flamengo', 'Fluminense', 'Vasco' ]
