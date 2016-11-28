
var Mitiempo;
var Micielo;
var MifondoDegra;
var Mibarra_menu;
var Micholito;

var Mib_atras      ;
var Mib_siguiente  ;
var Mib_home       ;
var Mib_actualizar ;
var Micholito_negro;
var MiscroolBar    ;

var Mipiso1;
var Mipiso2;
var MibasePrimal;
//PARAR  PISO AL   COLICIONAR  CON  BASE
var Miparar1 = 0;
var Miparar2 = 0;
var Miespacio_piso2 = 0;
var Miespacio_piso1 = 0;

var Miuno;
var Midos;
var Mitres;
var Micuatro;
var Micinco;
var Milapiz;
var e=0;
var f=0;

//PASAR BLOQUES
var Mix1=0;
var Mix2=0;
var Mix3=0;
var Mix4=0;
var Mix5=0;
var Mix6=0;
var Mixpuntero=50;
//CHACAN CON BASE PRIMAL
var Mibaseprimal_secundario_uno=false;
var Mibaseprimal_secundario_dos=false;
var Mibaseprimal_secundario_tres=false;
var Mibaseprimal_secundario_cuatro=false;
var Mibaseprimal_secundario_cinco=false;

//CHOCAR CON mochila
var lapizPuntero=0;

//TEXTOS
var Mitexto1;
var Mitexto2;
// VER  BASE  5  O 4
var MipunteroBase5=5;
var MipunteroBase4=4;



