
const colors = document.getElementsByClassName('color');
colors[0].style.backgroundColor = 'black';
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');

//botão random cores
const botaoCores = document.getElementById('buttom-random-color');
botaoCores.addEventListener('click', (event) => {
    function randomColors() {
        let colorsRandom = [];
        for (let i = 0; i < 3; i++) {
            const letters = '0123456789ABCDEF';
            let cor = '#';
            for (let i = 0; i < 6; i++) {
                cor += letters[Math.floor(Math.random() * 16)];
            }
            colorsRandom.push(cor);
        }
        return colorsRandom;
    }
    event = randomColors();
    setBackgroundColor(event);
});

//Aplicação da cor e salvar no local storage
function setBackgroundColor(color) {
    color1.style.backgroundColor = color[0];
    color2.style.backgroundColor = color[1];
    color3.style.backgroundColor = color[2];
    localStorage.setItem('backgroundColor1', color[0]);
    localStorage.setItem('backgroundColor2', color[1]);
    localStorage.setItem('backgroundColor3', color[2]);
}

// // Voltar as cores salvas no local Storage
// const initialize = () => {
//     const backgroundColor1 = localStorage.getItem('backgroundColor1');
//     setBackgroundColor(backgroundColor1);  
// }
// initialize();

//Criar as divs para o quadro 5x5
function createDiv() {
    const section = document.getElementById('pixel-board');
    for (let i = 0; i < 5; i++) {
        const divLinha = document.createElement('div');
        divLinha.innerHTML = '';;
        divLinha.className = 'linha';
        section.appendChild(divLinha);

        for (let z = 0; z < 5; z++) {
            const div = document.createElement('div');
            div.innerHTML = '';
            div.className = 'pixel';
            divLinha.appendChild(div);
        }
    }
}
createDiv();

//Selecionar as cores
for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (event) => {
        const selected = document.querySelector('.selected');
        if (selected) {
            selected.classList.remove('selected');
        }
        event.target.classList.add('selected');
    })
}

//Adicionar cores no quadro
const div = document.getElementsByClassName('pixel');
console.log(div);
for (let i = 0; i < div.length; i++) {
    div[i].addEventListener('click', (event)=>{
        
    })
}
