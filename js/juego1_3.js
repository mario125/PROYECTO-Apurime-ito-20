
var Ttiempo;
var Tcielo;
var TfondoDegra;
var Tbarra_menu;
var Tcholito;

var Tb_atras      ;
var Tb_siguiente  ;
var Tb_home       ;
var Tb_actualizar ;
var Tcholito_negro;
var TscroolBar    ;

var Tpiso1;
var Tpiso2;
var TbasePrimal;
//PARAR  PISO AL   COLICIONAR  CON  BASE
var Tparar1 = 0;
var Tparar2 = 0;
var Tespacio_piso2 = 0;
var Tespacio_piso1 = 0;

var Tuno;
var Tdos;
var Ttres;
var Tcuatro;
var Tcinco;
var Tlapiz;
var e=0;
var f=0;

//PASAR BLOQUES
var Tx1=0;
var Tx2=0;
var Tx3=0;
var Tx4=0;
var Tx5=0;
var Tx6=0;
var Txpuntero=50;
//CHACAN CON BASE PRIMAL
var Tbaseprimal_secundario_uno=false;
var Tbaseprimal_secundario_dos=false;
var Tbaseprimal_secundario_tres=false;
var Tbaseprimal_secundario_cuatro=false;
var Tbaseprimal_secundario_cinco=false;

//CHOCAR CON mochila
var lapizPuntero=0;

//TEXTOS
var Ttexto1;
var Ttexto2;
// VER  BASE  5  O 4
var TpunteroBase5=5;
var TpunteroBase4=4;



