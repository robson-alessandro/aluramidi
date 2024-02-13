
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento == null) {
        alert('elemento não encontrado')
    }

    if ( elemento  && elemento.localName === 'audio'){
            elemento.play();
        
    }else{
        alert('elemento não encontrado')
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');
 

/*
let contador = 0;

while(contador< listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);   
    } 

    contador= contador+1;
}*/

for(let contador = 0 ; contador<listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);   
    } 

    tecla.onkeydown = function (evento) {
        console.log(evento);
        if(evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
        

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');

    }
}
