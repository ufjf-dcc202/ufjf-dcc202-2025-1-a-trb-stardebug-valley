class Lote {
    constructor(elemento) {
        this.elemento = elemento;

        this.estado = 'vazio';
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
        if(this.estado === 'plantado' && this.regado) {
            this.estagio++;
            this.regado++;
        }
        else {
            this.estado = 'vazio';
            this.planta = null;
            this.estagio = 0;
            this.regado = false;
        }
    }

    atualizarVisual() {

    }
}