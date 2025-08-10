const terrenoPlantacao = document.getElementById('plantacao');
const listaLoja = document.getElementById('loja');
const ferramentas = document.getElementsByClassName('ferramenta');

const tamanhoPlantacao = 144;

for(let i = 0; i < tamanhoPlantacao; i++) {
    const lote = document.createElement('li');
    lote.dataset.index = i;
    terrenoPlantacao.appendChild(lote);
}const terrenoVetor = terrenoPlantacao.querySelectorAll('li');

terrenoVetor.forEach(lote => {
    lote.addEventListener('click', ) // adciona evento baseado no que estiver selecionado antes
});