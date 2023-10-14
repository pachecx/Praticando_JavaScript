const imgOff = document.querySelector('.off');
const imgOn = document.querySelector('.on');
const imgBroken = document.querySelector('.broken');

const btnOn = document.querySelector('.ligar');
const btnBroken = document.querySelector('.desligar'); 


btnOn.addEventListener('click', function(){
    imgOff.classList.add('hide')
    imgOn.classList.remove('hide')
})