const formulario__campo = document.querySelector(".formulario__campo");

const main = document.querySelector(".main");
const mostar1 = document.querySelector(".monto1")
const mostar2 = document.querySelector(".monto2")
const mostar3 = document.querySelector(".monto3")
let total = 0;
const monto = document.querySelector(".monto__ingreso");
const monto_boton = document.querySelector(".monto__boton-ingreso")

const mostar_retiro = document.querySelector(".monto__retiro");
const retiro_boton = document.querySelector(".monto__boton-retiro")

const mostar_saldo = document.querySelector(".monto__saldo");
const mostrar_boton = document.querySelector(".monto__boton-saldo")

const black = document.querySelector(".black_boton");





formulario__campo.addEventListener("change",visivilidad);


function visivilidad() {
    switch (formulario__campo.value) {

        case 'ingreso':
            mostar1.classList.toggle("visibility");
            mostar2.classList.add("visibility");
            mostar3.classList.add("visibility");

            break

        case 'retiro':
            mostar2.classList.toggle("visibility");
            mostar1.classList.add("visibility");
            mostar3.classList.add("visibility");
            break

        case 'saldo':
            mostar3.classList.toggle("visibility");
            mostar2.classList.add("visibility");
            mostar1.classList.add("visibility");
            break

    }
}


monto_boton.addEventListener("click", ingreso);
retiro_boton.addEventListener("click", retiro);

function ingreso() {
    total = total + parseFloat(monto.value)
    return total;
}

function retiro() {
    total = total - parseFloat(mostar_retiro.value)
}


mostrar_boton.addEventListener("click", function () {
    mostar_saldo.value = total;
})




black.addEventListener("click",function () {
    main.classList.toggle("black")
})