const Form = document.querySelector('.form');
let Nome = document.querySelector('#name');
let Altura = document.querySelector('#altura');
let Peso = document.querySelector('#peso');
let Btn = document.querySelector('.btn');
let Texto = document.querySelector('.texto');


function IMC(){
    let nome = Nome.value 
    let peso = Number(Peso.value)
    let altura = Number(Altura.value)

    let imc = peso/(altura**2)


    if(imc < 18 ){
     Texto.textContent = `Olá ${nome}, o valor do IMC é de ${imc.toFixed(2)}, você esta abaixo do peso.`
    
    }

    else if(imc < 24.9){
     Texto.textContent = `Olá ${nome}, o valor do IMC é de ${imc.toFixed(2)}, você esta no peso ideal.`
    }

    else{
        Texto.textContent = `Olá ${nome}, o valor do IMC é de ${imc.toFixed(2)}, você esta acima do peso ideal.`
    }
}

Btn.addEventListener('click', function(){
    IMC()
})
