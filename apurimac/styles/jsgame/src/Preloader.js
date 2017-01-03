Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
	preload: function() {
		
		this.load.image('ball', 'img/ball.png');
		this.load.image('hole', 'img/hole.png');
		this.load.image('element-w', 'img/element-w.png');
		this.load.image('element-h', 'img/element-h.png');
		this.load.image('panel', 'img/panel.png');
		this.load.image('title', 'img/title.png');
		this.load.image('button-pause', 'img/button-pause.png');
		this.load.image('screen-bg', 'img/screen-bg.png');
		this.load.image('screen-mainmenu', 'img/m.png');
		this.load.image('screen-howtoplay', 'img/screen-howtoplay.png');
		this.load.image('border-horizontal', 'img/border-horizontal.png');
		this.load.image('border-vertical', 'img/border-vertical.png');
		this.load.spritesheet('nino','img/sprite1.png',100,200);
	    this.load.image('nueve','img/nuves.png');
	    this.load.image('piso1','img/piso2.png');
	    this.load.image('fondo','img/degra.png');
	    this.load.image('botn','img/botn.png');
	    this.load.image('tapa','img/tapa.png');
	    this.load.image('l0','img/barra0.png');
	    this.load.image('l1','img/barra1.png');
	    this.load.image('l2','img/barra2.png');
	    this.load.image('l3','img/barra3.png');
	    this.load.image('l4','img/barra4.png');
	    this.load.image('l5','img/barra05.png');
	    this.load.image('reanudar','img/reanudar.png');
        this.load.image('home','img/home.png');


	    this.load.image('bien','img/soluciones/bien.png');
	    this.load.image('mal','img/soluciones/mal.png');

	    this.load.image('r1','img/soluciones/uno.png');
	    this.load.image('r1_1','img/soluciones/uno_1.png');
	    this.load.image('r1_2','img/soluciones/uno_2.png');
	    this.load.image('r1_3','img/soluciones/uno_3.png');
        this.load.image('r1_4','img/soluciones/uno_4.png');
	    this.load.image('r1_5','img/soluciones/uno_5.png');

	    this.load.image('r2','img/soluciones/dos.png');
	    this.load.image('r2_1','img/soluciones/dos_1.png');
	    this.load.image('r2_2','img/soluciones/dos_2.png');
	    this.load.image('r2_3','img/soluciones/dos_3.png');
	    this.load.image('r2_4','img/soluciones/dos_4.png');
	    this.load.image('r2_5','img/soluciones/dos_5.png');
  
        this.load.image('r3','img/soluciones/tres.png');
	    this.load.image('r3_1','img/soluciones/tres_1.png');
	    this.load.image('r3_2','img/soluciones/tres_2.png');
	    this.load.image('r3_3','img/soluciones/tres_3.png');
	    this.load.image('r3_4','img/soluciones/tres_4.png');
	    this.load.image('r3_5','img/soluciones/tres_5.png');
        
        this.load.image('r4','img/soluciones/cuatro.png');
	    this.load.image('r4_1','img/soluciones/cuatro_1.png');
	    this.load.image('r4_2','img/soluciones/cuatro_2.png');
	    this.load.image('r4_3','img/soluciones/cuatro_3.png');
	    this.load.image('r4_4','img/soluciones/cuatro_4.png');
	    this.load.image('r4_5','img/soluciones/cuatro_5.png');
	    
        this.load.image('r5','img/soluciones/cinco.png');
	    this.load.image('r5_1','img/soluciones/cinco_1.png');
	    this.load.image('r5_2','img/soluciones/cinco_2.png');
	    this.load.image('r5_3','img/soluciones/cinco_3.png');
	    this.load.image('r5_4','img/soluciones/cinco_4.png');
	    this.load.image('r5_5','img/soluciones/cinco_5.png');
	    
	    this.load.image('cholito_negro','img/cholito_negro.png');

	    this.load.image('b_avanza','img/b_avanzado.png');
	    this.load.image('b_basic','img/b_basico.png');
	    this.load.image('piso_p','img/piso3.png');
	    this.load.image('flecha','img/flecha.png');

	    this.load.spritesheet('nino1','img/sprite_comple.png',100,200);
	    this.load.spritesheet('piramide','img/n_sprite2.png',500,500);

//-------------------audio------------------------------------------------------------
		this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
		this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);

		this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
	},
	create: function() {
		//---------------aki se esta aciendo el llamado de la funcion main menu-----------------------------
		this.game.state.start('Game');
	}
};