
// Fechas por valor 
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const mins = document.querySelector('#mins');
const seconds = document.querySelector('#seconds');

const boton = document.querySelector(".boton");
const boton2 = document.querySelector(".boton-s");
let nIntervId;

boton.addEventListener('click', function (e) {
    e.preventDefault();
    total();
    nIntervId = setInterval(total,500); 
})

boton2.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(nIntervId); 
})


function total() {
    const date_actual = new Date();
    const nacimiento = document.querySelector('#fecha').value;
    const date_nacimiento = new Date(nacimiento);
    date_nacimiento.setDate(date_nacimiento.getDate() + 2);


    let Days = Math.floor(date_nacimiento - date_actual);
    Days = Math.floor(Days / (1000 * 60 * 60 * 24))
    days.innerHTML = Days

    let Hours = Math.floor(date_nacimiento - date_actual);
    Hours = Math.floor(Hours / (1000 * 60 * 60))
    hours.innerHTML = Hours

    let Minutes = Math.floor(date_nacimiento - date_actual);
    Minutes = Math.floor(Minutes / (1000 * 60))
    mins.innerHTML = Minutes

    let Seconds = Math.floor(date_nacimiento - date_actual);
    Seconds = Math.floor(Seconds / (1000))
    seconds.innerHTML = Seconds
}

