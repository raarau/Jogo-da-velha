
var jogador = null;

var venceu = false;

var vencedor;

var jogadorSelecionado = document.getElementById('jogador-selecionado');

var jogadorVencedor = document.getElementById('vencedor-selecionado');

var contador = 0;

mudarJogador('X');

function reiniciarJogo(){
    venceu = false;
    vencedor = null;
}

function selecionarQuadrado(id){

    if (venceu === false) {
        
        var quadrado = document.getElementById(id);

        if (quadrado.innerHTML !== '-') {
            return;
        }

        if (mudarCorQuadrado === true) {
            venceu = true;
        }

        quadrado.innerHTML = jogador;
        quadrado.style.color = '#000';

            if (jogador === 'X') {
                jogador = 'O';
            }else{
                jogador = 'X';
            }
        contador++;    

        mudarJogador(jogador);

        checaVencedor();

    }
    
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function addVencedor(valor){
    if (contador === 9) {
        deuVelha();
    }else{
        jogador = valor.innerHTML;
        jogadorVencedor.innerHTML = jogador;
        alert('Parabéns!\nJogador: "'+jogador+'" Venceu!');
    }
}

function deuVelha(){
    jogadorVencedor.innerHTML = '-';
}

function checaVencedor(){

    quadrado1 = document.getElementById('1');
    quadrado2 = document.getElementById('2');
    quadrado3 = document.getElementById('3');
    quadrado4 = document.getElementById('4');
    quadrado5 = document.getElementById('5');
    quadrado6 = document.getElementById('6');
    quadrado7 = document.getElementById('7');
    quadrado8 = document.getElementById('8');
    quadrado9 = document.getElementById('9');

    
    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        venceu = true;
        var jogadorVencedor = quadrado1;
        addVencedor(jogadorVencedor);
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        venceu = true;
        var jogadorVencedor = quadrado4;
        addVencedor(jogadorVencedor);
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        venceu = true;
        var jogadorVencedor = quadrado7;
        addVencedor(jogadorVencedor);
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        venceu = true;
        var jogadorVencedor = quadrado1;
        addVencedor(jogadorVencedor);
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        venceu = true;
        var jogadorVencedor = quadrado2;
        addVencedor(jogadorVencedor);
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        venceu = true;
        var jogadorVencedor = quadrado3;
        addVencedor(jogadorVencedor);
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        venceu = true;
        var jogadorVencedor = quadrado1;
        addVencedor(jogadorVencedor);
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        venceu = true;
        var jogadorVencedor = quadrado3;
        addVencedor(jogadorVencedor);
    }

    if (contador === 9) {
        mudarQuadradoVelha(quadrado1, 
                           quadrado2, 
                           quadrado3, 
                           quadrado4,
                           quadrado5,
                           quadrado6,
                           quadrado7,
                           quadrado8,
                           quadrado9);
        addVencedor();                  
        alert('Deu velha!\nInfelizmente não tivemos vencedores =(');
    }

}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
        quadrado1.style.background = '#00ff00';
        quadrado2.style.background = '#00ff00';
        quadrado3.style.background = '#00ff00';
}

function mudarQuadradoVelha(quadrado1, 
                            quadrado2, 
                            quadrado3, 
                            quadrado4,
                            quadrado5,
                            quadrado6,
                            quadrado7,
                            quadrado8,
                            quadrado9
                            ){
    quadrado1.style.background = '#ff4040';
    quadrado2.style.background = '#ff4040';
    quadrado3.style.background = '#ff4040';
    quadrado4.style.background = '#ff4040';
    quadrado5.style.background = '#ff4040';
    quadrado6.style.background = '#ff4040';
    quadrado7.style.background = '#ff4040';
    quadrado8.style.background = '#ff4040';
    quadrado9.style.background = '#ff4040';
    quadrado1.style.color = '#f5f5f5';
    quadrado2.style.color = '#f5f5f5';
    quadrado3.style.color = '#f5f5f5';
    quadrado4.style.color = '#f5f5f5';
    quadrado5.style.color = '#f5f5f5';
    quadrado6.style.color = '#f5f5f5';
    quadrado7.style.color = '#f5f5f5';
    quadrado8.style.color = '#f5f5f5';
    quadrado9.style.color = '#f5f5f5';
}


function checaSequencia(quadrado1, quadrado2, quadrado3){
    var eIgual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML & quadrado3.innerHTML === quadrado2.innerHTML){
        eIgual = true;
    }
    return eIgual;
}