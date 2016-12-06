
var TREtiempo;
var TREcielo;
var TREfondoDegra;
var TREbarra_menu;
var TREcholito;

var TREb_atras      ;
var TREb_siguiente  ;
var TREb_home       ;
var TREb_actualizar ;
var TREcholito_negro;
var TREscroolBar    ;

var TREpiso1;
var TREpiso2;
var TREbasePrimal;
//PARAR  PISO AL   COLICIONAR  CON  BASE
var TREparar1 = 0;
var TREparar2 = 0;
var TREespacio_piso2 = 0;
var TREespacio_piso1 = 0;
var TREpunteroBaseDos=0;
var TREuno;
var TREdos;
var TREtres;
var TREcuatro;
var TREcinco;
var TRElapiz;
var TRa=0;
var TRb=0;
var TRc=0;
var TRd=0;
var TRe=0;
var e=0;
var f=0;


//PASAR BLOQUES
var TREx1=0;
var TREx2=0;
var TREx3=0;
var TREx4=0;
var TREx5=0;
var TREx6=0;
var TRExpuntero=50;
//CHACAN CON BASE PRIMAL
var TREbaseprimal_secundario_uno=false;
var TREbaseprimal_secundario_dos=false;
var TREbaseprimal_secundario_tres=false;
var TREbaseprimal_secundario_cuatro=false;
var TREbaseprimal_secundario_cinco=false;

//CHOCAR CON mochila
var PunteroNivel=0;

//TEXTOS
var TREtexto1;
var TREtexto2;
var TREtexto3;
var TREtexto4;
// VER  BASE  5  O 4
var TREpunteroBase5=5;
var TREpunteroBase4=4;



