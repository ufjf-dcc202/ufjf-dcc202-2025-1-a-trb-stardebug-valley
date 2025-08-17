// import Planta from './planta.js';

export default class Lote {
    constructor(elemento) {
        this.elemento = elemento;

        this.elementoInicial = Math.floor(Math.random() * 2);

        if(this.elementoInicial === 0)
            this.estado = 'arvore';
        else
            this.estado = 'pedra';

        this.planta = null;
        this.estagio = 0;
        this.regado = false;

        this.atualizarVisual();
    }

    arar() {
        this.colher();

        if(this.estado === 'vazio') {
            this.estado = 'arado';
            this.atualizarVisual();
        }
    }

    plantar(planta) {
        this.colher();
        
        if(this.estado === 'arado') {
            this.estado = 'plantado';
            
            this.planta = planta;
            this.estagio = 0;
            this.atualizarVisual();
        }
    }

    regar() {
        this.colher();
        
        if(this.estado === 'plantado') {
            this.regado = true;

            this.atualizarVisual();
        }
    }

    avancarDia() {
        if(this.planta && this.estado === 'plantado') {
            
            if(this.regado)
                this.estagio++;
            else {
                this.estado = 'vazio';
                this.planta = null;
                this.estagio = 0;
            }

            this.regado = false;

            if(this.estagio >= this.planta.totalEstagios - 1)
                this.estado = 'prontoParaColher';
        }

        this.atualizarVisual();
    }

    colher() {
        if (this.estado === 'prontoParaColher') {
            
            let valorVenda = this.planta.valorVenda;

            this.estado = 'vazio';
            this.planta = null;
            this.estagio = 0;
            
            this.atualizarVisual();

            return valorVenda;
        }
    }
    
    cortarArvore() {
        this.colher();
        
        if(this.estado === 'arvore') {
            this.estado = 'vazio';
            this.atualizarVisual();
        }
    }

    tirarPedra() {
        this.colher();
        
        if(this.estado === 'pedra') {
            this.estado = 'vazio';
            this.atualizarVisual();
        }
    }

    atualizarVisual() {
        this.elemento.innerHTML = '';
        this.elemento.className = '';

        if (this.estado === 'plantado' || this.estado === 'prontoParaColher') {
            this.elemento.classList.add('arado'); 
        } else {
            this.elemento.classList.add(this.estado);
        }

        if (this.regado && (this.estado === 'plantado' || this.estado === 'arado')) {
            this.elemento.classList.add('regado');
        }

        if (this.estado === 'arvore') {
            this.elemento.innerHTML = `<img src="imagens/Arvore1.png" alt="arvore">`;
        } else if (this.estado === 'pedra') {
            this.elemento.innerHTML = `<img src="imagens/Pedra.png" alt="pedra">`;
        } else if (this.planta && (this.estado === 'plantado' || this.estado === 'prontoParaColher')) {
            const urlDaImagem = this.planta.iconesEstagios[this.estagio];
            this.elemento.innerHTML = `<img src="${urlDaImagem}" alt="${this.planta.nome}">`;
        }
    }
}