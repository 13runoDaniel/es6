class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const aluno_1 = new Aluno('aluno_1', 3);
const aluno_2 = new Aluno('aluno_2', 1);
const aluno_3 = new Aluno('aluno_3', 7);
const aluno_4 = new Aluno('aluno_4', 8);
const aluno_5 = new Aluno('aluno_5', 6);
const aluno_6 = new Aluno('aluno_6', 5);
const aluno_7 = new Aluno('aluno_7', 4);
const aluno_8 = new Aluno('aluno_8', 2);

const acrescentarAluno = [aluno_1, aluno_2, aluno_3, aluno_4, aluno_5, aluno_6, aluno_7, aluno_8];

const verificarNotasSuperiores = acrescentarAluno.filter((notasSuperiores) => {
    return notasSuperiores.nota >= 6;
});
console.log(verificarNotasSuperiores);
