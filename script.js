// ==========================
// ENTRAR AL UNIVERSO
// ==========================

function entrar(){

    const inicio = document.getElementById("inicio");
    const pagina = document.getElementById("pagina");


    inicio.style.opacity = "0";


    setTimeout(()=>{

        inicio.style.display="none";

        pagina.style.opacity="1";


    },1500);


    crearCorazones();

}



// ==========================
// ESTRELLAS
// ==========================


const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");


function ajustarCanvas(){

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}


ajustarCanvas();



let estrellas=[];



function crearEstrellas(){


    estrellas=[];


    let cantidad = window.innerWidth < 600 ? 100 : 180;



    for(let i=0;i<cantidad;i++){


        estrellas.push({

            x:Math.random()*canvas.width,

            y:Math.random()*canvas.height,

            tamaño:Math.random()*2+0.5,

            velocidad:Math.random()*0.4+0.1


        });


    }

}



crearEstrellas();





function animarEstrellas(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.fillStyle="white";



    estrellas.forEach(e=>{


        ctx.beginPath();


        ctx.arc(
            e.x,
            e.y,
            e.tamaño,
            0,
            Math.PI*2
        );


        ctx.fill();



        e.y += e.velocidad;



        if(e.y > canvas.height){

            e.y=0;

            e.x=Math.random()*canvas.width;

        }



    });



    requestAnimationFrame(animarEstrellas);


}



animarEstrellas();




window.addEventListener(
"resize",
()=>{

    ajustarCanvas();

    crearEstrellas();

});







// ==========================
// CONTADOR DE MIA
// INICIO: 20 DE NOVIEMBRE 2025
// ==========================


const fechaInicio = new Date(
    "2025-11-20T00:00:00"
);



function actualizarTiempo(){


    const ahora = new Date();



    const diferencia = ahora - fechaInicio;



    const dias = Math.floor(
        diferencia /
        (1000*60*60*24)
    );



    const horas = Math.floor(
        (diferencia /
        (1000*60*60)) % 24
    );



    const minutos = Math.floor(
        (diferencia /
        (1000*60)) % 60
    );



    const segundos = Math.floor(
        (diferencia /
        1000) % 60
    );



    document.getElementById("tiempo").innerHTML =

    `${dias} días 💜 ${horas} horas ✨ ${minutos} minutos 🌙 ${segundos} segundos`;



}



setInterval(
actualizarTiempo,
1000
);


actualizarTiempo();







// ==========================
// ABRIR CARTA
// ==========================


function abrirCarta(){


    const carta =
    document.getElementById("carta");


    carta.classList.toggle("activa");


}







// ==========================
// CORAZONES
// ==========================


let corazonesActivos=false;



function crearCorazones(){


    if(corazonesActivos) return;


    corazonesActivos=true;



    setInterval(()=>{


        const corazon =
        document.createElement("div");



        corazon.className="corazon";


        corazon.innerHTML="💜";



        corazon.style.left =
        Math.random()*100+"vw";



        corazon.style.animationDuration =

        (5 + Math.random()*5)+"s";



        document
        .querySelector(".corazones")
        .appendChild(corazon);




        setTimeout(()=>{


            corazon.remove();


        },8000);



    },800);



}







// ==========================
// BOTÓN SORPRESA
// ==========================


function sorpresa(){



    for(let i=0;i<35;i++){



        const corazon =
        document.createElement("div");



        corazon.className="corazon";


        corazon.innerHTML =
        "💖";



        corazon.style.left =
        Math.random()*100+"vw";



        corazon.style.animationDuration =
        "3s";



        document
        .querySelector(".corazones")
        .appendChild(corazon);



        setTimeout(()=>{


            corazon.remove();


        },3000);



    }



    alert(
    "Mia 💜 gracias por ser mi universo, mi novia y compañera ✨"
    );


}

