const imgRed = document.querySelector('.vermelho');
const imgYe = document.querySelector('.amarelo');
const imgGre = document.querySelector('.verde');
const imgAu = document.querySelector('.desligado');

const btnRed = document.querySelector('.btnRed');
const btnYe = document.querySelector('.btnYe');
const btnGre = document.querySelector('.btnGre');
const btnAu = document.querySelector('.btnAu');

btnRed.addEventListener('click', function(){
    imgRed.classList.remove('hide')

    imgYe.classList.add('hide')
    imgGre.classList.add('hide')
    imgAu.classList.add('hide')
})

btnYe.addEventListener('click', function(){
    imgYe.classList.remove('hide')
    
    imgRed.classList.add('hide')
    imgGre.classList.add('hide')
    imgAu.classList.add('hide')
})

btnGre.addEventListener('click', function(){
    imgGre.classList.remove('hide')
    
    imgYe.classList.add('hide')
    imgRed.classList.add('hide')
    imgAu.classList.add('hide')
})

btnAu.addEventListener('click', auto())

function auto(){
    setTimeout(() => {
        

    }, 2000);
}