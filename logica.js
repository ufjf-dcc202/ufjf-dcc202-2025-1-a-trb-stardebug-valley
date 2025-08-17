import Lote from './lote.js'; 
import { Rabanete, Cenoura, Melao } from './planta.js';

const terrenoPlantacao = document.getElementById('plantacao');

const todosOsLotes = [];

const relogio = document.getElementById('relogio');
const diaElement = relogio.querySelector('span');

const dinheiro = document.getElementById('dinheiro');
const dinheiroElement = dinheiro.querySelector('span');

const tamanhoPlantacao = 144;
const dinheiro_inicial = 100;
const dia_inicial = 1;

let gameState = {
    dinheiro: dinheiro_inicial,
    dia: dia_inicial,
    mao: '',
}

criaPlantacao();
atualizaPlantacao();

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
                if(gameState.dinheiro >= 15) {
                gameState.dinheiro = gameState.dinheiro - novoLote.plantar(new Rabanete());
                atualizaDinheiro();
                }
                break;
            case 'cenoura':
                if(gameState.dinheiro >= 35) {
                    gameState.dinheiro = gameState.dinheiro - novoLote.plantar(new Cenoura());
                    atualizaDinheiro();
                }
                break;
            case 'melao':
                if(gameState.dinheiro >= 55) {
                    gameState.dinheiro = gameState.dinheiro - novoLote.plantar(new Melao());
                    atualizaDinheiro();
                }
                break;
            case null:
                gameState.dinheiro = gameState.dinheiro + novoLote.colher();
                atualizaDinheiro();
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

relogio.addEventListener('click', ()=>{
    gameState.dia++;

    todosOsLotes.forEach(lote => {
        lote.avancarDia();
    });

    atualizaTela();
});

function atualizaTela(){
    diaElement.textContent = gameState.dia;
}

function atualizaDinheiro() {
    dinheiroElement.textContent = gameState.dinheiro;
}

const itens = document.querySelectorAll('Button');

itens.forEach(item => { 
    item.addEventListener('click', () => {
        const itemJaSelecionado = document.querySelector('.selecionado');
        
        if (itemJaSelecionado) {
            itemJaSelecionado.classList.remove('selecionado');
        }

        gameState.mao = item.dataset.item;
        
        if(itemJaSelecionado != item)
            item.classList.add('selecionado');
        else
            gameState.mao = null;

        console.log(gameState.mao);
    });
});