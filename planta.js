class Planta {
    constructor(nome, tempoPorEstagio, totalEstagios, valorVenda) {
        this.nome = nome;
        this.tempoPorEstagio = tempoPorEstagio;
        this.totalEstagios = totalEstagios; 
        this.valorVenda = valorVenda;

        this.iconesEstagios = [];
        for (let i = 0; i <= totalEstagios; i++) {
            this.iconesEstagios.push(`imagens/${nome}_estagio_${i}.png`);
        }
    }
}

class Rabanete extends Planta {
    constructor() {
        super('rabanete', 1, 3, 50);
    }
}

class Cenoura extends Planta {
    constructor() {
        super('cenoura', 2, 4, 80);
    }
}

class Melao extends Planta {
    constructor() {
        super('melao', 3, 5, 200);
    }
}