var Juego1_3 = {
    preload:function()
    {
               juego.load.image('TREcielo','img/degra.png');
               juego.load.image('TREnuve','img/nuves.png');
               juego.load.image('TREbar_menu','img/barra_menu.png');
               juego.load.image('TREpiso','img/piso2.png');

               juego.load.spritesheet('TREcholito','img/sprite_comple2.png',70,185);

               juego.load.spritesheet('TRElapiz','img/calculadora.png',60,60);

               juego.load.image('TREcinco','img/Cinco.png');
               juego.load.image('TREcuatro','img/Cuatro.png');
               juego.load.image('TREtres','img/Tres.png');
               juego.load.image('TREdos','img/Dos.png');
               juego.load.image('TREuno','img/Uno.png');

               juego.load.image('TREb_atras','img/atras.png');
               juego.load.image('TREb_siguiente','img/sig.png');
               juego.load.image('TREb_actualizar','img/reanudar.png');
               juego.load.image('TREb_home','img/home.png');

               juego.load.image('TREcholito_negro','img/cholito_negro.png');
               juego.load.image('TREscroolBar2','img/barras/barra4.png');

    },
    create:function()
    {



               juego.physics.startSystem(Phaser.Physics.ARCADE);
               TREfondoDegra = new Phaser.Rectangle(0, 0,largo, altura);
               TREcielo = juego.add.tileSprite(0,0,juego.width,juego.height,'TREcielo');


               TREcholito=juego.add.sprite(40,100,'TREcholito');
               TRElapiz=juego.add.sprite(50,juego.height/2-200,'TRElapiz')
               TRElapiz.anchor.setTo(0.5);
               TRElapiz.animations.add('anilapiz',[0,1,2],6,true);
               TRElapiz.animations.add('stop',[2],20,true);




               TREcholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
               TREcholito.animations.add('stop', [4], 20, true);
               TREcholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
               TREcholito.animations.add('llora', [9], 10, true);

               TREpiso1=juego.add.sprite(-750,juego.height-250,'TREpiso');
               TREpiso2=juego.add.sprite(juego.width-100,juego.height-250,'TREpiso');

               TREbarra_menu=juego.add.tileSprite(0,juego.height-100,juego.width,100,'TREbar_menu');
               var ye = (TREbarra_menu.position.y)+11;
               var ex =(TREbarra_menu.position.x)+4;

               TREb_atras            =this.add.button(ex,ye,'TREb_atras',this.clasAtras,this);
               TREb_siguiente        =this.add.button(TREb_atras.position.x+64,ye,'TREb_siguiente',this.clasSiguiente,this);
               TREb_home             =this.add.button(TREb_siguiente.position.x+64,ye,'TREb_home',this.clasHome,this);
               TREb_actualizar       =this.add.button(TREb_home.position.x+64,ye,'TREb_actualizar',this.clasActual,this);
               TREcholito_negro      =juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
               TREscroolBar          =juego.add.tileSprite(TREcholito_negro.position.x+50,ye+20,300,40,'TREscroolBar2');

               var base = Math.floor((Math.random() * 2) + 4);



              if (base==4)
                {
                   TREbasePrimal=juego.add.sprite(juego.width/2,juego.height-137,'TREcuatro');
                   TREpunteroBase4=0;
                   if (TREpunteroBaseDos==0) {
                     var xdefecto = Math.floor((Math.random() * 3) + 1);
                     if (xdefecto==1&&TRa==0) {
                       TREuno=juego.add.sprite(TREbasePrimal.position.x-149,TREbasePrimal.position.y-73,'TREuno');
                       juego.physics.arcade.enable([TREuno]);
                       TREuno.body.allowGravity=false;
                       TREuno.body.inmovable=true;
                       TREuno.body.bounce.y=0;
                       TREuno.inputEnabled = true;
                       TREuno.anchor.set(0.5);
                       TREuno.input.enableDrag();

                       TREuno.input.boundsRect = TREfondoDegra;
                       TRa=2;

                     }
                     if (xdefecto==2&&TRb==0) {

                       TREdos=juego.add.sprite(TREbasePrimal.position.x-98,TREbasePrimal.position.y-73,'TREdos');
                       juego.physics.arcade.enable([TREdos]);
                       TREdos.body.allowGravity=false;
                       TREdos.body.inmovable=true;
                       TREdos.body.bounce.y=0;
                       TREdos.inputEnabled = true;
                       TREdos.anchor.set(0.5);
                       TREdos.input.enableDrag();
                       TREdos.input.boundsRect = TREfondoDegra;
                       TRb=2;

                     }
                     if (xdefecto==3&&TRc==0) {
                       TREtres=juego.add.sprite(TREbasePrimal.position.x-49,TREbasePrimal.position.y-73,'TREtres');
                       juego.physics.arcade.enable([TREtres]);
                       TREtres.body.allowGravity=false;
                       TREtres.body.inmovable=true;
                       TREtres.body.bounce.y=0;
                       TREtres.inputEnabled = true;
                       TREtres.anchor.set(0.5);
                       TREtres.input.enableDrag();
                       TREtres.input.boundsRect = TREfondoDegra;
                       TRc=2;

                     }

                     TREpunteroBaseDos=1;

                   }
                   if (TREpunteroBaseDos==1) {

                     if (TRa==0) {
                       TREuno=juego.add.sprite(50,juego.height/2-200,'TREuno');
                       juego.physics.arcade.enable([TREuno]);
                       TREuno.body.allowGravity=false;
                       TREuno.body.inmovable=true;
                       TREuno.body.bounce.y=0;
                       TREuno.inputEnabled = true;
                       TREuno.anchor.set(0.5);
                       TREuno.input.enableDrag();

                       TREuno.input.boundsRect = TREfondoDegra;
                       TRa=1;

                     }
                     if (TRb==0) {
                       TREdos=juego.add.sprite(0,juego.height/2-200,'TREdos');
                       juego.physics.arcade.enable([TREdos]);
                       TREdos.body.allowGravity=false;
                       TREdos.body.inmovable=true;

                       TREdos.inputEnabled = true;
                       TREdos.anchor.set(0.5);

                       TREdos.input.enableDrag();
                       TREdos.input.boundsRect = TREfondoDegra;

                       TRb=1;

                     }
                     if (TRc==0) {
                       TREtres=juego.add.sprite(50,juego.height/2-200,'TREtres');
                       juego.physics.arcade.enable([TREtres]);
                       TREtres.body.allowGravity=false;
                       TREtres.body.inmovable=true;
                       TREtres.body.bounce.y=0;
                       TREtres.inputEnabled = true;
                       TREtres.anchor.set(0.5);
                       TREtres.input.enableDrag();
                       TREtres.input.boundsRect = TREfondoDegra;
                       TRc=1;

                     }
                     if (TRd==0) {
                       TREcuatro=juego.add.sprite(25,juego.height/2-200,'TREdos');
                       juego.physics.arcade.enable([TREcuatro]);
                       TREcuatro.body.allowGravity=false;
                       TREcuatro.body.inmovable=true;
                       TREcuatro.inputEnabled = true;
                       TREcuatro.anchor.set(0.5);
                       TREcuatro.input.enableDrag();
                       TREcuatro.input.boundsRect = TREfondoDegra;
                       TRd=1;

                     }

                   }








                }
              else if (base==5)
              {
                 TREbasePrimal=juego.add.sprite(juego.width/2,juego.height-137,'TREcinco');
                 TREpunteroBase5=0;

                 if (TREpunteroBaseDos==0) {
                   var xdefecto = Math.floor((Math.random() * 4) + 1);

                   if (xdefecto==1&&TRa==0) {

                     TREuno=juego.add.sprite(TREbasePrimal.position.x-199,TREbasePrimal.position.y-73,'TREuno');
                     juego.physics.arcade.enable([TREuno]);
                     TREuno.body.allowGravity=false;
                     TREuno.body.inmovable=true;
                     TREuno.body.bounce.y=0;
                     TREuno.inputEnabled = true;
                     TREuno.anchor.set(0.5);
                     TREuno.input.enableDrag();

                     TREuno.input.boundsRect = TREfondoDegra;
                     TRa=2;

                   }
                   if (xdefecto==2&&TRb==0) {


                     TREdos=juego.add.sprite(TREbasePrimal.position.x-149,TREbasePrimal.position.y-73,'TREdos');
                     juego.physics.arcade.enable([TREdos]);
                     TREdos.body.allowGravity=false;
                     TREdos.body.inmovable=true;
                     TREdos.body.bounce.y=0;
                     TREdos.inputEnabled = true;
                     TREdos.anchor.set(0.5);
                     TREdos.input.enableDrag();
                     TREdos.input.boundsRect = TREfondoDegra;
                     TRb=2;

                   }
                   if (xdefecto==3&&TRc==0) {
                     TREtres=juego.add.sprite(TREbasePrimal.position.x-99,TREbasePrimal.position.y-73,'TREtres');
                     juego.physics.arcade.enable([TREtres]);
                     TREtres.body.allowGravity=false;
                     TREtres.body.inmovable=true;
                     TREtres.body.bounce.y=0;
                     TREtres.inputEnabled = true;
                     TREtres.anchor.set(0.5);
                     TREtres.input.enableDrag();
                     TREtres.input.boundsRect = TREfondoDegra;
                     TRc=2;

                   }
                   if (xdefecto==4&&TRd==0) {

                     TREcuatro=juego.add.sprite(TREbasePrimal.position.x-49,TREbasePrimal.position.y-73,'TREcuatro');
                     juego.physics.arcade.enable([TREcuatro]);
                     TREcuatro.body.allowGravity=false;
                     TREcuatro.body.inmovable=true;
                     TREcuatro.inputEnabled = true;
                     TREcuatro.anchor.set(0.5);
                     TREcuatro.input.enableDrag();
                     TREcuatro.input.boundsRect = TREfondoDegra;
                     TRd=2;

                   }

                   TREpunteroBaseDos=1;

                 }
                 if (TREpunteroBaseDos==1) {

                   if (TRa==0) {
                     TREuno=juego.add.sprite(50,juego.height/2-200,'TREuno');
                     juego.physics.arcade.enable([TREuno]);
                     TREuno.body.allowGravity=false;
                     TREuno.body.inmovable=true;
                     TREuno.body.bounce.y=0;
                     TREuno.inputEnabled = true;
                     TREuno.anchor.set(0.5);
                     TREuno.input.enableDrag();

                     TREuno.input.boundsRect = TREfondoDegra;
                     TRa=1;

                   }
                   if (TRb==0) {
                     TREdos=juego.add.sprite(0,juego.height/2-200,'TREdos');
                     juego.physics.arcade.enable([TREdos]);
                     TREdos.body.allowGravity=false;
                     TREdos.body.inmovable=true;

                     TREdos.inputEnabled = true;
                     TREdos.anchor.set(0.5);

                     TREdos.input.enableDrag();
                     TREdos.input.boundsRect = TREfondoDegra;

                     TRb=1;

                   }
                   if (TRc==0) {
                     TREtres=juego.add.sprite(50,juego.height/2-200,'TREtres');
                     juego.physics.arcade.enable([TREtres]);
                     TREtres.body.allowGravity=false;
                     TREtres.body.inmovable=true;
                     TREtres.body.bounce.y=0;
                     TREtres.inputEnabled = true;
                     TREtres.anchor.set(0.5);
                     TREtres.input.enableDrag();
                     TREtres.input.boundsRect = TREfondoDegra;
                     TRc=1;

                   }
                   if (TRd==0) {
                     TREcuatro=juego.add.sprite(25,juego.height/2-200,'TREcuatro');
                     juego.physics.arcade.enable([TREcuatro]);
                     TREcuatro.body.allowGravity=false;
                     TREcuatro.body.inmovable=true;
                     TREcuatro.inputEnabled = true;
                     TREcuatro.anchor.set(0.5);
                     TREcuatro.input.enableDrag();
                     TREcuatro.input.boundsRect = TREfondoDegra;
                     TRd=1;

                   }

                 }





                }




               juego.physics.arcade.enable([TREpiso1,TREpiso2,TREbasePrimal,TREbarra_menu,TREcholito,TRElapiz]);
               juego.physics.arcade.gravity.y=50;

               TREbasePrimal.anchor.setTo(0.5);
               TREbasePrimal.body.allowGravity=false;
               TREbasePrimal.body.immovable=true;
               TREpiso1.body.allowGravity=false;
               TREpiso1.body.immovable=true;
               TREpiso2.body.allowGravity=false;
               TREpiso2.body.immovable=true;
               TREbarra_menu.body.allowGravity=false;
               TREbarra_menu.body.immovable=true;
               TREcholito.animations.play('stop');
               TRElapiz.body.allowGravity=false;
               TRElapiz.body.inmovable=true;


               TREcholito.animations.play('stop');

               TREtexto1 = juego.add.text(200, 20, "0", {font: "30px Arial", fill: "#FFF"});
               TREtexto2 = juego.add.text(500, 20, "0", {font: "30px Arial", fill: "#FFF"});







    },
    clasAtras:function(){alert("atras");},
    clasSiguiente:function(){alert("Siguiente");},
    clasHome:function(){alert("home");},
    clasActual:function(){this.state.start('Juego1_3');},
    update:function()
    {
      TREtiempo = juego.time.events.loop(0, this.choqueIzquierda, this);
      TREtiempo = juego.time.events.loop(0, this.choqueDerecha, this);
      TREtiempo = juego.time.events.loop(1000, this.pasarBloques, this);
      TREtiempo = juego.time.events.loop(0,this.chocoUno,this);
      TREtiempo = juego.time.events.loop(0,this.chocoDos,this);
      TREtiempo = juego.time.events.loop(0,this.chocoTres,this);
      TREtiempo = juego.time.events.loop(0,this.chocoCuatro,this);
      TREtiempo = juego.time.events.loop(0,this.chocoCinco,this);
      TREtiempo = juego.time.events.loop(4000, this.PasarNivel, this);
       TREcholito.body.velocity.x= 0;
      juego.physics.arcade.collide(TREcholito,TREpiso1);
      juego.physics.arcade.collide(TREcholito,TREpiso2);
      juego.physics.arcade.collide(TREcholito,TREuno);
      juego.physics.arcade.collide(TREcholito,TREdos);
      juego.physics.arcade.collide(TREcholito,TREtres);
      juego.physics.arcade.collide(TREcholito,TREcuatro);
      juego.physics.arcade.collide(TREcholito,TREcinco);
      var jas=juego.physics.arcade.collide(TREcholito,TRElapiz);
      juego.physics.arcade.overlap(TREcholito, TREuno, this.choco_uno_cholito, null, this);
      juego.physics.arcade.overlap(TREcholito, TREdos, this.choco_dos_cholito, null, this);
      juego.physics.arcade.overlap(TREcholito, TREtres, this.choco_tres_cholito, null, this);
      juego.physics.arcade.overlap(TREcholito, TREcuatro, this.choco_cuatro_cholito, null, this);
      juego.physics.arcade.overlap(TREcholito, TREcinco, this.choco_cinco_cholito, null, this);
      juego.physics.arcade.overlap(TREcholito, TRElapiz, this.choco_lapiz_cholito, null, this);


      juego.physics.arcade.overlap(TREbasePrimal, TREuno, this.choco_uno_basePrimal, null, this);
      juego.physics.arcade.overlap(TREbasePrimal, TREdos, this.choco_dos_basePrimal, null, this);
      juego.physics.arcade.overlap(TREbasePrimal, TREtres, this.choco_tres_basePrimal, null, this);
      juego.physics.arcade.overlap(TREbasePrimal, TREcuatro, this.choco_cuatro_basePrimal, null, this);

      juego.physics.arcade.overlap(TREuno, TREcuatro, this.choco_uno_cuatro, null, this);
      juego.physics.arcade.overlap(TREdos, TREtres, this.choco_dos_tres, null, this);
      juego.physics.arcade.overlap(TREdos, TREuno, this.choco_dos_uno, null, this);
      juego.physics.arcade.overlap(TREdos, TREcuatro, this.choco_dos_cuatro, null, this);
      juego.physics.arcade.overlap(TREtres, TREuno, this.choco_tres_uno, null, this);
      juego.physics.arcade.overlap(TREtres, TREcuatro, this.choco_tres_cuatro, null, this);




      if(TRElapiz.position.y!=30)
      {
        TRElapiz.animations.play('anilapiz');
      }
      if (TRElapiz.position.y==30) {
        TRElapiz.animations.play('stop')
      }






      if(TREtres!=null && TREtres.position.y!=536)
          {
              TREbaseprimal_secundario_tres=false;
              TREtres.inputEnabled = true;
              TREtres.inputEnabled = true;


          }
          if(TREdos!=null && TREdos.position.y!=536)
                  {
                      TREbaseprimal_secundario_dos=false;
                      TREdos.inputEnabled = true;
                      TREdos.inputEnabled = true;

                  }

              if(TREuno!=null && TREuno.position.y!=536)
                      {
                          TREbaseprimal_secundario_uno=false;
                          TREuno.inputEnabled = true;
                          TREuno.inputEnabled = true;

                      }

                      if(TREcuatro!=null && TREcuatro.position.y!=536)
                              {
                                  TREbaseprimal_secundario_cuatro=false;
                                  TREcuatro.inputEnabled = true;
                                  TREcuatro.inputEnabled = true;

                              }

      if (TREpunteroBase4==0) {

        if (TREbaseprimal_secundario_uno&&TREbaseprimal_secundario_tres==true&& PunteroNivel==0) {
          TREuno.inputEnabled = false;
          TREtres.inputEnabled = false;
          TREcholito.body.velocity.x= +500;

          TREcholito.animations.play('derecha');
          if (jas==true) {

            TREcholito.body.velocity.x= 0;
            TREcholito.animations.play('stop');

            TRElapiz.position.y=30;
            TRElapiz.anchor.setTo(0.5);
            TRElapiz.position.x=700;
            PunteroNivel=1;


          }

        }

        if (TREbaseprimal_secundario_dos&&TREbaseprimal_secundario_cuatro==true&&PunteroNivel==0) {
          TREdos.inputEnabled = false;
          TREcuatro.inputEnabled = false;
          TREcholito.body.velocity.x= +500;

          TREcholito.animations.play('derecha');
          if (jas==true) {

            TREcholito.body.velocity.x= 0;
            TREcholito.animations.play('stop');

            TRElapiz.position.y=30;
            TRElapiz.anchor.setTo(0.5);
            TRElapiz.position.x=700;
            PunteroNivel=1;


          }

        }



      }

      if (TREpunteroBase5==0) {
        if (TREbaseprimal_secundario_uno&&TREbaseprimal_secundario_cuatro==true&&PunteroNivel==0) {
          TREuno.inputEnabled = false;
          TREcuatro.inputEnabled = false;
          TREcholito.body.velocity.x= +500;
          TREcholito.animations.play('derecha');
          if (jas==true) {

            TREcholito.body.velocity.x= 0;
            TREcholito.animations.play('stop');

            TRElapiz.position.y=30;
            TRElapiz.anchor.setTo(0.5);
            TRElapiz.position.x=700;
            PunteroNivel=1;


          }

        }
        if (TREbaseprimal_secundario_dos&&TREbaseprimal_secundario_tres==true&&PunteroNivel==0) {
          TREtres.inputEnabled = false;
          TREdos.inputEnabled = false;
          TREcholito.body.velocity.x= +500;
          TREcholito.animations.play('derecha');
          if (jas==true) {

            TREcholito.body.velocity.x= 0;
            TREcholito.animations.play('stop');

            TRElapiz.position.y=30;
            TRElapiz.anchor.setTo(0.5);
            TRElapiz.position.x=700;
            PunteroNivel=1;


          }

        }


      }





   TREtexto1.text=TREbaseprimal_secundario_dos;
  TREtexto2.text=TREbaseprimal_secundario_tres;


    },

    PasarNivel:function()
    {
      if (TRElapiz.position.y==30)
      {
           alert("genial");
      }
  },

    choco_uno_cholito:function(){TREuno.body.allowGravity=false; TREuno.body.immovable=true;},
    choco_dos_cholito:function(){TREdos.body.allowGravity=false; TREdos.body.immovable=true;},
    choco_tres_cholito:function(){TREtres.body.allowGravity=false; TREtres.body.immovable=true;},
    choco_cuatro_cholito:function(){TREcuatro.body.allowGravity=false; TREcuatro.body.immovable=true;},
    choco_cinco_cholito:function(){TREcinco.body.allowGravity=false; TREcinco.body.immovable=true;},
    choco_lapiz_cholito:function(){ TRElapiz.body.allowGravity=false; TRElapiz.body.immovable=true;},

    choco_uno_cuatro:function()
    {
      if(TREbaseprimal_secundario_cuatro==true &&TREuno.position.y>=450 )
        {


           TREuno.position.y=250;

        }
        if(TREbaseprimal_secundario_uno==true &&TREcuatro.position.y>=450 )
          {

             TREcuatro.position.y=250;

          }

    },
    choco_tres_cuatro:function()
    {
      if(TREbaseprimal_secundario_cuatro==true &&TREtres.position.y>=450 )
        {


           TREtres.position.y=250;

        }
        if(TREbaseprimal_secundario_tres==true &&TREcuatro.position.y>=450 )
          {

             TREcuatro.position.y=250;

          }

    },
    choco_tres_uno:function()
    {
      if(TREbaseprimal_secundario_uno==true &&TREtres.position.y>=450 )
        {


           TREtres.position.y=250;

        }
        if(TREbaseprimal_secundario_tres==true &&TREuno.position.y>=450 )
          {

             TREuno.position.y=250;

          }

    },
    choco_dos_cuatro:function()
    {
      if(TREbaseprimal_secundario_cuatro==true &&TREdos.position.y>=450 )
        {


           TREdos.position.y=250;

        }
        if(TREbaseprimal_secundario_dos==true &&TREcuatro.position.y>=450 )
          {

             TREcuatro.position.y=250;

          }

    },
    choco_dos_uno:function()
    {
      if(TREbaseprimal_secundario_uno==true &&TREdos.position.y>=450 )
        {


           TREdos.position.y=250;

        }
        if(TREbaseprimal_secundario_dos==true &&TREuno.position.y>=450 )
          {

             TREuno.position.y=250;

          }

    },
    choco_dos_tres:function()
    {
      if(TREbaseprimal_secundario_tres==true &&TREdos.position.y>=450 )
        {


           TREdos.position.y=250;

        }
        if(TREbaseprimal_secundario_dos==true &&TREtres.position.y>=450 )
          {

             TREtres.position.y=250;

          }

    },

    choco_uno_basePrimal:function(){TREuno.position.y=TREbasePrimal.position.y-75; TREbaseprimal_secundario_uno=true;},
    choco_dos_basePrimal:function(){TREdos.position.y=TREbasePrimal.position.y-75; TREbaseprimal_secundario_dos=true;},
    choco_tres_basePrimal:function(){TREtres.position.y=TREbasePrimal.position.y-75; TREbaseprimal_secundario_tres=true;},
    choco_cuatro_basePrimal:function(){TREcuatro.position.y=TREbasePrimal.position.y-75; TREbaseprimal_secundario_cuatro=true;},

    chocoUno:function(){

        var uno1=juego.physics.arcade.overlap(TREpiso1, TREuno, null, null, this);
        var uno2=juego.physics.arcade.overlap(TREpiso2, TREuno, null, null, this);
        var uno3=juego.physics.arcade.overlap(TREbarra_menu, TREuno, null, null, this);



       if(uno1==true ||uno2==true||uno3==true)  {
            var pos_barraMenu_y=TREpiso2.position.y;
             if (TREuno.position.y>=pos_barraMenu_y) { TREuno.position.y=TREpiso2.position.y-38;  }

        }
     },
     chocoDos:function(){
         var dos1=juego.physics.arcade.overlap(TREpiso1, TREdos, null, null, this);
         var dos2=juego.physics.arcade.overlap(TREpiso2, TREdos, null, null, this);
         var dos3=juego.physics.arcade.overlap(TREbarra_menu, TREdos, null, null, this);



        if(dos1==true ||dos2==true||dos3==true)  {
             var pos_barraMenu_y=TREpiso2.position.y;
              if (TREdos.position.y>=pos_barraMenu_y) { TREdos.position.y=TREpiso2.position.y-38;  }

         }
     },
     chocoTres:function(){
         var tres1=juego.physics.arcade.overlap(TREpiso1, TREtres, null, null, this);
         var tres2=juego.physics.arcade.overlap(TREpiso2, TREtres, null, null, this);
         var tres3=juego.physics.arcade.overlap(TREbarra_menu, TREtres, null, null, this);



        if(tres1==true ||tres2==true||tres3==true)  {
             var pos_barraMenu_y=TREpiso2.position.y;
              if (TREtres.position.y>=pos_barraMenu_y) { TREtres.position.y=TREpiso2.position.y-38;  }

         }
     },
     chocoCuatro:function(){

         var cuatro1=juego.physics.arcade.overlap(TREpiso1, TREcuatro, null, null, this);
         var cuatro2=juego.physics.arcade.overlap(TREpiso2, TREcuatro, null, null, this);
         var cuatro3=juego.physics.arcade.overlap(TREbarra_menu, TREcuatro, null, null, this);



        if(cuatro1==true ||cuatro2==true||cuatro3==true)  {
             var pos_barraMenu_y=TREpiso2.position.y;
              if (TREcuatro.position.y>=pos_barraMenu_y) { TREcuatro.position.y=TREpiso2.position.y-38;  }

         }
     },
     chocoCinco:function(){
         var cinco1=juego.physics.arcade.overlap(TREpiso1, TREcinco, null, null, this);
         var cinco2=juego.physics.arcade.overlap(TREpiso2, TREcinco, null, null, this);
         var cinco3=juego.physics.arcade.overlap(TREbarra_menu, TREcinco, null, null, this);



        if(cinco1==true ||cinco2==true||cinco3==true)  {
             var pos_barraMenu_y=TREpiso2.position.y;
              if (TREcinco.position.y>=pos_barraMenu_y) { TREcinco.position.y=TREpiso2.position.y-38;  }

         }
     },

    choqueDerecha:function()     {
         juego.physics.arcade.overlap(TREpiso2,TREbasePrimal, this.tocoDos, null, this);
         if(TREparar2==0) { TREpiso2.body.velocity.x=-250; }
         else if (TREparar2==1) {
             if(TREespacio_piso1==0){
                                   TREpiso2.body.velocity.x=0;
                                   var m =TREpiso2.position.x;
                                   TREpiso2.position.x=m+10;
                                   TREespacio_piso1=1;

                               }

                             }
         },
          tocoDos:function()     {
           if(TREpiso2.alive == false) { return; }
               TREparar2=1;
         },
    choqueIzquierda:function()   {
          juego.physics.arcade.overlap(TREpiso1,TREbasePrimal, this.tocoUno, null, this);
          if(TREparar1==0) { TREpiso1.body.velocity.x=+250; }
          else if (TREparar1==1)
          {
              if(TREespacio_piso2==0)
                  {
                               TREpiso1.body.velocity.x=0;
                               var m =TREpiso1.position.x;
                               TREpiso1.position.x=m-10;
                               TREespacio_piso2=1;

                  }
          }
          },
          tocoUno:function()     {
            if(TREpiso1.alive == false) { return; }
                TREparar1=1;
          },
    pasarBloques:function()      {
        if(TREuno!=null&&TRa!=2)

            {
              if(TREx1==0) {
                      if(TREuno.position.x<=TRExpuntero  ) {
                                                      TREuno.body.velocity.x=+500;
                                                      }
                      if(TREuno.position.x>=TRExpuntero ){
                                                      TREuno.body.velocity.x=0;
                                                      TRExpuntero=TREuno.position.x+400;
                                                      TREx1=1;
                                         }

                  }




            }
        if(TREdos!=null&&TRb!=2)

            {
              if(TREx2==0) {
                      if(TREdos.position.x<=TRExpuntero  ) {
                                                      TREdos.body.velocity.x=+500;
                                                      }
                      if(TREdos.position.x>=TRExpuntero ){
                                                      TREdos.body.velocity.x=0;
                                                      TRExpuntero=TREdos.position.x+400;
                                                      TREx2=1;
                                         }

                  }



            }
        if(TREtres!=null&&TRc!=2)

            {
              if(TREx3==0) {
                      if(TREtres.position.x<=TRExpuntero  ) {
                                                      TREtres.body.velocity.x=+500;
                                                      }
                      if(TREtres.position.x>=TRExpuntero ){
                                                      TREtres.body.velocity.x=0;
                                                      TRExpuntero=TREtres.position.x+400;
                                                      TREx3=1;
                                         }

                  }



            }
        if(TREcuatro!=null&&TRd!=2)

            {
              if(TREx4==0) {
                      if(TREcuatro.position.x<=TRExpuntero  ) {
                                                      TREcuatro.body.velocity.x=+500;
                                                      }
                      if(TREcuatro.position.x>=TRExpuntero ){
                                                      TREcuatro.body.velocity.x=0;
                                                      TRExpuntero=TREcuatro.position.x+400;
                                                      TREx4=1;
                                         }

                  }


            }
            if(TREcinco!=null)

            {



            }
            if (TRElapiz!=null) {

              if (TREx6==0) {
                if (TRElapiz.position.x<=juego.width-250) {
                  TRElapiz.body.velocity.x=+600;

                }
                if (TRElapiz.position.x>=juego.width-250) {
                  TRElapiz.body.velocity.x=0;
                  TRElapiz.position.y=TREpiso1.position.y-55;
                  TREx6=1;

                }


              }




            }

            },



};
