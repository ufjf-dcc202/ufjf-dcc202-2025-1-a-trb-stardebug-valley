export default class Lote {
    constructor(elemento) {
        this.elemento = elemento;

        this.elementoIncial = Math.floor(Math.random() * 2);

        if(this.elementoInicial === 0)
            this.estado = 'arvore';
        else
            this.estado = 'pedra';
        this.planta = null;
        this.estagio = 0;
        this.regado = false;
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
        if(this.estagio == this.planta.totalEstagios()) {
            estado = 'pronta';
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

        this.atualizarVisual();
    }

    colher() {
        if (this.estado === 'prontoParaColher') {
            
            let valorVenda = this.planta.valorVenda;

            this.estado = 'vazio';
            this.planta = null;
            this.estagioCrescimento = 0;
            
            this.atualizarVisual();

            return valorVenda;
        }
    }
    
    cortarArvore() {
        if(estado === 'arvore') {
            this.estado = 'vazio';
        }
    }

    tirarPedra() {
        if(estado === 'pedra') {
            this.estado = 'vazio';
        }
    }

    atualizarVisual() {

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