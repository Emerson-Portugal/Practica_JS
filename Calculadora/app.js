const boton = document.querySelector(".formulario__submit");
const boton2 = document.querySelector(".formulario__color");
let valor1 = document.querySelector(".valor1");
let valor2 = document.querySelector(".valor2");

boton.addEventListener("click", function() {
    const formulario = document.querySelector(".formulario__campo").value;
    operacion(formulario);
});

boton2.addEventListener("click", function(e) {
    e.preventDefault();
    const fondo= document.querySelector(".fondo")
    fondo.classList.toggle("fondo_back")

})

function operacion(valor) {
    switch (valor) {
        case 'suma':
        alert(parseInt(valor1.value)+ parseInt(valor2.value))
            break;
        case 'resta':
            alert(parseInt(valor1.value)- parseInt(valor2.value))
            break;
        case 'multiplicacion':
            alert(parseInt(valor1.value)* parseInt(valor2.value))
            break;
        case 'division':
            alert(parseInt(valor1.value)/ parseInt(valor2.value))
            break;

    }

}





