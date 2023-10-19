const imgRed = document.querySelector('.vermelho');
const imgYe = document.querySelector('.amarelo');
const imgGre = document.querySelector('.verde');
const imgAu = document.querySelector('.desligado');

const btnRed = document.querySelector('.btnRed');
const btnYe = document.querySelector('.btnYe');
const btnGre = document.querySelector('.btnGre');
const btnAu = document.querySelector('.btnAu');

btnRed.addEventListener('click', function(){
   vermelho()
})

btnYe.addEventListener('click', function(){
    amarelo()
})

btnGre.addEventListener('click', function(){
    verde()
})

function vermelho(){
    imgRed.classList.remove('hide')

    imgYe.classList.add('hide')
    imgGre.classList.add('hide')
    imgAu.classList.add('hide')
}

function amarelo(){
    imgYe.classList.remove('hide')
    
    imgRed.classList.add('hide')
    imgGre.classList.add('hide')
    imgAu.classList.add('hide')
}

function verde(){
    imgGre.classList.remove('hide')
    
    imgYe.classList.add('hide')
    imgRed.classList.add('hide')
    imgAu.classList.add('hide')
}

let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
    if (event && event.target && event.target.id in turnOn) {
        stopAutomatic();
        turnOn[event.target.id]();
    }
};

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
};

const stopAutomatic = () => {
    clearInterval(intervalId);
};

const turnOn = {
    'red': () => img.src = './assets/vermelho.png',
    'yellow': () => img.src = './assets/amarelo.png',
    'green': () => img.src = './assets/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
};

btnAu.addEventListener('click', trafficLight);