/* FOR EACH */
const redesSociais = ['Facebook', 'Instagram', 'TikTok'];
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`); // #0 Eu tenho perfil na rede social: Facebook   #1 Eu tenho perfil na rede social: Instagram   #2 Eu tenho perfil na rede social: TikTok
});
//

/* MAP */
const alunos = ['Bruno', 'Perry', 'Eliana'];
const aluno = alunos.map(function (alunoAtual) {
    alunoAtual = {
        nome: alunoAtual,
        curso: 'FrontEnd',
    };
    return alunoAtual;
});
console.log(aluno); // [ { nome: 'Bruno', curso: 'FrontEnd' },   { nome: 'Perry', curso: 'FrontEnd' },   { nome: 'Eliana', curso: 'FrontEnd' } ]

const numeros = [1, 2, 3, 4, 5];
const dobrarNumeros = numeros.map(function (dobrandoNumero) {
    return {
        numero: dobrandoNumero,
        dobroDoNumero: dobrandoNumero * 2,
    };
});
console.log(dobrarNumeros); // [ { numero: 1, dobroDoNumero: 2 },   { numero: 2, dobroDoNumero: 4 },   { numero: 3, dobroDoNumero: 6 },   { numero: 4, dobroDoNumero: 8 },   { numero: 5, dobroDoNumero: 10 } ]
//

/* FIND */
const encontrarPerry = aluno.find(function (buscar) {
    return buscar.nome == 'Perry';
});
console.log(encontrarPerry); // { nome: 'Perry', curso: 'FrontEnd' }

const encontrarOswaldo = aluno.find(function (buscar) {
    return buscar.nome == 'Oswaldo';
});
console.log(encontrarOswaldo); // undefined
//

/* FINDINDEX */
const indiceDoPerry = aluno.findIndex(function (buscarIndice) {
    return buscarIndice.nome == 'Perry';
});
console.log(indiceDoPerry); // 1

const indiceDoOswaldo = aluno.findIndex(function (buscarIndice) {
    return buscarIndice.nome == 'Oswaldo';
});
console.log(indiceDoOswaldo); // -1
//

/* EVERY */
const todosOsCursosSaoFrontEnd = aluno.every(function (cursando) {
    return cursando.curso === 'FrontEnd';
});
console.log(todosOsCursosSaoFrontEnd); // true

const todosOsCursosSaoFrontEnd_1 = aluno.every(function (cursando) {
    return cursando.curso === 'BackEnd';
});
console.log(todosOsCursosSaoFrontEnd_1); // false
//

/* SOME */
aluno.push({
    nome: 'Oswaldo',
    curso: 'BackEnd',
});
const algunsAlunosSaoBackEnd = aluno.some(function (cursando) {
    return cursando.curso === 'BackEnd';
});
console.log(algunsAlunosSaoBackEnd); // true

const algunsAlunosSaoFullStack = aluno.some(function (cursando) {
    return cursando.curso == 'FrontEnd' && cursando.curso === 'BackEnd';
});
console.log(algunsAlunosSaoFullStack); // false
//

/* FILTER */
const filtrarAlunosDeBackEnd = aluno.filter(function (cursando) {
    return cursando.curso === 'BackEnd';
});
console.log(filtrarAlunosDeBackEnd); // [ { nome: 'Oswaldo', curso: 'BackEnd' } ]

function alunoFrondEnd(alunos) {
    return alunos.curso === 'FrontEnd';
}
const filtrarAlunosDeFrondEnd = aluno.filter(alunoFrondEnd);
console.log(filtrarAlunosDeFrondEnd); // [ { nome: 'Bruno', curso: 'FrontEnd' },   { nome: 'Perry', curso: 'FrontEnd' },   { nome: 'Eliana', curso: 'FrontEnd' } ]
//

/* REDUCE */
const numerosParaSomar = [23, 8, 10, 9, 94];
const reduzirNumeros = numerosParaSomar.reduce(function (acumuladorDeNumeros, numeroAtual) {
    return (acumuladorDeNumeros += numeroAtual);
}, 0);
console.log(reduzirNumeros); // 144

let reduzirComFor = 0;
for (let i = 0; i < numerosParaSomar.length; i++) {
    reduzirComFor += numerosParaSomar[i];
}
console.log(reduzirComFor); // 144

const nomeDosAlunos = aluno.reduce(function (acumuladorDeAlunos, alunoAtual) {
    return (acumuladorDeAlunos += `${alunoAtual.nome}; `);
}, '');
console.log(nomeDosAlunos); // Bruno; Perry; Eliana; Oswaldo;
