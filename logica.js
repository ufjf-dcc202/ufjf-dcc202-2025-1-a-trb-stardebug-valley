const terrenoPlantacao = document.getElementById('plantacao');
const listaLoja = document.getElementsByClassName('semente');
const ferramentas = document.getElementsByClassName('ferramenta');
const relogio = document.getElementById('relogio');
const diaElement = relogio.querySelector('span');

const tamanhoPlantacao = 144;
const dinheiro_inicial = 100;
const dia_inicial = 1;

let gameState = {
    dinheiro: dinheiro_inicial,
    dia: dia_inicial,
    mao: null,
}

const eCriaPlantacao = criaPlantacao();
const terrenoVetor = atualizaPlantacao();

function atualizaPlantacao(){
    for(let i = 0; i < tamanhoPlantacao; i++) {
        const novoLote = criaLote(i);
        terrenoPlantacao.appendChild(novoLote);
    } 
    return terrenoPlantacao.querySelectorAll('li');
}

function criaLote(posicao){
    const lote = document.createElement('li');
    lote.dataset.posicao = posicao;
    return lote;
}

function criaPlantacao(){
    const ePlantacao = document.createElement("div");
    ePlantacao.classList.add("plantacao");
    return ePlantacao;
}

terrenoVetor.forEach(lote => {
    lote.addEventListener('click', clicaTerreno);
    switch (gameState.mao){
        case 'beterraba':
            break;
        case 'cenoura':
            break;
        case 'melao':
            break;
        case 'regador':
            break;
        case 'machado':
            break;
        case 'picareta':
            break;
        case 'enxada':
            break;
    }
});

function clicaTerreno(evento){
    const posicao = Number(evento.target.dataset.posicao);
    console.log("click! " + posicao);
}

relogio.addEventListener('click', ()=>{
    gameState.dia++;
    atualizaTela();
});

function atualizaTela(){
    diaElement.textContent = gameState.dia;
}

const itens = document.querySelectorAll('Button');

itens.forEach(item => { 
    item.addEventListener('click', () => { 
        gameState.mao = item.textContent;
        console.log(gameState.mao);
    });
});