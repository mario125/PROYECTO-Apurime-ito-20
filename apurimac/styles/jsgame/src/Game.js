Ball.Game = function(game) {};
Ball.Game.prototype = {
	//--------------------este es el juego-----------------------------------------------
	create: function() {
		//====================creando el esenario=========================================================
		this.add.sprite(0, 0, 'fondo');
		this.add.sprite(0, 0, 'panel');
		this.piso1=this.add.sprite(0, 650, 'piso_p');
        this.piso2=this.add.sprite(750, 650, 'piso_p');
        this.flecha=this.add.sprite(450,710 , 'flecha');
        this.nuve = this.add.tileSprite(0,0,Ball._WIDTH,0,'nueve');
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.add.sprite(Ball._WIDTH-350, 4, 'cholito_negro');
		
		this.add.sprite(Ball._WIDTH-300, 9, 'l0');
		//===================creando las fuentes de las letras=========================================
		this.fontSmall = { font: "24px Arial", fill: "#f13817",strokeThickness: 2};
		this.fontBig = { font: "24px Arial", fill: "#e4beef" };
		this.fontMessage = { font: "24px Arial", fill: "#e4beef",  align: "center", stroke: "#320C3E", strokeThickness: 4 };
		//===================creando el audio=========================================
		this.audioStatus = true;
		//===================creando el tiempo=========================================
		this.timer = 0;
		this.totalTimer = 0;
		//===================creando el minimo y el maximo level=========================================
		this.level = 1;
		this.maxLevels = 10;
		//===================creando la posicion inicial del cholito=========================================
		this.cholito1Pos = { x: 10, y: 450 };
        //===================creando los botones de la barra y asignando valores de tiempo=======================
		this.pauseButton = this.add.button(Ball._WIDTH-8, 8, 'button-pause', this.managePause, this);
		this.pauseButton.anchor.set(1,0);
		this.pauseButton.input.useHandCursor = true;
		this.audioButton = this.add.button(Ball._WIDTH-this.pauseButton.width-8*2, 8, 'button-audio', this.manageAudio, this);
		this.audioButton.anchor.set(1,0);
		this.audioButton.input.useHandCursor = true;
		this.audioButton.animations.add('true', [0], 10, true);
		this.audioButton.animations.add('false', [1], 10, true);
		this.audioButton.animations.play(this.audioStatus);
		this.reaButton = this.add.button(350, 4, 'reanudar', this.reanuda, this);
	    this.reaButton.anchor.set(1,0);
	    this.homeButton = this.add.button(400, 4, 'home', this.homee, this);
	    this.homeButton.anchor.set(1,0);
		
		//this.timerText = this.game.add.text(15, 15, "Time: "+this.timer, this.fontBig);
		this.levelText = this.game.add.text(50, 10, "avanzado: "+this.level+" / "+this.maxLevels, this.fontSmall);
		//this.totalTimeText = this.game.add.text(120, 30, "Total time: "+this.totalTimer, this.fontSmall);
        //===================creando los botones de las opciones de respuesta========================================
        this.f = this.add.text(250,100, "x =", {font: "46px Arial", fill: "#000000",strokeThickness: 4});
        this.unoButton = this.add.button(400, 100, 'botn', this.boton1, this);
	    this.unoButton.anchor.set(1,0);
	    this.dosButton = this.add.button(500, 100, 'botn', this.boton2, this);
	    this.dosButton.anchor.set(1,0);
	    this.tresButton = this.add.button(600, 100, 'botn', this.boton3, this);
	    this.tresButton.anchor.set(1,0);
	    this.cuatroButton = this.add.button(700, 100, 'botn', this.boton4, this);
	    this.cuatroButton.anchor.set(1,0);
	    this.cincoButton = this.add.button(800, 100, 'botn', this.boton5, this);
	    this.cincoButton.anchor.set(1,0);
        //===================creando los numeros de las opciones========================================
        this.txt0 = this.add.text(Ball._WIDTH*0.5,740, "0", {font: "40px Arial", fill: "#000000",strokeThickness: 4});
	    this.txt1 = this.add.text(365,110, "0", {font: "34px Arial", fill: "#000000",strokeThickness: 3});
	    this.txt2 = this.add.text(465,110, "0", {font: "34px Arial", fill: "#000000",strokeThickness: 3});
	    this.txt3 = this.add.text(565,110, "0", {font: "34px Arial", fill: "#000000",strokeThickness: 3});
	    this.txt4 = this.add.text(665,110, "0", {font: "34px Arial", fill: "#000000",strokeThickness: 3});
	    this.txt5 = this.add.text(765,110, "0", {font: "34px Arial", fill: "#000000",strokeThickness: 2});

        //===================inicializando el nivel=========================================
		


		this.keys = this.game.input.keyboard.createCursorKeys();
		window.addEventListener("deviceorientation", this.handleOrientation, true);

		//this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
        //===================creando el grupo de los bordes  del juego=========================================
		this.borderGroup = this.add.group();
		//===================creando el cholito y sus animaciones=========================================
		this.cholito1=this.add.sprite(10,450,'nino1');
        this.cholito1.animations.add('stop', [4], 20, true);
        this.cholito1.animations.add('izquierda', [0, 1, 2, 3], 8, true);
        this.cholito1.animations.add('derecha', [5, 6, 7, 8], 8, true);
        this.cholito1.animations.add('llora', [9], 10, true);
       
		this.physics.arcade.enable([this.cholito1,this.piso1,this.piso2,this.flecha]);
		this.physics.arcade.gravity.y=250;
	    this.cholito1.body.bounce.y=0.3;
	    this.piso1.body.allowGravity=false;
	    this.piso1.body.immovable=true;
	    this.piso2.body.allowGravity=false;
	    this.piso2.body.immovable=true;
	    this.flecha.body.allowGravity=false;
	    this.flecha.body.immovable=true;
	    
	   

     this.a=0;
     this.divisor=0;
     this.n1=0;
     this.n2=0;
     this.n3=0;
     this.n4=0;
     this.n5=0;
     this.aux=0;

      this.initLevels();
		this.showLevel(1);
		
      
		this.cholito1.animations.play('derecha');
			this.cholito1.body.velocity.x +=50;

		this.bounceSound = this.game.add.audio('audio-bounce');
	},
	
	initLevels: function() {
		this.levels = [];
		
		for(var i=0; i<this.maxLevels; i++) {
			var newLevel = this.add.group();
			newLevel.enableBody = true;
			newLevel.physicsBodyType = Phaser.Physics.ARCADE;

			newLevel.setAll('body.immovable', true);
			newLevel.visible = false;
			this.levels.push(newLevel);
		}
	},
	showLevel: function(level) {
		    nivel_var=Math.floor(Math.random()*(5 - 2) + 2);
		    this.aux=nivel_var;
	        var base= (Math.floor(Math.random()*(5 - 2) + 2))*nivel_var;
	        this.divisor=base/nivel_var;
	        var array=[this.divisor-1,this.divisor,this.divisor+1,this.divisor+2,this.divisor+3];
	        var indice=Math.floor(Math.random()*array.length);
	        this.n1=array[indice];
	        array.splice(indice,1);
	        var indice=Math.floor(Math.random()*array.length);
	        this.n2=array[indice];
	        array.splice(indice,1);
	        var indice=Math.floor(Math.random()*array.length);
	        this.n3=array[indice];
	        array.splice(indice,1);
	        var indice=Math.floor(Math.random()*array.length);
	        this.n4=array[indice];
	        array.splice(indice,1);
	        var indice=Math.floor(Math.random()*array.length);
	        this.n5=array[indice];
	        array.splice(indice,1);
	        this.txt0.text=base;
	        this.txt1.text=this.n1;
	        this.txt2.text=this.n2;
	        this.txt3.text=this.n3;
	        this.txt4.text=this.n4;
	        this.txt5.text=this.n5;


	   if (nivel_var<5){
       var distancia=Ball._WIDTH*0.5;
       var altura=300;
       var auxiliar=1;
       for(var i=1;i<=nivel_var;i++)
         {
            
            this.txt_var = this.add.text(distancia, altura, "x", {font: "36px Arial", fill: "#000000",strokeThickness: 5});
           // txt_op = juego.add.text(distancia-20, 215, "+", {font: "18px Arial", fill: "#f81300",strokeThickness: 3});
             distancia= distancia-70;
             if((auxiliar%2)==0){
             	 altura=altura+50;
             	
             } else{
                 altura=altura-50;
             }
             auxiliar=auxiliar+1;
             
        }
      }else  if((nivel_var>5)&&(nivel_var<=7))

      {
         var distancia=Ball._WIDTH*0.55;
       for(var i=1;i<=nivel_var;i++)
         {
            
            this.txt_var = this.add.text(distancia, 200, "x", {font: "36px Arial", fill: "#000000",strokeThickness: 5});
            //txt_op = juego.add.text(distancia-20, 215, "+", {font: "18px Arial", fill: "#f81300",strokeThickness: 3});
             distancia= distancia-70;
        }
      } else{
         var distancia=Ball._WIDTH*0.6;
       for(var i=1;i<=nivel_var;i++)
         {
            
            this.txt_var = this.add.text(distancia, 200, "x", {font: "36px Arial", fill: "#000000",strokeThickness: 5});
           // txt_op = juego.add.text(distancia-20, 215, "+", {font: "18px Arial", fill: "#f81300",strokeThickness: 3});
            var distancia= distancia-70;
        }
      }


		var lvl = level | this.level;
		if(this.levels[lvl-2]) {
			this.levels[lvl-2].visible = false;
		}
		this.levels[lvl-1].visible = true;
	},
	
	managePause: function() {
		this.game.paused = true;
		var pausedText = this.add.text(Ball._WIDTH*0.5, 250, "juego pausado,\npara continuar aga click.", this.fontMessage);
		pausedText.anchor.set(0.5);
		this.input.onDown.add(function(){
			pausedText.destroy();
			this.game.paused = false;
		}, this);
	},
	manageAudio: function() {
		this.audioStatus =! this.audioStatus;
		this.audioButton.animations.play(this.audioStatus);
	},

	update: function() {
		
	    this.nuve.tilePosition.x -= 0.7;


	    this.physics.arcade.collide(this.cholito1,this.piso1);
	    this.physics.arcade.collide(this.cholito1,this.piso2);
	    this.physics.arcade.collide(this.cholito1,this.flecha);
	     this.physics.arcade.collide(this.cholito1,this.piso3);

			this.physics.arcade.collide(this.cholito1, this.borderGroup, this.wallCollision, null, this);
			this.physics.arcade.collide(this.cholito1, this.levels[this.level-1], this.wallCollision, null, this);
			if((this.cholito1.position.x>=370) &&(this.cholito1.position.x<=371)){
		    	//this.cholito1.animations.play('stop');
				this.cholito1.body.velocity.x = 0;

				
				if(this.a==0){
					//this.pausedText = this.add.text(Ball._WIDTH*0.4, 500, "resuelva la ecuacion.", this.fontMessage);
				this.a=this.a+1;
				}

			}
			if(this.cholito1.position.x>=Ball._WIDTH-102){
				this.finishLevel();
			}
			if((this.cholito1.position.x>=640) &&(this.cholito1.position.y>=460)){

				alert('perdiste :(');
				
				this.levelText.setText("Level: "+this.level+" / "+this.maxLevels);
				this.cholito1.body.x = this.cholito1Pos.x;
				this.cholito1.body.y = this.cholito1Pos.y;
				this.cholito1.animations.play('derecha');

				this.cholito1.body.velocity.x = +50;
				this.tapa=this.add.sprite(Ball._WIDTH*0.28, 250, 'tapa');
				this.a=0;
				this.error.destroy();
                this.errorimage.destroy();
                this.txtError.destroy();
				this.showLevel();
               
				
				
			}
	},
	wallCollision: function() {
		if(this.audioStatus) {
			this.bounceSound.play();
		}
		// Vibration API
	},
	handleOrientation: function(e) {
		// Device Orientation API
		var x = e.gamma; // range [-90,90], left-right
		var y = e.beta;  // range [-180,180], top-bottom
		var z = e.alpha; // range [0,360], up-down
		Ball._player.body.velocity.x += x;
		Ball._player.body.velocity.y += y*0.5;
	},
	finishLevel: function() {
		if(this.level >= this.maxLevels) {
			this.totalTimer += this.timer;
			alert('Congratulations, game completed!\nTotal time of play: '+this.totalTimer+' seconds!');
			this.game.state.start('MainMenu');
		}
		else {
			alert('felicitaciones, level '+this.level+' completado!');
			
			
			this.level++;
			
			this.levelText.setText("Level: "+this.level+" / "+this.maxLevels);
			
			if(this.level==1){
				this.add.sprite(Ball._WIDTH-300, 9, 'l1');
			}
			if(this.level==2){
				this.add.sprite(Ball._WIDTH-300, 9, 'l2');
			}
			if(this.level==3){
				this.add.sprite(Ball._WIDTH-300, 9, 'l3');
			}
			if(this.level==4){
				this.add.sprite(Ball._WIDTH-300, 9, 'l4');
			}
			if(this.level==5){
				this.add.sprite(Ball._WIDTH-300, 9, 'l5');
			}
            this.piso3.destroy();

			this.cholito1.body.x = this.cholito1Pos.x;
			this.cholito1.body.y = this.cholito1Pos.y;
			this.cholito1.body.velocity.x = +50;
			this.tapa=this.add.sprite(Ball._WIDTH*0.28, 250, 'tapa');
            this.a=0;
			
			this.showLevel();
		}
	},
	
	boton1: function() {
		
		if(this.divisor==this.n1){
            this.piso3=this.add.sprite(450, 650, 'r'+this.aux+"_"+this.n1);
	     // this.piso3=this.add.sprite(400, 650, 'piso_p');
	      this.physics.arcade.enable([this.piso3]);
	      this.piso3.body.allowGravity=false;
	      this.piso3.body.immovable=true;
	      this.cholito1.animations.play('derecha');
	      this.cholito1.body.velocity.x += 50; 

	   }else{
	        this.cholito1.animations.play('llora');
	        this.cholito1.body.velocity.x += 50;
	        this.error=this.add.sprite(750, 500, 'r'+this.aux+"_"+this.n1);
	        this.txtError = this.add.text(1060,502, "= "+this.aux*this.n1, {font: "38px Arial", fill: "#000000",strokeThickness: 3});
	        this.errorimage=this.add.sprite(1140, 500, 'mal');

	        
	        

		   }
		
 	},
  	boton2: function() {
		
		if(this.divisor==this.n2){
	      
		  this.piso3=this.add.sprite(450, 650, 'r'+this.aux+"_"+this.n2);
	      this.physics.arcade.enable([this.piso3]);
	      this.piso3.body.allowGravity=false;
	      this.piso3.body.immovable=true;
	      this.cholito1.animations.play('derecha');
	    this.cholito1.body.velocity.x += 50; 

	   }else{
	        this.cholito1.animations.play('llora');
	        this.cholito1.body.velocity.x += 50; 
			this.error=this.add.sprite(800, 500, 'r'+this.aux+"_"+this.n2);
			this.error=this.add.sprite(750, 500, 'r'+this.aux+"_"+this.n2);
	        this.txtError = this.add.text(1060,502, "= "+this.aux*this.n2, {font: "38px Arial", fill: "#000000",strokeThickness: 3});
	        this.errorimage=this.add.sprite(1140, 500, 'mal');
		   }
	
  	},
 	boton3: function() {
		
		if(this.divisor==this.n3){
	     
		  this.piso3=this.add.sprite(450, 650, 'r'+this.aux+"_"+this.n3);
	      this.physics.arcade.enable([this.piso3]);
	      this.piso3.body.allowGravity=false;
	      this.piso3.body.immovable=true;
	      this.cholito1.animations.play('derecha');
	    this.cholito1.body.velocity.x += 50; 

	   }else{
	        this.cholito1.animations.play('llora');
	        this.cholito1.body.velocity.x += 50; 
			this.error=this.add.sprite(800, 500, 'r'+this.aux+"_"+this.n3);
			this.error=this.add.sprite(750, 500, 'r'+this.aux+"_"+this.n3);
	        this.txtError = this.add.text(1060,502, "= "+this.aux*this.n3, {font: "38px Arial", fill: "#000000",strokeThickness: 3});
	        this.errorimage=this.add.sprite(1140, 500, 'mal');
		   }
	
 	},
  	boton4: function() {
		
		if(this.divisor==this.n4){
	      this.piso3=this.add.sprite(450, 650, 'r'+this.aux+"_"+this.n4);
	      this.physics.arcade.enable([this.piso3]);
	      this.piso3.body.allowGravity=false;
	      this.piso3.body.immovable=true;
	      this.cholito1.animations.play('derecha');
	    this.cholito1.body.velocity.x += 50; 

	   }else{
	        this.cholito1.animations.play('llora');
	        this.cholito1.body.velocity.x += 50; 
			this.error=this.add.sprite(800, 500, 'r'+this.aux+"_"+this.n4);
			this.error=this.add.sprite(750, 500, 'r'+this.aux+"_"+this.n4);
	        this.txtError = this.add.text(1060,502, "= "+this.aux*this.n4, {font: "38px Arial", fill: "#000000",strokeThickness: 3});
	        this.errorimage=this.add.sprite(1140, 500, 'mal');
		   }
		
  	},
  	boton5: function() {
		
		if(this.divisor==this.n5){
	      this.piso3=this.add.sprite(450, 650, 'r'+this.aux+"_"+this.n5);
	      this.physics.arcade.enable([this.piso3]);
	      this.piso3.body.allowGravity=false;
	      this.piso3.body.immovable=true;
	      this.cholito1.animations.play('derecha');
	    this.cholito1.body.velocity.x += 50; 

	   }else{
	        this.cholito1.animations.play('llora');
	        this.cholito1.body.velocity.x += 50; 
			this.error=this.add.sprite(800, 500, 'r'+this.aux+"_"+this.n5);
			this.error=this.add.sprite(750, 500, 'r'+this.aux+"_"+this.n5);
	        this.txtError = this.add.text(1060,502, "= "+this.aux*this.n5, {font: "38px Arial", fill: "#000000",strokeThickness: 3});
	        this.errorimage=this.add.sprite(1140, 500, 'mal');
		   }
		
	}

};