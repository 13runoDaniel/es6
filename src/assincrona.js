/* PROMISE */
const funcaoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;

        for (let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch (e) {
        reject('Deu erro na iteração dos números');
    }
});

const funcaoPesadaPromiseErro = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;

        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }
        resolve(execucoes);
    } catch (e) {
        reject('Deu erro na iteração dos números funcaoPesadaPromiseErro');
    }
});

console.log('Início');
funcaoPesadaPromise.then((resultado) => console.log(resultado)).catch((erro) => console.log(erro));
console.log('Fim');

console.log('Início');
funcaoPesadaPromiseErro
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro));
console.log('Fim');

/* ASYNC AWAITY */
async function execucaoPrincial() {
    console.log('Início');

    await funcaoPesadaPromise
        .then((resultado) => console.log(resultado))
        .catch((erro) => console.log(erro));
    console.log('Fim');
}
execucaoPrincial();

async function execucaoPrincial_1() {
    console.log('Início de execucaoPrincial_1');

    try {
        const resultado = await funcaoPesadaPromiseErro;
        console.log(resultado);
    } catch (e) {
        console.log(e);
    }

    console.log('Fim de execucaoPrincial_1 com erro');
}
execucaoPrincial_1();
//

/* PROMISE COM PARÂMETRO*/
const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário ${login}`);
        }, 3000);
    });
};

async function execucaoPrincial_2() {
    console.log('Início de execucaoPrincial_1');

    promiseComParametros('bruno@email.com', 'Perry').then((resultado) => {
        console.log(resultado);
    });
    try {
        const resultado = await funcaoPesadaPromiseErro;
        console.log(resultado);
    } catch (e) {
        console.log(e);
    }

    console.log('Fim de execucaoPrincial_1 com erro');
}
execucaoPrincial_2();
