
let aparicionPag1 = document.querySelector(".pagina1");
let aparicionPag2 = document.querySelector(".pagina2");
let aparicionPag3 = document.querySelector(".pagina3");
let aparicionPag4 = document.querySelector(".pagina4");
let aparicionPag5 = document.querySelector(".pagina5");
let aparicionPag6 = document.querySelector(".pagina6");

// declaramos todas las paginas con el querySelector para que luego sea menos codigo.

// abrimos funcion para que aparezca pagina 1 a los 2 segundos:

function aparicionPagina1(){
    aparicionPag1.style.display="flex";
}

setTimeout(aparicionPagina1, 2000);

// abrimos funcion para que aparezca pagina 2:

let boton1 = document.getElementById("next1");

boton1.addEventListener('click', aparicionPagina2);

function aparicionPagina2(){
    aparicionPag1.style.display="none";
    aparicionPag2.style.display="flex";
}

// abrimos funcion para que aparezca pagina 3:

let boton2 = document.getElementById("next2");

boton2.addEventListener('click', aparicionPagina3);

function aparicionPagina3(){
    aparicionPag1.style.display="none";
    aparicionPag2.style.display="none";
    aparicionPag3.style.display="flex";
}

// abrimos funcion para que aparezca pagina 4:

let boton3 = document.getElementById("next3");

boton3.addEventListener('click', aparicionPagina4);

function aparicionPagina4(){
    aparicionPag1.style.display="none";
    aparicionPag2.style.display="none";
    aparicionPag3.style.display="none";
    aparicionPag4.style.display="flex";
}

// abrimos funcion para que aparezca pagina 5:

let start = document.getElementById("startPlay");

start.addEventListener('click', aparicionPagina5);

function aparicionPagina5(){
    aparicionPag1.style.display="none";
    aparicionPag2.style.display="none";
    aparicionPag3.style.display="none";
    aparicionPag4.style.display="none";
    aparicionPag5.style.display="flex";
}

// especificaciones animacion "videojuego":

let enter1 = document.addEventListener('keyup', animacion);
let donuts = document.getElementById("donuts");
let animacionBackground = document.querySelector(".pagina5");
let homer = document.getElementById("homer");

function animacion(){
    donuts.style.animationPlayState = "running";
    animacionBackground.style.animationPlayState = "running";
    homer.style.animationPlayState = "running";

}

let contador = document.getElementById("contador");
let puntos = 0;

let enter2 = document.addEventListener('keyup', function(event) {
    if (event.code === 'Space'){
        colisionHomerDonut();
        let audio = new Audio("short-success-sound-glockenspiel-treasure-video-game-6346.mp3");
        audio.play();
    }
});

function colisionHomerDonut(){
    puntos++;
    contador.innerText = "Puntos: " + puntos;

    if (puntos >= 10){
        aparicionPagina6();
    }
}

// abrimos funcion para que aparezca pagina 6 al llegar a 10 puntos:

function aparicionPagina6(){
    aparicionPag1.style.display="none";
    aparicionPag2.style.display="none";
    aparicionPag3.style.display="none";
    aparicionPag4.style.display="none";
    aparicionPag5.style.display="none";
    aparicionPag6.style.display="flex";
}

let reiniciar = document.getElementById("reinicio");

reiniciar.addEventListener('click', reinicio);

function reinicio(){
    location.reload();
}

