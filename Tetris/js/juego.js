var canvas;
var ctx;
var FPS = 50;

var anchoCanvas = 400;
var altoCanvas = 640;

var anchoTablero = 10;
var altoTablero = 16;

var anchoFicha = 40;
var altoFicha = 40;

//tablero de (12x17) pero en pantalla mostraremos 10x16
var tablero = [
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];

var pieza;

var objPieza = function(){
    this.x = 0;
    this.y = 0;

    console.log('Estoy vivo!');
};

function inicializaTeclado(){
    document.addEventListener('keydown', function(tecla){
        if(tecla.keyCode == 38){
            console.log('arriba');
        }

        if(tecla.keyCode == 40){
            console.log('abajo');
        }

        if(tecla.keyCode == 37){
            console.log('derecha');
        }

        if(tecla.keyCode == 39){
            console.log('izquierda');
        }

       
    });
}

function inicializa(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;

    pieza =  new objPieza();

    inicializaTeclado();

    setInterval(function(){
        principal();
    }, 1000/FPS);
}

function borrarCanvas(){
    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;
}

 
function principal(){
    borrarCanvas();    
}