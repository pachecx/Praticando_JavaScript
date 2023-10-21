const textInput = document.querySelector('#text');
const text = document.querySelector('.text');
const btnInput = document.querySelector('#btn');
const qrCodeHide = document.querySelector('.code');
const imgQr = document.querySelector('.img')

function gerarQr(){
    const textInputValue = textInput.value;

    if(!textInputValue)
    return;

    text.textContent="Gerando Codigo...";

    imgQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textInputValue}`

    imgQr.addEventListener('load',()=>{
    
        qrCodeHide.classList.remove('hide');
        text.textContent="Código Criado!";
    });
}

btnInput.addEventListener('click', gerarQr);

textInput.addEventListener('keydown',(e)=>{
    if(e.code === "Enter"){
        gerarQr();
    }
});