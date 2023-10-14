const imgOff = document.querySelector('.off');
const imgOn = document.querySelector('.on');
const imgBroken = document.querySelector('.broken');

const btnOn = document.querySelector('.ligar');
const btnOff = document.querySelector('.desligar'); 
const Imgs = document.querySelector('.imgs')


btnOn.addEventListener('click', function(){
    imgOff.classList.add('hide')
    imgOn.classList.remove('hide')
    imgBroken.classList.add('hide')
    Imgs.classList.remove('hide')
})

btnOff.addEventListener('click', function(){
    imgOff.classList.remove('hide')
    imgOn.classList.add('hide')
    imgBroken.classList.add('hide')
    Imgs.classList.remove('hide')
})

Imgs.addEventListener('mouseover', function(){
    imgOff.classList.add('hide')
    imgOn.classList.remove('hide')

})

Imgs.addEventListener('mouseout', function(){
    imgOff.classList.remove('hide')
    imgOn.classList.add('hide')

})

imgOn.addEventListener('dblclick', function(){
    imgBroken.classList.remove('hide')
    Imgs.classList.add('hide')
})