var Juego1_3 = {
    preload:function()
    {
               juego.load.image('Tcielo','img/degra.png');
               juego.load.image('Tnuve','img/nuves.png');
               juego.load.image('Tbar_menu','img/barra_menu.png');
               juego.load.image('Tpiso','img/piso2.png');

               juego.load.spritesheet('Tcholito','img/sprite_comple2.png',70,185);

               juego.load.spritesheet('Tlapiz','img/lapiz.png',60,60);

               juego.load.image('Tcinco','img/Cinco.png');
               juego.load.image('Tcuatro','img/Cuatro.png');
               juego.load.image('Ttres','img/Tres.png');
               juego.load.image('Tdos','img/Dos.png');
               juego.load.image('Tuno','img/Uno.png');

               juego.load.image('Tb_atras','img/atras.png');
               juego.load.image('Tb_siguiente','img/sig.png');
               juego.load.image('Tb_actualizar','img/reanudar.png');
               juego.load.image('Tb_home','img/home.png');

               juego.load.image('Tcholito_negro','img/cholito_negro.png');
               juego.load.image('TscroolBar2','img/barras/barra2.png');

    },
    create:function()
    {



               juego.physics.startSystem(Phaser.Physics.ARCADE);
               TfondoDegra = new Phaser.Rectangle(0, 0,largo, altura);
               Tcielo = juego.add.tileSprite(0,0,juego.width,juego.height,'Tcielo');


               Tcholito=juego.add.sprite(40,100,'Tcholito');
               Tlapiz=juego.add.sprite(50,juego.height/2-200,'Tlapiz')
               Tlapiz.anchor.setTo(0.5);
               Tlapiz.animations.add('anilapiz',[0,1,2],6,true);
               Tlapiz.animations.add('stop',[2],20,true);




               Tcholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
               Tcholito.animations.add('stop', [4], 20, true);
               Tcholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
               Tcholito.animations.add('llora', [9], 10, true);

              // Tpiso1=juego.add.sprite(-750,juego.height-250,'Tpiso');
              // Tpiso2=juego.add.sprite(juego.width-100,juego.height-250,'Tpiso');

               Tbarra_menu=juego.add.tileSprite(0,juego.height-100,juego.width,100,'Tbar_menu');
               var ye = (Tbarra_menu.position.y)+11;
               var ex =(Tbarra_menu.position.x)+4;

               Tb_atras            =this.add.button(ex,ye,'Tb_atras',this.Atras,this);
               Tb_siguiente        =this.add.button(Tb_atras.position.x+64,ye,'Tb_siguiente',this.Siguiente,this);
               Tb_home             =this.add.button(Tb_siguiente.position.x+64,ye,'Tb_home',null,this);
               Tb_actualizar       =this.add.button(Tb_home.position.x+64,ye,'Tb_actualizar',null,this);
               Tcholito_negro      =juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
               TscroolBar          =juego.add.tileSprite(Tcholito_negro.position.x+50,ye+20,300,40,'TscroolBar2');

               var base = Math.floor((Math.random() * 2) + 4);



              if (base==4)
                {
                   TbasePrimal=juego.add.sprite(juego.width/2,juego.height-137,'Tcuatro');
                   TpunteroBase4=0;

                   Tuno=juego.add.sprite(50,juego.height/2-200,'Tuno');
                   juego.physics.arcade.enable([Tuno]);
                   Tuno.body.allowGravity=false;
                   Tuno.body.inmovable=true;
                   Tuno.body.bounce.y=0;
                   Tuno.inputEnabled = true;
                   Tuno.anchor.set(0.5);
                   Tuno.input.enableDrag();
                   Tuno.input.boundsRect = TfondoDegra;

                   Ttres=juego.add.sprite(50,juego.height/2-200,'Ttres');
                   juego.physics.arcade.enable([Ttres]);
                   Ttres.body.allowGravity=false;
                   Ttres.body.inmovable=true;
                   Ttres.body.bounce.y=0;
                   Ttres.inputEnabled = true;
                   Ttres.anchor.set(0.5);
                   Ttres.input.enableDrag();
                   Ttres.input.boundsRect = TfondoDegra;


                   for (var i = 1; i <=2; i++)
                   {
                             var ran= Math.floor(Math.random()*2)+1;

                             if (ran==1&& e==0) {
                                                      Tcuatro=juego.add.sprite(25,juego.height/2-200,'Tdos');
                                                      juego.physics.arcade.enable([Tcuatro]);
                                                      Tcuatro.body.allowGravity=false;
                                                      Tcuatro.body.inmovable=true;
                                                      Tcuatro.inputEnabled = true;
                                                      Tcuatro.anchor.set(0.5);
                                                      Tcuatro.input.enableDrag();
                                                      Tcuatro.input.boundsRect = TfondoDegra;

                                                      e=1;
                                                     }
                             if (ran==2&& f==0) {
                                                      Tdos=juego.add.sprite(0,juego.height/2-200,'Tdos');
                                                      juego.physics.arcade.enable([Tdos]);
                                                      Tdos.body.allowGravity=false;
                                                      Tdos.body.inmovable=true;

                                                      Tdos.inputEnabled = true;
                                                      Tdos.anchor.set(0.5);

                                                      Tdos.input.enableDrag();
                                                      Tdos.input.boundsRect = TfondoDegra;


                                                      f=1;
                                                      }

                    }



                }
              else if (base==5)
              {
                 TbasePrimal=juego.add.sprite(juego.width/2,juego.height-137,'Tcinco');
                 TpunteroBase5=0;

                 Tdos=juego.add.sprite(50,juego.height/2-200,'Tdos');
                 juego.physics.arcade.enable([Tdos]);
                 Tdos.body.allowGravity=false;
                 Tdos.body.inmovable=true;
                 Tdos.body.bounce.y=0;
                 Tdos.inputEnabled = true;
                 Tdos.anchor.set(0.5);
                 Tdos.input.enableDrag();
                 Tdos.input.boundsRect = TfondoDegra;

                 Ttres=juego.add.sprite(50,juego.height/2-200,'Ttres');
                 juego.physics.arcade.enable([Ttres]);
                 Ttres.body.allowGravity=false;
                 Ttres.body.inmovable=true;
                 Ttres.body.bounce.y=0;
                 Ttres.inputEnabled = true;
                 Ttres.anchor.set(0.5);

                 Ttres.input.enableDrag();
                 Ttres.input.boundsRect = TfondoDegra;


                 for (var i = 1; i <=2; i++)
                 {
                           var ran= Math.floor(Math.random()*3)+1;

                           if (ran==1&& e==0) {
                                                    Tcuatro=juego.add.sprite(25,juego.height/2-200,'Tcuatro');
                                                    juego.physics.arcade.enable([Tcuatro]);
                                                    Tcuatro.body.allowGravity=false;
                                                    Tcuatro.body.inmovable=true;
                                                    Tcuatro.inputEnabled = true;
                                                    Tcuatro.anchor.set(0.5);
                                                    Tcuatro.input.enableDrag();
                                                    Tcuatro.input.boundsRect = TfondoDegra;

                                                    e=1;
                                                   }
                           if (ran==2&& f==0) {
                                                    Tuno=juego.add.sprite(50,juego.height/2-200,'Tuno');
                                                    juego.physics.arcade.enable([Tuno]);
                                                    Tuno.body.allowGravity=false;
                                                    Tuno.body.inmovable=true;
                                                    Tuno.inputEnabled = true;
                                                    Tuno.anchor.set(0.5);
                                                    Tuno.input.enableDrag();
                                                    Tuno.input.boundsRect = TfondoDegra;


                                                    f=1;
                                                    }

                  }
                }




               juego.physics.arcade.enable([Tpiso1,Tpiso2,TbasePrimal,Tbarra_menu,Tcholito,Tlapiz]);
               juego.physics.arcade.gravity.y=260;

               TbasePrimal.anchor.setTo(0.5);
               TbasePrimal.body.allowGravity=false;
               TbasePrimal.body.immovable=true;
               Tpiso1.body.allowGravity=false;
               Tpiso1.body.immovable=true;
               Tpiso2.body.allowGravity=false;
               Tpiso2.body.immovable=true;
               Tbarra_menu.body.allowGravity=false;
               Tbarra_menu.body.immovable=true;
               Tcholito.animations.play('stop');
               Tlapiz.body.allowGravity=false;
               Tlapiz.body.inmovable=true;


               Tcholito.animations.play('stop');

               Ttexto1 = juego.add.text(200, 20, "0", {font: "30px Arial", fill: "#FFF"});
               Ttexto2 = juego.add.text(500, 20, "0", {font: "30px Arial", fill: "#FFF"});





    },
    Siguiente:function(){  this.state.start('Juego1_2');},
    update:function()
    {
      Ttiempo = juego.time.events.loop(0, this.choqueIzquierda, this);
      Ttiempo = juego.time.events.loop(0, this.choqueDerecha, this);
      Ttiempo = juego.time.events.loop(1000, this.pasarBloques, this);
      Ttiempo = juego.time.events.loop(0,this.chocoUno,this);
      Ttiempo = juego.time.events.loop(0,this.chocoDos,this);
      Ttiempo = juego.time.events.loop(0,this.chocoTres,this);
      Ttiempo = juego.time.events.loop(0,this.chocoCuatro,this);
      Ttiempo = juego.time.events.loop(0,this.chocoCinco,this);

      juego.physics.arcade.collide(Tcholito,Tpiso1);
      juego.physics.arcade.collide(Tcholito,Tpiso2);
      juego.physics.arcade.collide(Tcholito,Tuno);
      juego.physics.arcade.collide(Tcholito,Tdos);
      juego.physics.arcade.collide(Tcholito,Ttres);
      juego.physics.arcade.collide(Tcholito,Tcuatro);
      juego.physics.arcade.collide(Tcholito,Tcinco);
      var jas=juego.physics.arcade.collide(Tcholito,Tlapiz);
      juego.physics.arcade.overlap(Tcholito, Tuno, this.choco_uno_cholito, null, this);
      juego.physics.arcade.overlap(Tcholito, Tdos, this.choco_dos_cholito, null, this);
      juego.physics.arcade.overlap(Tcholito, Ttres, this.choco_tres_cholito, null, this);
      juego.physics.arcade.overlap(Tcholito, Tcuatro, this.choco_cuatro_cholito, null, this);
      juego.physics.arcade.overlap(Tcholito, Tcinco, this.choco_cinco_cholito, null, this);
      juego.physics.arcade.overlap(Tcholito, Tlapiz, this.choco_lapiz_cholito, null, this);


      juego.physics.arcade.overlap(TbasePrimal, Tuno, this.choco_uno_basePrimal, null, this);
      juego.physics.arcade.overlap(TbasePrimal, Tdos, this.choco_dos_basePrimal, null, this);
      juego.physics.arcade.overlap(TbasePrimal, Ttres, this.choco_tres_basePrimal, null, this);
      juego.physics.arcade.overlap(TbasePrimal, Tcuatro, this.choco_cuatro_basePrimal, null, this);

      juego.physics.arcade.overlap(Tdos, Ttres, this.choco_dos_tres, null, this);
      juego.physics.arcade.overlap(Tdos, Tuno, this.choco_dos_uno, null, this);
      juego.physics.arcade.overlap(Tdos, Tcuatro, this.choco_dos_cuatro, null, this);
      juego.physics.arcade.overlap(Ttres, Tuno, this.choco_tres_uno, null, this);
      juego.physics.arcade.overlap(Ttres, Tcuatro, this.choco_tres_cuatro, null, this);
      juego.physics.arcade.overlap(Tuno, Tcuatro, this.choco_uno_cuatro, null, this);



      if(Tlapiz.position.y!=30)
      {
        Tlapiz.animations.play('anilapiz');
      }
      if (Tlapiz.position.y==30) {
        Tlapiz.animations.play('stop')
      }






      if(Ttres!=null && Ttres.position.y!=536)
          {
              Tbaseprimal_secundario_tres=false;
              Ttres.inputEnabled = true;
              Ttres.inputEnabled = true;


          }
          if(Tdos!=null && Tdos.position.y!=536)
                  {
                      Tbaseprimal_secundario_dos=false;
                      Tdos.inputEnabled = true;
                      Tdos.inputEnabled = true;

                  }

              if(Tuno!=null && Tuno.position.y!=536)
                      {
                          Tbaseprimal_secundario_uno=false;
                          Tuno.inputEnabled = true;
                          Tuno.inputEnabled = true;

                      }

                      if(Tcuatro!=null && Tcuatro.position.y!=536)
                              {
                                  Tbaseprimal_secundario_cuatro=false;
                                  Tcuatro.inputEnabled = true;
                                  Tcuatro.inputEnabled = true;

                              }

      if (TpunteroBase4==0) {

        if (Tbaseprimal_secundario_uno&&Tbaseprimal_secundario_tres==true&&lapizPuntero==0) {
          Tuno.inputEnabled = false;
          Ttres.inputEnabled = false;
          Tcholito.body.velocity.x= +200;

          Tcholito.animations.play('derecha');
          if (jas==true) {

            Tcholito.body.velocity.x= 0;
            Tcholito.animations.play('stop');

            Tlapiz.position.y=30;
            Tlapiz.anchor.setTo(0.5);
            Tlapiz.position.x=700;
            lapizPuntero=1;


          }

        }

        if (Tbaseprimal_secundario_dos&&Tbaseprimal_secundario_cuatro==true&&lapizPuntero==0) {
          Tdos.inputEnabled = false;
          Tcuatro.inputEnabled = false;
          Tcholito.body.velocity.x= +200;

          Tcholito.animations.play('derecha');
          if (jas==true) {

            Tcholito.body.velocity.x= 0;
            Tcholito.animations.play('stop');

            Tlapiz.position.y=30;
            Tlapiz.anchor.setTo(0.5);
            Tlapiz.position.x=700;
            lapizPuntero=1;


          }

        }



      }

      if (TpunteroBase5==0) {
        if (Tbaseprimal_secundario_uno&&Tbaseprimal_secundario_cuatro==true&&lapizPuntero==0) {
          Tuno.inputEnabled = false;
          Tcuatro.inputEnabled = false;
          Tcholito.body.velocity.x= +200;
          Tcholito.animations.play('derecha');
          if (jas==true) {

            Tcholito.body.velocity.x= 0;
            Tcholito.animations.play('stop');

            Tlapiz.position.y=30;
            Tlapiz.anchor.setTo(0.5);
            Tlapiz.position.x=700;
            lapizPuntero=1;


          }

        }
        if (Tbaseprimal_secundario_dos&&Tbaseprimal_secundario_tres==true&&lapizPuntero==0) {
          Ttres.inputEnabled = false;
          Tdos.inputEnabled = false;
          Tcholito.body.velocity.x= +200;
          Tcholito.animations.play('derecha');
          if (jas==true) {

            Tcholito.body.velocity.x= 0;
            Tcholito.animations.play('stop');

            Tlapiz.position.y=30;
            Tlapiz.anchor.setTo(0.5);
            Tlapiz.position.x=700;
            lapizPuntero=1;


          }

        }
        else if (Tbaseprimal_secundario_uno && Tbaseprimal_secundario_cuatro!=true) {
          Tcholito.animations.play('stop');
          Tcholito.body.velocity.x=0;
          lapizPuntero==0

        }

      }





   Ttexto1.text=Tbaseprimal_secundario_uno;
  Ttexto2.text=Tbaseprimal_secundario_cuatro;

    },

    choco_uno_cholito:function(){Tuno.body.allowGravity=false; Tuno.body.immovable=true;},
    choco_dos_cholito:function(){Tdos.body.allowGravity=false; Tdos.body.immovable=true;},
    choco_tres_cholito:function(){Ttres.body.allowGravity=false; Ttres.body.immovable=true;},
    choco_cuatro_cholito:function(){Tcuatro.body.allowGravity=false; Tcuatro.body.immovable=true;},
    choco_cinco_cholito:function(){Tcinco.body.allowGravity=false; Tcinco.body.immovable=true;},
    choco_lapiz_cholito:function(){ Tlapiz.body.allowGravity=false; Tlapiz.body.immovable=true;},

    choco_uno_cuatro:function()
    {
      if(Tbaseprimal_secundario_cuatro==true &&Tuno.position.y>=450 )
        {


           Tuno.position.y=250;

        }
        if(Tbaseprimal_secundario_uno==true &&Tcuatro.position.y>=450 )
          {

             Tcuatro.position.y=250;

          }

    },
    choco_tres_cuatro:function()
    {
      if(Tbaseprimal_secundario_cuatro==true &&Ttres.position.y>=450 )
        {


           Ttres.position.y=250;

        }
        if(Tbaseprimal_secundario_tres==true &&Tcuatro.position.y>=450 )
          {

             Tcuatro.position.y=250;

          }

    },
    choco_tres_uno:function()
    {
      if(Tbaseprimal_secundario_uno==true &&Ttres.position.y>=450 )
        {


           Ttres.position.y=250;

        }
        if(Tbaseprimal_secundario_tres==true &&Tuno.position.y>=450 )
          {

             Tuno.position.y=250;

          }

    },
    choco_dos_cuatro:function()
    {
      if(Tbaseprimal_secundario_cuatro==true &&Tdos.position.y>=450 )
        {


           Tdos.position.y=250;

        }
        if(Tbaseprimal_secundario_dos==true &&Tcuatro.position.y>=450 )
          {

             Tcuatro.position.y=250;

          }

    },
    choco_dos_uno:function()
    {
      if(Tbaseprimal_secundario_uno==true &&Tdos.position.y>=450 )
        {


           Tdos.position.y=250;

        }
        if(Tbaseprimal_secundario_dos==true &&Tuno.position.y>=450 )
          {

             Tuno.position.y=250;

          }

    },
    choco_dos_tres:function()
    {
      if(Tbaseprimal_secundario_tres==true &&Tdos.position.y>=450 )
        {


           Tdos.position.y=250;

        }
        if(Tbaseprimal_secundario_dos==true &&Ttres.position.y>=450 )
          {

             Ttres.position.y=250;

          }

    },

    choco_uno_basePrimal:function(){Tuno.position.y=TbasePrimal.position.y-75; Tbaseprimal_secundario_uno=true;},
    choco_dos_basePrimal:function(){Tdos.position.y=TbasePrimal.position.y-75; Tbaseprimal_secundario_dos=true;},
    choco_tres_basePrimal:function(){Ttres.position.y=TbasePrimal.position.y-75; Tbaseprimal_secundario_tres=true;},
    choco_cuatro_basePrimal:function(){Tcuatro.position.y=TbasePrimal.position.y-75; Tbaseprimal_secundario_cuatro=true;},

    chocoUno:function(){

        var uno1=juego.physics.arcade.overlap(Tpiso1, Tuno, null, null, this);
        var uno2=juego.physics.arcade.overlap(Tpiso2, Tuno, null, null, this);
        var uno3=juego.physics.arcade.overlap(Tbarra_menu, Tuno, null, null, this);



       if(uno1==true ||uno2==true||uno3==true)  {
            var pos_barraMenu_y=Tpiso2.position.y;
             if (Tuno.position.y>=pos_barraMenu_y) { Tuno.position.y=Tpiso2.position.y-38;  }

        }
     },
     chocoDos:function(){
         var dos1=juego.physics.arcade.overlap(Tpiso1, Tdos, null, null, this);
         var dos2=juego.physics.arcade.overlap(Tpiso2, Tdos, null, null, this);
         var dos3=juego.physics.arcade.overlap(Tbarra_menu, Tdos, null, null, this);



        if(dos1==true ||dos2==true||dos3==true)  {
             var pos_barraMenu_y=Tpiso2.position.y;
              if (Tdos.position.y>=pos_barraMenu_y) { Tdos.position.y=Tpiso2.position.y-38;  }

         }
     },
     chocoTres:function(){
         var tres1=juego.physics.arcade.overlap(Tpiso1, Ttres, null, null, this);
         var tres2=juego.physics.arcade.overlap(Tpiso2, Ttres, null, null, this);
         var tres3=juego.physics.arcade.overlap(Tbarra_menu, Ttres, null, null, this);



        if(tres1==true ||tres2==true||tres3==true)  {
             var pos_barraMenu_y=Tpiso2.position.y;
              if (Ttres.position.y>=pos_barraMenu_y) { Ttres.position.y=Tpiso2.position.y-38;  }

         }
     },
     chocoCuatro:function(){
         var cuatro1=juego.physics.arcade.overlap(Tpiso1, Tcuatro, null, null, this);
         var cuatro2=juego.physics.arcade.overlap(Tpiso2, Tcuatro, null, null, this);
         var cuatro3=juego.physics.arcade.overlap(Tbarra_menu, Tcuatro, null, null, this);



        if(cuatro1==true ||cuatro2==true||cuatro3==true)  {
             var pos_barraMenu_y=Tpiso2.position.y;
              if (Tcuatro.position.y>=pos_barraMenu_y) { Tcuatro.position.y=Tpiso2.position.y-38;  }

         }
     },
     chocoCinco:function(){
         var cinco1=juego.physics.arcade.overlap(Tpiso1, Tcinco, null, null, this);
         var cinco2=juego.physics.arcade.overlap(Tpiso2, Tcinco, null, null, this);
         var cinco3=juego.physics.arcade.overlap(Tbarra_menu, Tcinco, null, null, this);



        if(cinco1==true ||cinco2==true||cinco3==true)  {
             var pos_barraMenu_y=Tpiso2.position.y;
              if (Tcinco.position.y>=pos_barraMenu_y) { Tcinco.position.y=Tpiso2.position.y-38;  }

         }
     },

    choqueDerecha:function()     {
         juego.physics.arcade.overlap(Tpiso2,TbasePrimal, this.tocoDos, null, this);
         if(Tparar2==0) { Tpiso2.body.velocity.x=-250; }
         else if (Tparar2==1) {
             if(Tespacio_piso1==0){
                                   Tpiso2.body.velocity.x=0;
                                   var m =Tpiso2.position.x;
                                   Tpiso2.position.x=m+5;
                                   Tespacio_piso1=1;

                               }

                             }
         },
          tocoDos:function()     {
           if(Tpiso2.alive == false) { return; }
               Tparar2=1;
         },
    choqueIzquierda:function()   {
          juego.physics.arcade.overlap(Tpiso1,TbasePrimal, this.tocoUno, null, this);
          if(Tparar1==0) { Tpiso1.body.velocity.x=+250; }
          else if (Tparar1==1)
          {
              if(Tespacio_piso2==0)
                  {
                               Tpiso1.body.velocity.x=0;
                               var m =Tpiso1.position.x;
                               Tpiso1.position.x=m-5;
                               Tespacio_piso2=1;

                  }
          }
          },
          tocoUno:function()     {
            if(Tpiso1.alive == false) { return; }
                Tparar1=1;
          },
    pasarBloques:function()      {
        if(Tuno!=null)

            {
              if(Tx1==0) {
                      if(Tuno.position.x<=Txpuntero  ) {
                                                      Tuno.body.velocity.x=+500;
                                                      }
                      if(Tuno.position.x>=Txpuntero ){
                                                      Tuno.body.velocity.x=0;
                                                      Txpuntero=Tuno.position.x+400;
                                                      Tx1=1;
                                         }

                  }




            }
        if(Tdos!=null)

            {
              if(Tx2==0) {
                      if(Tdos.position.x<=Txpuntero  ) {
                                                      Tdos.body.velocity.x=+500;
                                                      }
                      if(Tdos.position.x>=Txpuntero ){
                                                      Tdos.body.velocity.x=0;
                                                      Txpuntero=Tdos.position.x+400;
                                                      Tx2=1;
                                         }

                  }



            }
        if(Ttres!=null)

            {
              if(Tx3==0) {
                      if(Ttres.position.x<=Txpuntero  ) {
                                                      Ttres.body.velocity.x=+500;
                                                      }
                      if(Ttres.position.x>=Txpuntero ){
                                                      Ttres.body.velocity.x=0;
                                                      Txpuntero=Ttres.position.x+400;
                                                      Tx3=1;
                                         }

                  }



            }
        if(Tcuatro!=null)

            {
              if(Tx4==0) {
                      if(Tcuatro.position.x<=Txpuntero  ) {
                                                      Tcuatro.body.velocity.x=+500;
                                                      }
                      if(Tcuatro.position.x>=Txpuntero ){
                                                      Tcuatro.body.velocity.x=0;
                                                      Txpuntero=Tcuatro.position.x+400;
                                                      Tx4=1;
                                         }

                  }


            }
            if(Tcinco!=null)

            {



            }
            if (Tlapiz!=null) {

              if (Tx6==0) {
                if (Tlapiz.position.x<=juego.width-250) {
                  Tlapiz.body.velocity.x=+400;

                }
                if (Tlapiz.position.x>=juego.width-250) {
                  Tlapiz.body.velocity.x=0;
                  Tlapiz.position.y=Tpiso1.position.y-55;
                  Tx6=1;

                }


              }




            }

            },



};
