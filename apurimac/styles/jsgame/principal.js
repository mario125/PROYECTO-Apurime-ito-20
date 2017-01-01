//var largo=500;
var qs =document.getElementById("identificador_js").src.match(/\w+=\w+/g);

//array para almacenar las variables
var _GET= {};

var t,i = qs.length;
while (i--) {

     //t[0] nombre del parametro y t[1] su valor
     t = qs[i].split("=");

     //opción 1: a modo de PHP
     _GET[t[0]] = t[1];

    //opción2: variables con el mismo nombre usando eval
    eval('var '+t[0]+'="'+t[1]+'";');
}

//mostrará el nombre 2 veces
var nivel=nivel;
var jugador=jugador;
var sNivel=sNivel;
var Actualis1=0;
var M_actualis=0;
var K_actualis=0;
var T_actualis=0;
var C_actualis=0;
var S_actualis=0;
var puntoDB =nivel;






var juego = new Phaser.Game(900,600,Phaser.CANVAS,'bloque_juego');
juego.state.add('Menu',Menu);
juego.state.add('Nivel',Nivel);
juego.state.add('Actualis',Actualis);
juego.state.add('Juego1_1',Juego1_1);
juego.state.add('Juego1_2',Juego1_2);
juego.state.add('Juego1_3',Juego1_3);
juego.state.add('Juego1_4',Juego1_4);
juego.state.add('Juego1_5',Juego1_5);
juego.state.add('Juego1_6',Juego1_6);
//juego.state.add('Game_Over',Game_Over);
juego.state.start('Menu');
