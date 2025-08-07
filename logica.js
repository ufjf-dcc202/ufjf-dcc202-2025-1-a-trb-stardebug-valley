const terrenoPlantacao = document.getElementById('plantacao');
const listaLoja = document.getElementById('loja');
const ferramentas = document.getElementById('ferramentas');

const tamanhoPlantacao = 144;

for(let i = 0; i < tamanhoPlantacao; i++) {
    const lote = document.createElement('li');
    lote.dataset.index = i;
    terrenoPlantacao.appendChild(lote);
}

const semente1 = document.createElement('li');
listaLoja.appendChild(semente1);

const semente2 = document.createElement('li');
listaLoja.appendChild(semente2);

const semente3 = document.createElement('li');
listaLoja.appendChild(semente3);

const ferramenta1 = document.createElement('li');
ferramentas.appendChild(ferramenta1);

const ferramenta2 = document.createElement('li');
ferramentas.appendChild(ferramenta2);

const ferramenta3 = document.createElement('li');
ferramentas.appendChild(ferramenta3);

const ferramenta4 = document.createElement('li');
ferramentas.appendChild(ferramenta4);

const terrenoVetor = terrenoPlantacao.querySelectorAll('li');

terrenoVetor.forEach(lote => {
    lote.addEventListener('click', ) // adciona evento baseado no que estiver selecionado antes
});