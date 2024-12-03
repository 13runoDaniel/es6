/* ARROW FUNCTION */
const primeiraArrowFunction = () => {
    console.log('Primeira Arrow Function');
};
primeiraArrowFunction(); // Primeira Arrow Function

const segundaArrowFunction = () => {
    return 'Segunda Arrow Function';
};
console.log(segundaArrowFunction()); // Segunda Arrow Function

const terceiraArrowFunction = () => 'Terceira Arrow Function';
console.log(terceiraArrowFunction()); // Terceira Arrow Function
//

/* OBJETO */
const retornarObjeto = () => {
    return {
        carro: 'Gol',
        fabricante: 'Volkswagen',
    };
};
console.log(retornarObjeto()); // { carro: 'Gol', fabricante: 'Volkswagen' }

const retornarObjeto_1 = () => ({
    carro: 'Gol',
    fabricante: 'Volkswagen',
});
console.log(retornarObjeto_1()); // { carro: 'Gol', fabricante: 'Volkswagen' }
//

const usuarios = ['Eliana', 'Bruna', 'Barbara'];
const usuario = usuarios.map((usuarioAtual) => {
    usuarioAtual = {
        nome: usuarioAtual,
        redeSocialUtilizada: 'Instagram',
    };
    return usuarioAtual;
});

usuario.push({
    nome: 'Oswaldo',
    redeSocialUtilizada: 'Facebook',
});

const filtrarUsuarioDeFacebook = (redeSocial) => redeSocial.redeSocialUtilizada === 'Facebook';
const usuarioDeFacebook = usuario.filter(filtrarUsuarioDeFacebook);
console.log(usuarioDeFacebook); // [ { nome: 'Oswaldo', redeSocialUtilizada: 'Facebook' } ]

const filtrarUsuarioDeInstagram = (redeSocial) => redeSocial.redeSocialUtilizada === 'Instagram';
const usuarioDeInstagram = usuario.filter(filtrarUsuarioDeInstagram);
console.log(usuarioDeInstagram); // [ { nome: 'Eliana', redeSocialUtilizada: 'Instagram' },   { nome: 'Bruna', redeSocialUtilizada: 'Instagram' },   { nome: 'Barbara', redeSocialUtilizada: 'Instagram' } ]
//

const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        console.log(this); // { velocidadeAtual: 40, acelerar: [Function: acelerar], frear: [Function: frear] }
        this.velocidadeAtual += 10;
    },
    frear: function () {
        console.log(this); // { velocidadeAtual: 50, acelerar: [Function: acelerar], frear: [Function: frear] }
        this.velocidadeAtual -= 10;
    },
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual); // 40
