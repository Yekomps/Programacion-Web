$(document).ready(function(){
   

    var canvas = document.getElementById('Cam');

    var ctx =  canvas.getContext("2d");

    canvas.width =  window.innerWidth;
    canvas.height = window.innerHeight;

    //dibujar un fofo

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);


    var canvasx  = Math.abs(canvas.width / 10).toFixed(0);
    var canvasy = Math.abs(canvas.height / 10).toFixed(0);


    var matrix = [];

    function randomMatriz(){

        for(var i = 0; i < canvasx; i++){

            matrix[i] = [];

            for(var j = 0; j < canvasy; j++){
                
                matrix[i][j] = Math.floor(Math.random() * 2);

            }
        }
        
    }

    function ClearMatrix(){

        for(var i = 0; i < canvasx; i++){

            matrix[i] = [];

            for(var j = 0; j < canvasy; j++){
                
                matrix[i][j] = 0;

            }
        }
        
    }

    function renderMatriz(){

        
        for(var i = 0;i < canvasx;i++){

            for(var j = 0;j < canvasy;j++){

                if(matrix[i][j] == 0){

                    ctx.fillStyle  = "black";
                    ctx.fillRect(i*10,j*10,10,10);

                }else{

                    ctx.fillStyle  = "white";
                    ctx.fillRect(i*10,j*10,10,10);

                }

            }

        }

    }

    function dibujarGrid(){

        for (let i = 0; i < canvas.width; i+=10) {
            ctx.beginPath();
            ctx.moveTo(i,0);
            ctx.lineTo(i,canvas.height);
            ctx.strokeStyle = "white";
            ctx.lineWidth = 0.1;
            ctx.stroke();
        }

        for (let i = 0; i < canvas.height; i+=10) {
            ctx.beginPath();
            ctx.moveTo(0,i);
            ctx.lineTo(canvas.width,i);
            ctx.strokeStyle = "white";
            ctx.lineWidth = 0.1;
            ctx.stroke();
        }

        


        
    }

    var game ={

        level:1
    }

    var jugador = {
        x:1,
        y:1,
        dir:0,
        dirAnt:0,
        tam:1,
        puntos:0,
        val:20,
        tiempo:0,
        matrizCola:[],
        xAnt:0,
        yAnt:0
    }

    var puntoComida = {
        x:0,
        y:0,
        comida:1
    }

    function crearComid(){

        puntoComida.x =  Math.floor(Math.random() * canvasx);
        puntoComida.y = Math.floor(Math.random() * canvasy);

    }

    function renderComid(){

        if(puntoComida.comida == 1){

            matrix[puntoComida.x][puntoComida.y] = 1;
        }

    }

    function renderizadorJugador(){
        
        if(jugador.dir == 1){

            if(jugador.dirAnt == 3){

                jugador.dir = 3;

            }else{

                jugador.x++;
            }

        }

        if(jugador.dir == 3){

            if(jugador.dirAnt == 1){

                jugador.dir = 1;

            }else{

                jugador.x--;
            }

        }


        if(jugador.dir == 0){

            if(jugador.dirAnt == 2){

                jugador.dir = 2;

            }else{

                jugador.y--;
            }

        }


        if(jugador.dir == 2){

            if(jugador.dirAnt == 0){

                jugador.dir  = 0;

            }else{

                jugador.y++;
            }


        }



        jugador.dirAnt = jugador.dir;


        //dibujar cola

        for(let i =0; i < jugador.matrizCola.length;i++){

            ///matrix[jugador.matrizCola[i].x][jugador.matrizCola[i].y] =  1;

            let x =  jugador.matrizCola[i][0];
            let y = jugador.matrizCola[i][1];

            matrix[x][y] = 1;
        }


        //recorrecomos la matriz


        for(let i = 0; i < jugador.matrizCola.length;i++){

            if(i == jugador.matrizCola.length-1){

                jugador.matrizCola[i][0] = jugador.xAnt;
                jugador.matrizCola[i][1] =  jugador.yAnt;


            }else{

                jugador.matrizCola[i][0] = jugador.matrizCola[i+1][0];
                jugador.matrizCola[i][1] =  jugador.matrizCola[i+1][1];


            }

        }


        if(jugador.x > canvasx-1){
            
            jugador.x = 0;

        }else if(jugador.x < 0){

            jugador.x = canvasx-1;

        }else if(jugador.y > canvasy-1){
            jugador.y = 0;

        }else if(jugador.y < 0){
            
           jugador.y = canvasy-1;

        }


        //console.log(jugador.x,jugador.y);

        matrix[jugador.x][jugador.y] = 1;


        if(jugador.x == puntoComida.x  && jugador.y == puntoComida.y){

            console.log("Comiendo");
            crearComid();

            jugador.matrizCola.push([jugador.xAnt,jugador.yAnt]);

            jugador.puntos =  jugador.puntos + 1;
            console.log(jugador.matrizCola);
            console.log(jugador.puntos);

        }


        jugador.xAnt =  jugador.x;
        jugador.yAnt =  jugador.y;

    }

    function rendereizaPuntos(){

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";

        ctx.fillText("Score:" + jugador.puntos,20,30);

    }


    ClearMatrix();       
        
    crearComid();

    setInterval(function(){
       //pone la matriz en 0
        ClearMatrix();

     
        //agrega un valor de comida aleatorio
        //
        //agrega 1 a esa posicion
        renderComid();

        renderizadorJugador();

       //renderiza la capa matriz
       renderMatriz();  

       //renderiza en la capa canvas
       dibujarGrid();   

       rendereizaPuntos();
        

    },100);

    document.addEventListener("keydown",function(e){

        //console.log(e.keyCode);
        if(e.keyCode == 37){ // izquieda

            jugador.dir = 3;
        }
        else if(e.keyCode == 38){ //arriba

            jugador.dir = 0;
        }
        else if(e.keyCode == 39){//derecha

            jugador.dir = 1;

        }else if(e.keyCode == 40){ // abajo

            jugador.dir =  2;
        }


    });



});