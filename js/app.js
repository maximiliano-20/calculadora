
// Variables
const inputFactura = document.querySelector('#factura');
const porcentajePropina = document.querySelectorAll('.porcentaje');
const inputPersonas =  document.querySelector('#personas');
const inputReset = document.querySelector('#reset');
let inputPropina = document.querySelector('#propina');
let inputTotal = document.querySelector('#total');


// Valores por Defecto
let valorFactura = 0.0;
let valorPersona = 1;
let propinaValor = 0.15;



// Eventos
inputFactura.addEventListener('input',datosFactura);
inputPersonas.addEventListener('input',datosPersonas);
inputReset.addEventListener('click',resetDatos);

porcentajePropina.forEach(e =>{
    console.log(e);
    e.addEventListener('click',datosPropina);
});


// Funciones
function datosPropina(evento){
    porcentajePropina.forEach( e => {
        if(evento.target.innerHTML === e.innerHTML ){
           propinaValor = (parseInt(e.innerHTML) / 100);
        }
    })
    calcular();
}



function datosFactura(){
    valorFactura = parseInt(inputFactura.value);
    calcular();
}

function datosPersonas(){
   valorPersona =  parseInt(inputPersonas.value);
   calcular();
}

function calcular(){
    let totalPropina = (valorFactura + propinaValor) / valorPersona;
    inputPropina.innerHTML = `$${totalPropina}`;
    let total  = (valorFactura + totalPropina) / valorPersona;
    inputTotal.innerHTML = `$${total}`;
}


function resetDatos(){
    inputPropina.innerHTML = "$0.0";
    inputTotal.innerHTML = "$0.0";
}
