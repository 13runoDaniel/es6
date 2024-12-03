/* CLASS */
class Pokemon {
    nome = '';
    tipo = '';
}
const caterpy = new Pokemon();
caterpy.nome = 'Caterpy';
caterpy.tipo = 'Inseto';
console.log(caterpy); // Pokemon { nome: 'Caterpy', tipo: 'Inseto' }

class PokemonConstructor {
    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaquee) {
        console.log(`${this.nome} atacou com ${nomeDoAtaquee}`);
    }
}
const metapod = new PokemonConstructor('Metapod', 'Inseto');
console.log(metapod); // PokemonConstructor { nome: 'Metapod', tipo: 'Inseto' }
metapod.atacar('Endurecer'); // Metapod atacou com Endurecer
//

/* HERANÇA */
class Butterfree extends PokemonConstructor {
    constructor() {
        super('Butterfree', 'Inseto');
    }

    atacar() {
        console.log(`${this.nome} atacou com Psychic`);
    }
}

const butterfree = new Butterfree();
console.log(butterfree); // Butterfree { nome: 'Butterfree', tipo: 'Inseto' }
console.log(butterfree instanceof Butterfree); // true
console.log(butterfree instanceof PokemonConstructor); // true
butterfree.atacar(); // Butterfree atacou com Psychic
//

/* POLIMORFISMO */
class PokemonConstructor_1 {
    hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaquee) {
        console.log(`${this.nome} atacou com ${nomeDoAtaquee}`);
    }

    recebeuAtaque() {
        this.hp -= 10;
    }
}

class Charmander extends PokemonConstructor_1 {
    constructor() {
        super('Charmander', 'Fogo');
    }

    atacar() {
        console.log(`${this.nome} atacou com Ember`);
    }
}

const charmandere = new Charmander();
console.log(charmandere); // Charmander { hp: 100, nome: 'Charmander', tipo: 'Fogo' }
charmandere.hp = 5000;
charmandere.recebeuAtaque();
console.log(charmandere); // Charmander { hp: 4990, nome: 'Charmander', tipo: 'Fogo' }
//

/* CAMPO PRIVADO */
class PokemonConstructor_2 {
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaquee) {
        console.log(`${this.nome} atacou com ${nomeDoAtaquee}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibirHp() {
        console.log(this.#hp);
    }
}

class Charmillion extends PokemonConstructor_2 {
    constructor() {
        super('Charmillion', 'Fogo');
    }

    atacar() {
        console.log(`${this.nome} atacou com Flamethrower`);
    }
}

const charmillion = new Charmillion();
console.log(charmillion); // Charmillion { nome: 'Charmillion', tipo: 'Fogo' }
charmillion.recebeuAtaque();
charmillion.exibirHp();
