import Lote from './lote.js'; 
// import Planta from './planta.js'; 

const terrenoPlantacao = document.getElementById('plantacao');
const listaLoja = document.getElementsByClassName('semente');
const ferramentas = document.getElementsByClassName('ferramenta');

const todosOsLotes = [];

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
        const novoLote = criaLote();
        terrenoPlantacao.appendChild(novoLote);
    } 
    return terrenoPlantacao.querySelectorAll('li');
}

function criaLote(){
    const novoLi = document.createElement('li');

    const novoLote = new Lote(novoLi);

    todosOsLotes.push(novoLote);

    novoLi.addEventListener('click', () => {
        switch (gameState.mao) {
            case 'machado':
                novoLote.cortarArvore();
                break;
            case 'picareta':
                novoLote.tirarPedra();
                break;
            case 'enxada':
                novoLote.arar();
                break;
            case 'regador':
                novoLote.regar();
                break;
            case 'rabanete':
                novoLote.plantar(new Rabanete());
                break;
            case 'cenoura':
                novoLote.plantar(new Cenoura());
                break;
            case 'melao':
                novoLote.plantar(new Melao());
                break;
        }
    });

    return novoLi;
}

function criaPlantacao(){
    const ePlantacao = document.createElement("div");
    ePlantacao.classList.add("plantacao");
    return ePlantacao;
}

// terrenoVetor.forEach(lote => {
//     lote.addEventListener('click', clicaTerreno);
// });

// function clicaTerreno(evento){
//     const posicao = Number(evento.target.dataset.posicao);
//     console.log("click! " + posicao);
// }

relogio.addEventListener('click', ()=>{
    gameState.dia++;
    atualizaTela();
});

function atualizaTela(){
    diaElement.textContent = gameState.dia;
}