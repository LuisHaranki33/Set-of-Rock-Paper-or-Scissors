let puntosUsuario=0;
let puntosPC=0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuarios = document.querySelector("#puntos-usuarios");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#ganar-punto");
let elegirTuArma = document.querySelector("#elegir-tu-arma"); 

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton=>{
    boton.addEventListener("click",iniciarTurno);
});

function iniciarTurno(e){
    let eleccionPC = Math.floor(Math.random()*3);
    let eleccionUsuario = e.currentTarget.id;
        
    //piedra => 0
    //papel =>1
    //tijera =>2

    if(eleccionPC===0){
        eleccionPC = "piedra🥌";
    }else if (eleccionPC===1) {
        eleccionPC = "papel📋"
    } else if(eleccionPC===2){
        eleccionPC="tijeras✂"
    }
    console.log(eleccionPC);
    console.log(eleccionUsuario);
    if(
        ((eleccionUsuario==="piedra🥌" && eleccionPC==="tijeras✂")|| 
        (eleccionUsuario==="tijeras✂" && eleccionPC==="papel📋")||
        (eleccionUsuario==="papel📋" && eleccionPC==="piedra🥌"))
    ){
        ganaUsuario();

    }else if(
        ((eleccionPC==="piedra🥌" && eleccionUsuario==="tijeras✂")|| 
        (eleccionPC==="tijeras✂" && eleccionUsuario==="papel📋")||
        (eleccionPC==="papel📋" && eleccionUsuario==="piedra🥌"))
    ){

        ganaPC();

    }else{
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText=eleccionUsuario;
    contenedorEleccionPC.innerText=eleccionPC;

    if (puntosUsuario ===5 || puntosPC===5){
        if(puntosUsuario===5){
            instrucciones.innerText ="🔥¡GANASTE EL JUEGO!🔥"
        }else if(puntosPC===5){
            instrucciones.innerText ="😢😢PERDISTE😢😢"
        }
        elegirTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click",reiniciarjuego);
    }
}

function ganaUsuario(){
    puntosUsuario++;
    contenedorPuntosUsuarios.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "Ganaste 1 punto 🔥👍";
}

function ganaPC(){
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "La PC Gano un punto 😢";
}

function empate(){
    contenedorGanaPunto.innerText =" Empate 😒"
}


function reiniciarjuego(){
    reiniciar.classList.add("disabled");
    elegirTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPC = 0;
    
    contenedorPuntosUsuarios.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText ="El primero en llegar a 5 puntos gana";
}