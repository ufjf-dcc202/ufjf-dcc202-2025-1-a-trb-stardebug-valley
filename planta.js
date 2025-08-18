export class Planta {
    constructor(nome, totalEstagios, valorCompra, valorVenda) {
        this.nome = nome;
        this.totalEstagios = totalEstagios;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;

        this.iconesEstagios = [];

        for (let i = 1; i <= totalEstagios; i++) {
            this.iconesEstagios.push(`imagens/${nome}_Stage_${i}.png`);
        }
    }
}

export class Rabanete extends Planta {
    constructor() {
        super('Radish', 5, 15, 50);
    }
}

export class Cenoura extends Planta {
    constructor() {
        super('Carrot', 4, 35, 80);
    }
}

export class Melao extends Planta {
    constructor() {
        super('Melon', 6, 55, 200);
    }
}