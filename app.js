// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
let indiceGenerado = 99999;


function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);
    if(nombreAmigo == ""){
        alert("Por favor, inserte un nombre.")   
    }else {
        listaDeAmigos.push(nombreAmigo);
        console.log(listaDeAmigos);
        document.querySelector('#amigo').value='';
        actualizaListaAmigos();
    }
}

function actualizaListaAmigos(){
    //listaAmigos
    let elementoHTML = document.querySelector('#listaAmigos');
        elementoHTML.innerHTML = "";

        for (let i=0; i< listaDeAmigos.length; i++){
            let li =document.createElement("li");
            li.textContent = listaDeAmigos[i];
            document.getElementById("listaAmigos").appendChild(li);
        }
}

function sortearAmigo(){
    if(listaDeAmigos.length>0){
        console.log("hay uno o mas de uno");

        generaIndice();
        console.log(listaDeAmigos[indiceGenerado]);
        visualizaGanador();

    } else {
        alert("La lista esta vacia, por favor ingrese nombres de amigos");
    }
    
}

    function  generaIndice(){
        console.log("primero " + indiceGenerado);
        while (indiceGenerado > listaDeAmigos.length){
            indiceGenerado = Math.floor(Math.random()*10);
            console.log(indiceGenerado);
        }
}
function visualizaGanador(){
    let elementoHTML = document.querySelector('#resultado');
    elementoHTML.innerHTML = listaDeAmigos[indiceGenerado];
}