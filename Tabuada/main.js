// Seleção de elementos
const formInput = document.querySelector('#multiplication-form');
const multiplicateTable = document.querySelector('#multiplication-operations');
const multiplicateTableSpan = document.querySelector('#multiplication-title span');

let number = document.querySelector('#number');
let multiplicator = document.querySelector('#multiplicator');


//Funções
function createtable(number, multiplicador){
    multiplicateTable.innerHTML = "";

    for (let i = 1; i <= multiplicador; i++) {
        const result = number * i;

        const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
         </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row")
        
        multiplicateTable.appendChild(row)
        multiplicateTableSpan.innerHTML = ` ${i}`
    };

};

//Eventos

formInput.addEventListener('submit', (e)=>{
    e.preventDefault();

    const multiplicado = number.value
    const multiplicador = multiplicator.value


    if(!multiplicador || !multiplicador){
        console.error(alert('Informe os dois valores'));
    }
    else{
        createtable(multiplicado, multiplicador)
    }

});