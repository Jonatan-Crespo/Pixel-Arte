
const colors = document.getElementsByClassName('color');
colors[0].style.backgroundColor = 'black';
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');

//botão random cores
const botaoCores = document.getElementById('buttom-random-color');
botaoCores.addEventListener('click', () => {
    function randomColors() {
        let colorsRandom = [''];
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
    const randomColor = randomColors()
    setBackgroundColor(randomColor);
});

//Aplicação da cor e salvar no local storage - Refatorado
function setBackgroundColor(color) {
    for (let i = 1; i < colors.length; i += 1) {
        colors[i].style.backgroundColor = color[i];
        localStorage.setItem('colorPallet', JSON.stringify(color));
    };
}

// Voltar as cores salvas no local Storage - Funciona só não é muito dinâmico.
function iniciative() {
    const backgroundColor = JSON.parse(localStorage.getItem('colorPallet'));
    color1.style.backgroundColor = backgroundColor[1];
    color2.style.backgroundColor = backgroundColor[2];
    color3.style.backgroundColor = backgroundColor[3];
}
iniciative();

//Criar as divs para o quadro 5x5 -- Adicionando o input de qndtidade de quadros
let numbers = JSON.parse(localStorage.getItem('number'));

function createDiv() {
    const section = document.getElementById('pixel-board');
    for (let i = 0; i < numbers; i++) {
        const divLinha = document.createElement('div');
        divLinha.innerHTML = '';
        divLinha.className = 'linha';
        section.appendChild(divLinha);

        for (let z = 0; z < numbers; z++) {
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
        console.log(event.target);
        localStorage.setItem('pixelBoard', JSON.stringify(event.target));
    })
}

//Botão de limpar o quadro 5x5
// const limpar = document.getElementById('clear-board');
// limpar.addEventListener('click', (event) => {
//     const pixel = document.querySelectorAll('.pixel');
//     pixel.forEach(pixels => {
//         pixels.style.backgroundColor = '';
//     });
// });

//Salvar a quantidade do valor e alerta de menor que 5 e maior que 50.
function inputQuadro() {
    const generateBoard = document.getElementById('generate-board');
    generateBoard.addEventListener('click', () => {
        const textInput = parseInt(document.getElementById('board-size').value);

        if (textInput < 5 || textInput > 50) {
            alert('Por favor digite um número entre 5 e 50!');
            return;
        }

        textInput = localStorage.setItem('number', JSON.stringify(textInput));
    })

    const storedValue = localStorage.getItem('number');
    if (storedValue) {
        document.getElementById('board-size').value = JSON.parse(storedValue);
    }
}
inputQuadro();


