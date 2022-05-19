
const encuesta = [
    {
        pregunta: 'Cuando fue la independecia del Peru?',
        a: '1965',
        b: '1975',
        c: '1979',
        d: '1811',
        respuesta: 'd'
    },
    {
        pregunta: 'Que año Peru regreso al Mundial?',
        a: '2000',
        b: '2010',
        c: '2018',
        d: '2573',
        respuesta: 'c'
    },
    {
        pregunta: 'Cuantos años tiene Emerson?',
        a: '18',
        b: '20',
        c: '23',
        d: '50',
        respuesta: 'b'
    },
    {
        pregunta: 'Crees que Emerson logre emprender?',
        a: 'Si',
        b: 'No',
        c: 'Es un gil',
        d: 'N.A',
        respuesta: 'a'
    }

]

// Aqui vamos a modificar el contenido en el Frontend

boton = document.querySelector(".btn-primary");
radio = document.querySelectorAll(".answer");
titulo = document.querySelector(".title")
title_primary = document.querySelector(".title_primary")
a_text = document.querySelector("#a_text");
b_text = document.querySelector("#b_text");
c_text = document.querySelector("#c_text");
d_text = document.querySelector("#d_text");
let i = 0;
let y = 0;
boton.addEventListener("click", modificar)

desmarcar()
modificar()
function modificar() {
    getSelected()
    desmarcar();


    if (encuesta.length > i) {

        titulo.textContent = encuesta[i].pregunta;
        a_text.textContent = encuesta[i].a;
        b_text.textContent = encuesta[i].b;
        c_text.textContent = encuesta[i].c;
        d_text.textContent = encuesta[i].d;
        boton.textContent = "Siguiente";
        i++;
        title_primary.textContent = `Pregunta: ${i}`;
        if (i ==4){
            i = 0    
            boton.textContent = "Empezar de Nuevo";

        }
    }



}

function desmarcar() {
    for (let j = 0; j < encuesta.length; j++) {
        radio[j].checked = false;
    }
}

function correcto() {

    swal ( "Tu espuesta es correcta!!")

}
function error() {

    swal ( "Tu espuesta es incorrecta!!")

}



function getSelected() {


    radio.forEach((answerEl) => {
        if (answerEl.checked) {
            if (answerEl.id === encuesta[y].respuesta) {
               setTimeout(correcto, 100)
                y++
                if (y ==4){
                    y = 0    
                }

            }
            else{
                y++
                setTimeout(error, 100)
                if (y ==4){
                    y = 0    
                }
            }
        }
    });

    /*     for (var key in encuesta[0]) {
      
            console.log(key);
        } */

}

