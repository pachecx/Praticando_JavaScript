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

btnAu.addEventListener('click', function(){
    auto()
})

function auto(){
    i = 0;
    if(i <= 2){
        setTimeout(() => {
            vermelho()
            console.log('1')
        }, 1000);
            
        setTimeout(() => {
            amarelo()
            console.log('2')
        }, 2000);
        
        setTimeout(() => {
            verde()
            console.log('3')
            auto()
        }, 3000);
    }

    else{
        console.log('parou')
    }
        
    for (let i = 0; i <= 3; i++) {
        console.log(`teste ${i}`) 
    }

    
}