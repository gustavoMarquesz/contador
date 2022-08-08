
let numeroAtual = 0;
let numeroHtml = document.getElementById("valor");

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

    if (numeroAtual < 0){
        numeroAtual = numeroAtual +1;
        numeroHtml.innerHTML = numeroAtual;
        alert("Sorry! :( sem números negativos por aqui.");
    }
}
