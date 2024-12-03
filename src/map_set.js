/* MAP */
let meuMap = new Map();
meuMap.set('Nome', 'Bruno');
console.log(meuMap); // Map(1) { 'Nome' => 'Bruno' }

/* GET */
const nome = meuMap.get('Nome');
console.log(nome); // Bruno

/* SIZE */
console.log(meuMap.size); // 1

/* HAS */
console.log(meuMap.has('Nome')); // true

/* CLEAR */
meuMap.clear();
console.log(meuMap.size); // 0

/* FOR OF */
let meusCursos = new Map();
meusCursos.set('Cursos', 'ADS, Frond-End, Back-End');

/* KEYS */
for (let chave of meusCursos.keys()) {
    console.log(chave); // Cursos
}

/* VALUES */
for (let valor of meusCursos.values()) {
    console.log(valor); // ADS, Frond-End, Back-End
}

/* ENTRIES */
for (let entradas of meusCursos.entries()) {
    console.log(entradas); // [ 'Cursos', 'ADS, Frond-End, Back-End' ]
}

/* DESESTRUTURAÇÃO */
for (let [chave, valor] of meusCursos.entries()) {
    console.log(`${chave}: ${valor}`); // Cursos: ADS, Frond-End, Back-End
}
//

/* DELETE */
let deletarMeuMap = new Map();
deletarMeuMap.set('Manter', 'Map mantido');
deletarMeuMap.set('Deletar', 'Map deletado');

console.log(deletarMeuMap); // Map(2) { 'Manter' => 'Map mantido', 'Deletar' => 'Map deletado' }
deletarMeuMap.delete('Deletar');
console.log(deletarMeuMap); // Map(1) { 'Manter' => 'Map mantido' }
//

/* SET */
const listaDeCpf = new Set();
listaDeCpf.add('46079573059');
listaDeCpf.add('43465679083');
listaDeCpf.add('55759921010');
console.log(listaDeCpf); // Set(3) { '46079573059', '43465679083', '55759921010' }
console.log(listaDeCpf.keys()); // [Set Iterator] { '46079573059', '43465679083', '55759921010' }
console.log(listaDeCpf.values()); // [Set Iterator] { '46079573059', '43465679083', '55759921010' }

/* FOR EACH */
listaDeCpf.forEach((valor) => {
    console.log(valor); // 46079573059   43465679083   55759921010
});
//

/* REMOVER ITENS DUPLICADOS */
const listagemItensUnicos = ['Oswaldo', 'Eliana', 'Bruna', 'Bruno', 'Barbara', 'Bruno'];
const corrigindoListagem = new Set([...listagemItensUnicos]);
console.log(corrigindoListagem); // Set(5) { 'Oswaldo', 'Eliana', 'Bruna', 'Bruno', 'Barbara' }
const listaUnica = [...corrigindoListagem];
console.log(listaUnica); // [ 'Oswaldo', 'Eliana', 'Bruna', 'Bruno', 'Barbara' ]
