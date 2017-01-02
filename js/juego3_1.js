


var cielo;
var _cholito1;
var piso1;
var piso2;
var piso;
var flecha;
var botn;
var largo = screen.width;
var altura = screen.height;
var fondoDegra;
var cursor;
var stop="arriba";
var parar1=0;
var parar2=0;
var espacio_piso1=0;
var espacio_piso2=0;
var nivel=1;
var nivel_var;
var time;
var divisor;
var n1;
var n2;
var n3;
var n4;
var n5;
var aux=0;

var Juego3_1 =
{
  preload:function()
   {
      juego.load.image('cielo','img/degra.png');
      juego.load.image('piso','img/piso2.png');
      juego.load.image('nuve','img/nuves.png');
      juego.load.image('flecha','img/flecha.png');
      juego.load.image('botn','img/botn.png');
      juego.load.spritesheet('_cholito1','img/sprite_comple2.png',70,185);
      

   },
  create:function()
   {

      juego.physics.startSystem(Phaser.Physics.ARCADE);
      // _____________________________ DELIMITAR   AMBIENTE PA LOS  SPRITES ____________
      fondoDegra = new Phaser.Rectangle(0, 0,largo, altura);
      //______________________________CIELO PAL JUEGO__________________________________
      cielo = juego.add.tileSprite(0,0,juego.width,juego.height,'cielo');
      //************************** BLOQUES  PISO***************************************************

      piso1=juego.add.sprite(-900,juego.height-250,'piso');
      piso2=juego.add.sprite(juego.width-100,juego.height-250,'piso');

      //****************************************botones**********************************************

    
    this.unoButton = this.add.button(juego.width*0.3, juego.height*0.02, 'botn', this.boton1, this);
    this.unoButton.anchor.set(1,0);
    this.dosButton = this.add.button(juego.width*0.4, juego.height*0.02, 'botn', this.boton2, this);
    this.dosButton.anchor.set(1,0);
    this.tresButton = this.add.button(juego.width*0.5, juego.height*0.02, 'botn', this.boton3, this);
    this.tresButton.anchor.set(1,0);
    this.cuatroButton = this.add.button(juego.width*0.6, juego.height*0.02, 'botn', this.boton4, this);
    this.cuatroButton.anchor.set(1,0);
    this.cincoButton = this.add.button(juego.width*0.7, juego.height*0.02, 'botn', this.boton5, this);
    this.cincoButton.anchor.set(1,0);

    txt0 = juego.add.text(juego.width*0.48, juego.height-155, "0", {font: "36px Arial", fill: "#000000",strokeThickness: 4});
      nivel_var=Math.floor(Math.random()*(9-4))+4;
      
      var base= (Math.floor(Math.random()*(9-4))+4)*nivel_var;
       divisor=base/nivel_var;
      var array=[divisor-2,divisor-1,divisor,divisor+1,divisor+2];
          var indice=Math.floor(Math.random()*array.length);
           n1=array[indice];
          array.splice(indice,1);
      
          var indice=Math.floor(Math.random()*array.length);
           n2=array[indice];
          array.splice(indice,1);
          var indice=Math.floor(Math.random()*array.length);
           n3=array[indice];
          array.splice(indice,1);
        var indice=Math.floor(Math.random()*array.length);
           n4=array[indice];
          array.splice(indice,1);
          var indice=Math.floor(Math.random()*array.length);
           n5=array[indice];
          array.splice(indice,1);
    
        
      txt0.text=base;
      txt1 = juego.add.text(juego.width*0.265, juego.height*0.033, "0", {font: "30px Arial", fill: "#000000",strokeThickness: 3});
      
 
      txt1.text=n1;
      txt2 = juego.add.text(juego.width*0.365, juego.height*0.033, "0", {font: "30px Arial", fill: "#000000",strokeThickness: 3});
      
      txt2.text=n2;
      txt3 = juego.add.text(juego.width*0.465, juego.height*0.033, "0", {font: "30px Arial", fill: "#000000",strokeThickness: 3});
      
      txt3.text=n3;
      txt4 = juego.add.text(juego.width*0.565, juego.height*0.033, "0", {font: "30px Arial", fill: "#000000",strokeThickness: 3});
      
      txt4.text=n4;
      txt5 = juego.add.text(juego.width*0.665, juego.height*0.033, "0", {font: "30px Arial", fill: "#000000",strokeThickness: 2});
      
      txt5.text=n5;

       
       
       if (nivel_var<5){
       var distancia=juego.width*0.5;
       for(var i=1;i<=nivel_var;i++)
         {
            
            txt_var = juego.add.text(distancia, 200, "x", {font: "36px Arial", fill: "#000000",strokeThickness: 5});
            txt_op = juego.add.text(distancia-20, 215, "+", {font: "18px Arial", fill: "#f81300",strokeThickness: 3});
            var distancia= distancia-50;
        }
      }else  if((nivel_var>4)&&(nivel_var<7))

      {
         var distancia=juego.width*0.55;
       for(var i=1;i<=nivel_var;i++)
         {
            
            txt_var = juego.add.text(distancia, 200, "x", {font: "36px Arial", fill: "#000000",strokeThickness: 5});
            txt_op = juego.add.text(distancia-20, 215, "+", {font: "18px Arial", fill: "#f81300",strokeThickness: 3});
            var distancia= distancia-50;
        }
      } else{
         var distancia=juego.width*0.6;
       for(var i=1;i<=nivel_var;i++)
         {
            
            txt_var = juego.add.text(distancia, 200, "x", {font: "36px Arial", fill: "#000000",strokeThickness: 5});
            txt_op = juego.add.text(distancia-20, 215, "+", {font: "18px Arial", fill: "#f81300",strokeThickness: 3});
            var distancia= distancia-50;
        }
      }



      //****************************************CHOLITO**********************************************
      _cholito1=juego.add.sprite(juego.width*0.05,100,'_cholito1');


      
      _cholito1.animations.add('stop', [4], 20, true);
      _cholito1.animations.add('izquierda', [0, 1, 2, 3], 8, true);
      _cholito1.animations.add('derecha', [5, 6, 7, 8], 8, true);
      _cholito1.animations.add('llora', [9], 10, true);
//********************************* BARRA  MENU **********************************************
         barra_menu=juego.add.tileSprite(0,juego.height-100,juego.width,100,'bar_menu');
         var ye = (barra_menu.position.y)+4;
         var ex =(barra_menu.position.x)+4;
         b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
         b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
         b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
         b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
         cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');



      basePrimal=this.add.sprite(juego.width/2,juego.height-165,'flecha');
      juego.physics.arcade.enable([piso1,piso2,basePrimal,_cholito1,barra_menu]);
      juego.physics.arcade.gravity.y=250;
      _cholito1.body.bounce.y=0.3;
      barra_menu.body.allowGravity=false;
      barra_menu.body.immovable=true;

      piso1.body.allowGravity=false;
      piso1.body.immovable=true;
      piso2.body.allowGravity=false;
      piso2.body.immovable=true;
      basePrimal.body.allowGravity=false;
      basePrimal.body.immovable=true;
      basePrimal.anchor.setTo(0.5);
      
      cursor = juego.input.keyboard.createCursorKeys();

   },
    choqueIzquierda:function()  {
  juego.physics.arcade.overlap(piso1,basePrimal, this.tocoUno, null, this);
  if(parar1==0) { piso1.body.velocity.x=+250; }
  else if (parar1==1)
  {
      if(espacio_piso2==0)
          {
                       piso1.body.velocity.x=0;
                       var m =piso1.position.x;
                       piso1.position.x=m-5;
                       espacio_piso2=1;

          }
  }
  },
  tocoUno:function()  {
    if(piso1.alive == false) { return; }
        parar1=1;
  },

  choqueDerecha:function()  {
  juego.physics.arcade.overlap(piso2,basePrimal, this.tocoDos, null, this);
  if(parar2==0) { piso2.body.velocity.x=-250; }
  else if (parar2==1) {
      if(espacio_piso1==0)
          {
                       piso2.body.velocity.x=0;
                       var m =piso2.position.x;
                       piso2.position.x=m+5;
                       espacio_piso1=1;

          }

                      }
  },
  tocoDos:function()  {
    if(piso2.alive == false) { return; }
        parar2=1;
  },
  update:function()
    {
      
  //_________________________-BLOQUES  DERECHA IZQUIERDA_____________________
     time = juego.time.events.loop(0, this.choqueIzquierda,this);
     time = juego.time.events.loop(0, this.choqueDerecha, this);
     // time = juego.time.events.loop(0, this.moverBloques, this);




      //________________________ CHOLITO Y POSIBLES  COLITIONS_____________

    juego.physics.arcade.collide(_cholito1,piso1);
    juego.physics.arcade.collide(_cholito1,piso2);
    juego.physics.arcade.collide(_cholito1,basePrimal);


    //_____________________PARA MOVIMIENTO DEL CHOLITO ___________________________


    if((_cholito1.position.y<=312)&&(_cholito1.position.x<=juego.width*0.05)){
      _cholito1.animations.play('stop');
    }

    if(_cholito1.position.x<=juego.width*0.272)
    {
                if((_cholito1.position.x<=juego.width*0.059)&&(_cholito1.position.y==juego.height-435 ))
                {
                   _cholito1.animations.play('derecha');
                   _cholito1.body.velocity.x= +50;
               
                }
    }
    else
        {
           if(aux==0)
               {
                   _cholito1.animations.play('stop');
                   _cholito1.body.velocity.x=0;
               }
                else 
                  if(aux==2)
                  {
                     _cholito1.animations.play('llora');
                     if(_cholito1.position.x<=juego.width*0.47)
                     {
                      _cholito1.body.velocity.x=+100;
                     }
                     else
                     {
                         _cholito1.body.velocity.x= 0;
                     }
                     
                  }
                  else
                   {
                     _cholito1.animations.play('derecha');
                     _cholito1.body.velocity.x= +150;
                   }
        }
              
      if(_cholito1.position.x>=juego.width-50)
      {
      
       // this.state.start('Juego3_2');
      }
    

    },
   
    boton1: function() {
   
   if(divisor==n1){
     basePrimal=this.add.sprite(juego.width*0.3,juego.height-250,'piso');
     juego.physics.arcade.enable([piso1,piso2,basePrimal,_cholito1,barra_menu]);
     basePrimal.body.allowGravity=false;
      basePrimal.body.immovable=true;
      aux=1;
   }
   else{
    aux=2;
   }
  },
  boton2: function() {
   
   if(divisor==n2){
     basePrimal=this.add.sprite(juego.width*0.3,juego.height-250,'piso');
     juego.physics.arcade.enable([piso1,piso2,basePrimal,_cholito1,barra_menu]);
     basePrimal.body.allowGravity=false;
      basePrimal.body.immovable=true;
      aux=1;
      
   }
   else{
    aux=2;
   }
  },
 boton3: function() {
   
   if(divisor==n3){
     basePrimal=this.add.sprite(juego.width*0.3,juego.height-250,'piso');
     juego.physics.arcade.enable([piso1,piso2,basePrimal,_cholito1,barra_menu]);
     basePrimal.body.allowGravity=false;
      basePrimal.body.immovable=true;
      aux=1;
    
   }
   else{
    aux=2;
   }
  },
   boton4: function() {
   
   if(divisor==n4){
     basePrimal=this.add.sprite(juego.width*0.3,juego.height-250,'piso');
     juego.physics.arcade.enable([piso1,piso2,basePrimal,_cholito1,barra_menu]);
     basePrimal.body.allowGravity=false;
      basePrimal.body.immovable=true;
      aux=1;
      
   }else{
    aux=2;
   }
  },
   boton5: function() {
   
   if(divisor==n5){
     basePrimal=this.add.sprite(juego.width*0.3,juego.height-250,'piso');
     juego.physics.arcade.enable([piso1,piso2,basePrimal,_cholito1,barra_menu]);
     basePrimal.body.allowGravity=false;
      basePrimal.body.immovable=true;
      aux=1;
    }
      else{
        aux=2;
      }
      
   
  },
};