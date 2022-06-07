
var numeroAtual = 0;
var numeroHtml = document.getElementById("valor");

function acrescentar(){
    numeroAtual = numeroAtual+1;
    numeroHtml.innerHTML = numeroAtual
    if(numeroAtual==10){
        numeroAtual = numeroAtual -1;
        alert("Sorry! :( nosso contador só vai até 10.");
        
    }
}

function diminuir(){
    numeroAtual = numeroAtual-1;
    numeroHtml.innerHTML = numeroAtual;

    if (numeroAtual <= 2){
        numeroAtual = numeroAtual +1;
        alert("Sorry! :( sem números negativos por aqui.");

    }
}