var Juego1_2 = {
    preload:function()
    {
               juego.load.image('Micielo','img/degra.png');
               juego.load.image('Minuve','img/nuves.png');
               juego.load.image('Mibar_menu','img/barra_menu.png');
               juego.load.image('Mipiso','img/piso2.png');

               juego.load.spritesheet('Micholito','img/sprite_comple2.png',70,185);

               juego.load.spritesheet('Milapiz','img/lapiz.png',60,60);

               juego.load.image('Micinco','img/Cinco.png');
               juego.load.image('Micuatro','img/Cuatro.png');
               juego.load.image('Mitres','img/Tres.png');
               juego.load.image('Midos','img/Dos.png');
               juego.load.image('Miuno','img/Uno.png');

               juego.load.image('Mib_atras','img/atras.png');
               juego.load.image('Mib_siguiente','img/sig.png');
               juego.load.image('Mib_actualizar','img/reanudar.png');
               juego.load.image('Mib_home','img/home.png');

               juego.load.image('Micholito_negro','img/cholito_negro.png');
               juego.load.image('MiscroolBar2','img/barras/barra2.png');

    },
    create:function()
    {



               juego.physics.startSystem(Phaser.Physics.ARCADE);
               MifondoDegra = new Phaser.Rectangle(0, 0,largo, altura);
               Micielo = juego.add.tileSprite(0,0,juego.width,juego.height,'Micielo');


               Micholito=juego.add.sprite(40,100,'Micholito');
               Milapiz=juego.add.sprite(50,juego.height/2-200,'Milapiz')
               Milapiz.anchor.setTo(0.5);
               Milapiz.animations.add('anilapiz',[0,1,2],6,true);
               Milapiz.animations.add('stop',[2],20,true);




               Micholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
               Micholito.animations.add('stop', [4], 20, true);
               Micholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
               Micholito.animations.add('llora', [9], 10, true);

               Mipiso1=juego.add.sprite(-750,juego.height-250,'Mipiso');
               Mipiso2=juego.add.sprite(juego.width-100,juego.height-250,'Mipiso');

               Mibarra_menu=juego.add.tileSprite(0,juego.height-100,juego.width,100,'Mibar_menu');
               var ye = (barra_menu.position.y)+11;
               var ex =(barra_menu.position.x)+4;

               Mib_atras            =this.add.button(ex,ye,'Mib_atras',this.Atras,this);
               Mib_siguiente        =this.add.button(b_atras.position.x+64,ye,'Mib_siguiente',this.Siguiente,this);
               Mib_home             =this.add.button(b_siguiente.position.x+64,ye,'Mib_home',null,this);
               Mib_actualizar       =this.add.button(b_home.position.x+64,ye,'Mib_actualizar',null,this);
               Micholito_negro      =juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
               MiscroolBar          =juego.add.tileSprite(cholito_negro.position.x+50,ye+20,300,40,'MiscroolBar2');

               var base = Math.floor((Math.random() * 2) + 4);



              if (base==4)
                {
                   MibasePrimal=juego.add.sprite(juego.width/2,juego.height-137,'Micuatro');
                   MipunteroBase4=0;

                   Miuno=juego.add.sprite(50,juego.height/2-200,'Miuno');
                   juego.physics.arcade.enable([Miuno]);
                   Miuno.body.allowGravity=false;
                   Miuno.body.inmovable=true;
                   Miuno.body.bounce.y=0;
                   Miuno.inputEnabled = true;
                   Miuno.anchor.set(0.5);
                   Miuno.input.enableDrag();
                   Miuno.input.boundsRect = MifondoDegra;

                   Mitres=juego.add.sprite(50,juego.height/2-200,'Mitres');
                   juego.physics.arcade.enable([Mitres]);
                   Mitres.body.allowGravity=false;
                   Mitres.body.inmovable=true;
                   Mitres.body.bounce.y=0;
                   Mitres.inputEnabled = true;
                   Mitres.anchor.set(0.5);
                   Mitres.input.enableDrag();
                   Mitres.input.boundsRect = MifondoDegra;


                   for (var i = 1; i <=2; i++)
                   {
                             var ran= Math.floor(Math.random()*2)+1;

                             if (ran==1&& e==0) {
                                                      Micuatro=juego.add.sprite(25,juego.height/2-200,'Midos');
                                                      juego.physics.arcade.enable([Micuatro]);
                                                      Micuatro.body.allowGravity=false;
                                                      Micuatro.body.inmovable=true;
                                                      Micuatro.inputEnabled = true;
                                                      Micuatro.anchor.set(0.5);
                                                      Micuatro.input.enableDrag();
                                                      Micuatro.input.boundsRect = MifondoDegra;

                                                      e=1;
                                                     }
                             if (ran==2&& f==0) {
                                                      Midos=juego.add.sprite(0,juego.height/2-200,'Midos');
                                                      juego.physics.arcade.enable([Midos]);
                                                      Midos.body.allowGravity=false;
                                                      Midos.body.inmovable=true;

                                                      Midos.inputEnabled = true;
                                                      Midos.anchor.set(0.5);

                                                      Midos.input.enableDrag();
                                                      Midos.input.boundsRect = MifondoDegra;


                                                      f=1;
                                                      }

                    }



                }
              else if (base==5)
              {
                 MibasePrimal=juego.add.sprite(juego.width/2,juego.height-137,'Micinco');
                 MipunteroBase5=0;

                 Midos=juego.add.sprite(50,juego.height/2-200,'Midos');
                 juego.physics.arcade.enable([Midos]);
                 Midos.body.allowGravity=false;
                 Midos.body.inmovable=true;
                 Midos.body.bounce.y=0;
                 Midos.inputEnabled = true;
                 Midos.anchor.set(0.5);
                 Midos.input.enableDrag();
                 Midos.input.boundsRect = MifondoDegra;

                 Mitres=juego.add.sprite(50,juego.height/2-200,'Mitres');
                 juego.physics.arcade.enable([Mitres]);
                 Mitres.body.allowGravity=false;
                 Mitres.body.inmovable=true;
                 Mitres.body.bounce.y=0;
                 Mitres.inputEnabled = true;
                 Mitres.anchor.set(0.5);

                 Mitres.input.enableDrag();
                 Mitres.input.boundsRect = MifondoDegra;


                 for (var i = 1; i <=2; i++)
                 {
                           var ran= Math.floor(Math.random()*3)+1;

                           if (ran==1&& e==0) {
                                                    Micuatro=juego.add.sprite(25,juego.height/2-200,'Micuatro');
                                                    juego.physics.arcade.enable([Micuatro]);
                                                    Micuatro.body.allowGravity=false;
                                                    Micuatro.body.inmovable=true;
                                                    Micuatro.inputEnabled = true;
                                                    Micuatro.anchor.set(0.5);
                                                    Micuatro.input.enableDrag();
                                                    Micuatro.input.boundsRect = MifondoDegra;

                                                    e=1;
                                                   }
                           if (ran==2&& f==0) {
                                                    Miuno=juego.add.sprite(50,juego.height/2-200,'Miuno');
                                                    juego.physics.arcade.enable([Miuno]);
                                                    Miuno.body.allowGravity=false;
                                                    Miuno.body.inmovable=true;
                                                    Miuno.inputEnabled = true;
                                                    Miuno.anchor.set(0.5);
                                                    Miuno.input.enableDrag();
                                                    Miuno.input.boundsRect = MifondoDegra;


                                                    f=1;
                                                    }

                  }
                }




               juego.physics.arcade.enable([Mipiso1,Mipiso2,MibasePrimal,Mibarra_menu,Micholito,Milapiz]);
               juego.physics.arcade.gravity.y=260;

               MibasePrimal.anchor.setTo(0.5);
               MibasePrimal.body.allowGravity=false;
               MibasePrimal.body.immovable=true;
               Mipiso1.body.allowGravity=false;
               Mipiso1.body.immovable=true;
               Mipiso2.body.allowGravity=false;
               Mipiso2.body.immovable=true;
               Mibarra_menu.body.allowGravity=false;
               Mibarra_menu.body.immovable=true;
               Micholito.animations.play('stop');
               Milapiz.body.allowGravity=false;
               Milapiz.body.inmovable=true;


               Micholito.animations.play('stop');

               Mitexto1 = juego.add.text(200, 20, "0", {font: "30px Arial", fill: "#FFF"});
               Mitexto2 = juego.add.text(500, 20, "0", {font: "30px Arial", fill: "#FFF"});





    },
    Siguiente:function(){  this.state.start('Juego1_2');},
    update:function()
    {
      Mitiempo = juego.time.events.loop(0, this.choqueIzquierda, this);
      Mitiempo = juego.time.events.loop(0, this.choqueDerecha, this);
      Mitiempo = juego.time.events.loop(1000, this.pasarBloques, this);
      Mitiempo = juego.time.events.loop(0,this.chocoUno,this);
      Mitiempo = juego.time.events.loop(0,this.chocoDos,this);
      Mitiempo = juego.time.events.loop(0,this.chocoTres,this);
      Mitiempo = juego.time.events.loop(0,this.chocoCuatro,this);
      Mitiempo = juego.time.events.loop(0,this.chocoCinco,this);

      juego.physics.arcade.collide(Micholito,Mipiso1);
      juego.physics.arcade.collide(Micholito,Mipiso2);
      juego.physics.arcade.collide(Micholito,Miuno);
      juego.physics.arcade.collide(Micholito,Midos);
      juego.physics.arcade.collide(Micholito,Mitres);
      juego.physics.arcade.collide(Micholito,Micuatro);
      juego.physics.arcade.collide(Micholito,Micinco);
      var jas=juego.physics.arcade.collide(Micholito,Milapiz);
      juego.physics.arcade.overlap(Micholito, Miuno, this.choco_uno_cholito, null, this);
      juego.physics.arcade.overlap(Micholito, Midos, this.choco_dos_cholito, null, this);
      juego.physics.arcade.overlap(Micholito, Mitres, this.choco_tres_cholito, null, this);
      juego.physics.arcade.overlap(Micholito, Micuatro, this.choco_cuatro_cholito, null, this);
      juego.physics.arcade.overlap(Micholito, Micinco, this.choco_cinco_cholito, null, this);
      juego.physics.arcade.overlap(Micholito, Milapiz, this.choco_lapiz_cholito, null, this);


      juego.physics.arcade.overlap(MibasePrimal, Miuno, this.choco_uno_basePrimal, null, this);
      juego.physics.arcade.overlap(MibasePrimal, Midos, this.choco_dos_basePrimal, null, this);
      juego.physics.arcade.overlap(MibasePrimal, Mitres, this.choco_tres_basePrimal, null, this);
      juego.physics.arcade.overlap(MibasePrimal, Micuatro, this.choco_cuatro_basePrimal, null, this);

      juego.physics.arcade.overlap(Midos, Mitres, this.choco_dos_tres, null, this);
      juego.physics.arcade.overlap(Midos, Miuno, this.choco_dos_uno, null, this);
      juego.physics.arcade.overlap(Midos, Micuatro, this.choco_dos_cuatro, null, this);
      juego.physics.arcade.overlap(Mitres, Miuno, this.choco_tres_uno, null, this);
      juego.physics.arcade.overlap(Mitres, Micuatro, this.choco_tres_cuatro, null, this);
      juego.physics.arcade.overlap(Miuno, Micuatro, this.choco_uno_cuatro, null, this);



      if(Milapiz.position.y!=30)
      {
        Milapiz.animations.play('anilapiz');
      }
      if (Milapiz.position.y==30) {
        Milapiz.animations.play('stop')
      }






      if(Mitres!=null && Mitres.position.y!=536)
          {
              Mibaseprimal_secundario_tres=false;
              Mitres.inputEnabled = true;
              Mitres.inputEnabled = true;


          }
          if(Midos!=null && Midos.position.y!=536)
                  {
                      Mibaseprimal_secundario_dos=false;
                      Midos.inputEnabled = true;
                      Midos.inputEnabled = true;

                  }

              if(Miuno!=null && Miuno.position.y!=536)
                      {
                          Mibaseprimal_secundario_uno=false;
                          Miuno.inputEnabled = true;
                          Miuno.inputEnabled = true;

                      }

                      if(Micuatro!=null && Micuatro.position.y!=536)
                              {
                                  Mibaseprimal_secundario_cuatro=false;
                                  Micuatro.inputEnabled = true;
                                  Micuatro.inputEnabled = true;

                              }

      if (MipunteroBase4==0) {

        if (Mibaseprimal_secundario_uno&&Mibaseprimal_secundario_tres==true&&lapizPuntero==0) {
          Miuno.inputEnabled = false;
          Mitres.inputEnabled = false;
          Micholito.body.velocity.x= +200;

          Micholito.animations.play('derecha');
          if (jas==true) {

            Micholito.body.velocity.x= 0;
            Micholito.animations.play('stop');

            Milapiz.position.y=30;
            Milapiz.anchor.setTo(0.5);
            Milapiz.position.x=700;
            lapizPuntero=1;


          }

        }

        if (Mibaseprimal_secundario_dos&&Mibaseprimal_secundario_cuatro==true&&lapizPuntero==0) {
          Midos.inputEnabled = false;
          Micuatro.inputEnabled = false;
          Micholito.body.velocity.x= +200;

          Micholito.animations.play('derecha');
          if (jas==true) {

            Micholito.body.velocity.x= 0;
            Micholito.animations.play('stop');

            Milapiz.position.y=30;
            Milapiz.anchor.setTo(0.5);
            Milapiz.position.x=700;
            lapizPuntero=1;


          }

        }



      }

      if (MipunteroBase5==0) {
        if (Mibaseprimal_secundario_uno&&Mibaseprimal_secundario_cuatro==true&&lapizPuntero==0) {
          Miuno.inputEnabled = false;
          Micuatro.inputEnabled = false;
          Micholito.body.velocity.x= +200;
          Micholito.animations.play('derecha');
          if (jas==true) {

            Micholito.body.velocity.x= 0;
            Micholito.animations.play('stop');

            Milapiz.position.y=30;
            Milapiz.anchor.setTo(0.5);
            Milapiz.position.x=700;
            lapizPuntero=1;


          }

        }
        if (Mibaseprimal_secundario_dos&&Mibaseprimal_secundario_tres==true&&lapizPuntero==0) {
          Mitres.inputEnabled = false;
          Midos.inputEnabled = false;
          Micholito.body.velocity.x= +200;
          Micholito.animations.play('derecha');
          if (jas==true) {

            Micholito.body.velocity.x= 0;
            Micholito.animations.play('stop');

            Milapiz.position.y=30;
            Milapiz.anchor.setTo(0.5);
            Milapiz.position.x=700;
            lapizPuntero=1;


          }

        }
        else if (Mibaseprimal_secundario_uno && Mibaseprimal_secundario_cuatro!=true) {
          Micholito.animations.play('stop');
          Micholito.body.velocity.x=0;
          lapizPuntero==0

        }

      }





   Mitexto1.text=Mibaseprimal_secundario_uno;
  Mitexto2.text=Mibaseprimal_secundario_cuatro;

    },

    choco_uno_cholito:function(){Miuno.body.allowGravity=false; Miuno.body.immovable=true;},
    choco_dos_cholito:function(){Midos.body.allowGravity=false; Midos.body.immovable=true;},
    choco_tres_cholito:function(){Mitres.body.allowGravity=false; Mitres.body.immovable=true;},
    choco_cuatro_cholito:function(){Micuatro.body.allowGravity=false; Micuatro.body.immovable=true;},
    choco_cinco_cholito:function(){Micinco.body.allowGravity=false; Micinco.body.immovable=true;},
    choco_lapiz_cholito:function(){ Milapiz.body.allowGravity=false; Milapiz.body.immovable=true;},

    choco_uno_cuatro:function()
    {
      if(Mibaseprimal_secundario_cuatro==true &&Miuno.position.y>=450 )
        {


           Miuno.position.y=250;

        }
        if(Mibaseprimal_secundario_uno==true &&Micuatro.position.y>=450 )
          {

             Micuatro.position.y=250;

          }

    },
    choco_tres_cuatro:function()
    {
      if(Mibaseprimal_secundario_cuatro==true &&Mitres.position.y>=450 )
        {


           Mitres.position.y=250;

        }
        if(Mibaseprimal_secundario_tres==true &&Micuatro.position.y>=450 )
          {

             Micuatro.position.y=250;

          }

    },
    choco_tres_uno:function()
    {
      if(Mibaseprimal_secundario_uno==true &&Mitres.position.y>=450 )
        {


           Mitres.position.y=250;

        }
        if(Mibaseprimal_secundario_tres==true &&Miuno.position.y>=450 )
          {

             Miuno.position.y=250;

          }

    },
    choco_dos_cuatro:function()
    {
      if(Mibaseprimal_secundario_cuatro==true &&Midos.position.y>=450 )
        {


           Midos.position.y=250;

        }
        if(Mibaseprimal_secundario_dos==true &&Micuatro.position.y>=450 )
          {

             Micuatro.position.y=250;

          }

    },
    choco_dos_uno:function()
    {
      if(Mibaseprimal_secundario_uno==true &&Midos.position.y>=450 )
        {


           Midos.position.y=250;

        }
        if(Mibaseprimal_secundario_dos==true &&Miuno.position.y>=450 )
          {

             Miuno.position.y=250;

          }

    },
    choco_dos_tres:function()
    {
      if(Mibaseprimal_secundario_tres==true &&Midos.position.y>=450 )
        {


           Midos.position.y=250;

        }
        if(Mibaseprimal_secundario_dos==true &&Mitres.position.y>=450 )
          {

             Mitres.position.y=250;

          }

    },

    choco_uno_basePrimal:function(){Miuno.position.y=MibasePrimal.position.y-75; Mibaseprimal_secundario_uno=true;},
    choco_dos_basePrimal:function(){Midos.position.y=MibasePrimal.position.y-75; Mibaseprimal_secundario_dos=true;},
    choco_tres_basePrimal:function(){Mitres.position.y=MibasePrimal.position.y-75; Mibaseprimal_secundario_tres=true;},
    choco_cuatro_basePrimal:function(){Micuatro.position.y=MibasePrimal.position.y-75; Mibaseprimal_secundario_cuatro=true;},

    chocoUno:function(){

        var uno1=juego.physics.arcade.overlap(Mipiso1, Miuno, null, null, this);
        var uno2=juego.physics.arcade.overlap(Mipiso2, Miuno, null, null, this);
        var uno3=juego.physics.arcade.overlap(Mibarra_menu, Miuno, null, null, this);



       if(uno1==true ||uno2==true||uno3==true)  {
            var pos_barraMenu_y=Mipiso2.position.y;
             if (Miuno.position.y>=pos_barraMenu_y) { Miuno.position.y=Mipiso2.position.y-38;  }

        }
     },
     chocoDos:function(){
         var dos1=juego.physics.arcade.overlap(Mipiso1, Midos, null, null, this);
         var dos2=juego.physics.arcade.overlap(Mipiso2, Midos, null, null, this);
         var dos3=juego.physics.arcade.overlap(Mibarra_menu, Midos, null, null, this);



        if(dos1==true ||dos2==true||dos3==true)  {
             var pos_barraMenu_y=Mipiso2.position.y;
              if (Midos.position.y>=pos_barraMenu_y) { Midos.position.y=Mipiso2.position.y-38;  }

         }
     },
     chocoTres:function(){
         var tres1=juego.physics.arcade.overlap(Mipiso1, Mitres, null, null, this);
         var tres2=juego.physics.arcade.overlap(Mipiso2, Mitres, null, null, this);
         var tres3=juego.physics.arcade.overlap(Mibarra_menu, Mitres, null, null, this);



        if(tres1==true ||tres2==true||tres3==true)  {
             var pos_barraMenu_y=Mipiso2.position.y;
              if (Mitres.position.y>=pos_barraMenu_y) { Mitres.position.y=Mipiso2.position.y-38;  }

         }
     },
     chocoCuatro:function(){
         var cuatro1=juego.physics.arcade.overlap(Mipiso1, Micuatro, null, null, this);
         var cuatro2=juego.physics.arcade.overlap(Mipiso2, Micuatro, null, null, this);
         var cuatro3=juego.physics.arcade.overlap(Mibarra_menu, Micuatro, null, null, this);



        if(cuatro1==true ||cuatro2==true||cuatro3==true)  {
             var pos_barraMenu_y=Mipiso2.position.y;
              if (Micuatro.position.y>=pos_barraMenu_y) { Micuatro.position.y=Mipiso2.position.y-38;  }

         }
     },
     chocoCinco:function(){
         var cinco1=juego.physics.arcade.overlap(Mipiso1, Micinco, null, null, this);
         var cinco2=juego.physics.arcade.overlap(Mipiso2, Micinco, null, null, this);
         var cinco3=juego.physics.arcade.overlap(Mibarra_menu, Micinco, null, null, this);



        if(cinco1==true ||cinco2==true||cinco3==true)  {
             var pos_barraMenu_y=Mipiso2.position.y;
              if (Micinco.position.y>=pos_barraMenu_y) { Micinco.position.y=Mipiso2.position.y-38;  }

         }
     },

    choqueDerecha:function()     {
         juego.physics.arcade.overlap(Mipiso2,MibasePrimal, this.tocoDos, null, this);
         if(Miparar2==0) { Mipiso2.body.velocity.x=-250; }
         else if (Miparar2==1) {
             if(Miespacio_piso1==0){
                                   Mipiso2.body.velocity.x=0;
                                   var m =Mipiso2.position.x;
                                   Mipiso2.position.x=m+5;
                                   Miespacio_piso1=1;

                               }

                             }
         },
          tocoDos:function()     {
           if(Mipiso2.alive == false) { return; }
               Miparar2=1;
         },
    choqueIzquierda:function()   {
          juego.physics.arcade.overlap(Mipiso1,MibasePrimal, this.tocoUno, null, this);
          if(Miparar1==0) { Mipiso1.body.velocity.x=+250; }
          else if (Miparar1==1)
          {
              if(Miespacio_piso2==0)
                  {
                               Mipiso1.body.velocity.x=0;
                               var m =Mipiso1.position.x;
                               Mipiso1.position.x=m-5;
                               Miespacio_piso2=1;

                  }
          }
          },
          tocoUno:function()     {
            if(Mipiso1.alive == false) { return; }
                Miparar1=1;
          },
    pasarBloques:function()      {
        if(Miuno!=null)

            {
              if(Mix1==0) {
                      if(Miuno.position.x<=Mixpuntero  ) {
                                                      Miuno.body.velocity.x=+500;
                                                      }
                      if(Miuno.position.x>=Mixpuntero ){
                                                      Miuno.body.velocity.x=0;
                                                      Mixpuntero=Miuno.position.x+400;
                                                      Mix1=1;
                                         }

                  }




            }
        if(Midos!=null)

            {
              if(Mix2==0) {
                      if(Midos.position.x<=Mixpuntero  ) {
                                                      Midos.body.velocity.x=+500;
                                                      }
                      if(Midos.position.x>=Mixpuntero ){
                                                      Midos.body.velocity.x=0;
                                                      Mixpuntero=Midos.position.x+400;
                                                      Mix2=1;
                                         }

                  }



            }
        if(Mitres!=null)

            {
              if(Mix3==0) {
                      if(Mitres.position.x<=Mixpuntero  ) {
                                                      Mitres.body.velocity.x=+500;
                                                      }
                      if(Mitres.position.x>=Mixpuntero ){
                                                      Mitres.body.velocity.x=0;
                                                      Mixpuntero=Mitres.position.x+400;
                                                      Mix3=1;
                                         }

                  }



            }
        if(Micuatro!=null)

            {
              if(Mix4==0) {
                      if(Micuatro.position.x<=Mixpuntero  ) {
                                                      Micuatro.body.velocity.x=+500;
                                                      }
                      if(Micuatro.position.x>=Mixpuntero ){
                                                      Micuatro.body.velocity.x=0;
                                                      Mixpuntero=Micuatro.position.x+400;
                                                      Mix4=1;
                                         }

                  }


            }
            if(Micinco!=null)

            {



            }
            if (Milapiz!=null) {

              if (Mix6==0) {
                if (Milapiz.position.x<=juego.width-250) {
                  Milapiz.body.velocity.x=+400;

                }
                if (Milapiz.position.x>=juego.width-250) {
                  Milapiz.body.velocity.x=0;
                  Milapiz.position.y=Mipiso1.position.y-55;
                  Mix6=1;

                }


              }




            }

            },



};
