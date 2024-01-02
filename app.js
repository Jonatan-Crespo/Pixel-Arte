
const colors = document.getElementsByClassName('color');
colors[0].style.backgroundColor = 'black';
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');

//botão random cores
const botaoCores = document.getElementById('buttom-random-color');
botaoCores.addEventListener('click', (event) => {
    function randomColors() {
        let colorsRandom = ['',];
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
    // console.log(event);
});

//Aplicação da cor e salvar no local storage - Refatorado
function setBackgroundColor(color) {
    for (let i = 1; i < colors.length; i += 1) {
        colors[i].style.backgroundColor = color[i];
        localStorage.setItem('colorPallet', color)
    };
    // console.log(color);
}

//Função antiga para aplicação da cor e salva no local storage
// function setBackgroundColor(color) {
//     color1.style.backgroundColor = color[0];
//     color2.style.backgroundColor = color[1];
//     color3.style.backgroundColor = color[2];
//     localStorage.setItem('backgroundColor1', color[0]);
//     localStorage.setItem('backgroundColor2', color[1]);
//     localStorage.setItem('backgroundColor3', color[2]);
// }

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
        // return colors[index].style.backgroundColor;
    })
    // console.log(colors[index]);
}

//Selecionar o uma div no quadro 5x5
const pixel = document.getElementsByClassName('pixel');
for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', (event) => {
        const selected = document.querySelector('.selected');
        const backgroundColorPaleta = selected.style.backgroundColor;
        // console.log(backgroundColorPaleta);
        if (selected) {
            event.target.style.backgroundColor = `${backgroundColorPaleta}`
        }
        // JSON.parse(localStorage.setItem('pixelBoard', event));
    })
}

//Botão de limpar o quadro 5x5
const limpar = document.getElementById('clear-board');
limpar.addEventListener('click', (event) => {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach(pixels => {
        pixels.style.backgroundColor = '';
    });
});
