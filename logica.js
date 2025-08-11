const terrenoPlantacao = document.getElementById('plantacao');
const listaLoja = document.getElementById('loja');
const ferramentas = document.getElementsByClassName('ferramenta');

const tamanhoPlantacao = 144;

const eCriaPlantacao = criaPlantacao();
const terrenoVetor = atualizaPlantacao();

function atualizaPlantacao(){
    for(let i = 0; i < tamanhoPlantacao; i++) {
        const lote = document.createElement('li');
        lote.dataset.index = i;
        terrenoPlantacao.appendChild(lote);
    } 
    return terrenoPlantacao.querySelectorAll('li');
}

function criaPlantacao(){
    const ePlantacao = document.createElement("div");
    ePlantacao.classList.add("plantacao");
    return ePlantacao;
}

terrenoVetor.forEach(lote => {
    lote.addEventListener('click', clicaTerreno) 
});

function clicaTerreno(evento){
    const posicao = Number(evento.target.dataset.posicao);
    console.log("click! " + posicao);
}
