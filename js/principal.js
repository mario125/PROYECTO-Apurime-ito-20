//var largo=500;
var lar = screen.width;
var alt = screen.height-20;
var juego = new Phaser.Game(lar,alt,Phaser.CANVAS,'bloque_juego');
juego.state.add('Menu',Menu);
juego.state.add('Nivel',Nivel);
juego.state.add('Juego1_1',Juego1_1);
juego.state.add('Juego1_2',Juego1_2);
juego.state.add('Juego1_3',Juego1_3);
juego.state.add('Juego3_1',Juego3_1);
juego.state.add('Juego3_2',Juego3_2);
//juego.state.add('Game_Over',Game_Over);
juego.state.start('Menu');
