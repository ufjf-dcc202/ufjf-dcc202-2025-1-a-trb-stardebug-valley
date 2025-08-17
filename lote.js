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
        if(this.estado === 'vazio') {
            this.estado = 'arado';
            this.atualizarVisual();
        }
    }

    plantar(planta) {
        if(this.estado === 'arado') {
            this.estado = 'plantado';
            
            this.planta = planta;
            this.estagio = 0;
            this.atualizarVisual();
        }
    }

    regar() {
        if(this.estado === 'plantado') {
            this.regado = true;

            this.atualizarVisual();
        }
    }

    avancarDia() {
        if(this.planta) {
            if(this.estagio >= this.planta.totalEstagios) {
                this.estado = 'prontoParaColher';
            }
            else if(this.estado === 'plantado' && this.regado) {
                this.estagio++;
                this.regado = false;
            }
            else {
                this.estado = 'vazio';
                this.planta = null;
                this.estagio = 0;
                this.regado = false;
            }
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
        if(this.estado === 'arvore') {
            this.estado = 'vazio';
            this.atualizarVisual();
        }
    }

    tirarPedra() {
        if(this.estado === 'pedra') {
            this.estado = 'vazio';
            this.atualizarVisual();
        }
    }

    atualizarVisual() {

        // limpa antes de tudo
        this.elemento.innerHTML = ''; 
        this.elemento.className = ''; 
        this.elemento.classList.add(this.estado);

        if (this.regado) {
            this.elemento.classList.add('regado');
        }

        if(this.estado === 'arvore')
            this.elemento.innerHTML = `<img src="imagens/Arvore1.png" alt="arvore">`;
        else if(this.estado === 'pedra') 
            this.elemento.innerHTML = `<img src="imagens/Pedra.png" alt="pedra">`;
        else if (this.planta && (this.estado === 'plantado' || this.estado === 'prontoParaColher')) {
            
            const urlDaImagem = this.planta.iconesEstagios[this.estagio];

            const imagemHTML = `<img src="${urlDaImagem}" alt="${this.planta.nome}">`;
            
            this.elemento.innerHTML = imagemHTML;
        }
    }
}