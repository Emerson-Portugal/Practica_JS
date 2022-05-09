const ingresar = document.querySelector(".start__ingresar");
const monto = document.querySelector(".ingresar");
const saldoTotal = document.querySelector(".saldo");
const mostrarSaldo = document.querySelector(".start__saldo");
const mostrarRetiro = document.querySelector(".retiro");
const retiro = document.querySelector(".start__retiro");




ingresar.addEventListener("click", montoTotal);
retiro.addEventListener("click", restaTotal);
let total = 0;

mostrarSaldo.addEventListener("click", function () {
    saldoTotal.value = total;
})


function montoTotal() {
    total = parseFloat(total) + parseFloat(monto.value)
}

function restaTotal() {
    total = parseFloat(total) - parseFloat(mostrarRetiro.value) 
}