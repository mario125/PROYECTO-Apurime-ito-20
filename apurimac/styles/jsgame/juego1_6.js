
var  S_cholito;
var  S_globo;
var  S_piso1;
var  S_piso2;
var  S_base;
var  S_basePrimal;
var  S_separacion=5;
var  S_mal_bien=0;
var  S_j=300;

var  S_uno =0;
var  S_dos =0;
var  S_tres =0;
var  S_cuatro =0;
var  S_cinco =0;
var  S_seis =0;
var  S_siete =0;
var  S_ocho =0;
var  S_nueve =0;

var  S_pulsacion=0;
var  S_suma=0;
var  S_cruz;
var  S_check;
var  S_time;
var  S_parar2=0;
var  S_parar1=0;
var  S_pasar=0;


var  S_espacio_piso2=0;
var  S_espacio_piso1=0;


var Juego1_6={

  preload:function()
  {

    juego.load.image(' S_base12','styles/imagesgame/Nivel6/base12.png');
    juego.load.image(' S_base13','styles/imagesgame/Nivel6/base13.png');
    juego.load.image(' S_piso','styles/imagesgame/piso2.png');
    juego.load.image(' S_check','styles/imagesgame/bien.png');
    juego.load.image(' S_cruz','styles/imagesgame/mal.png');
    juego.load.image(' S_globo','styles/imagesgame/globo.png');

    juego.load.spritesheet(' S_c12', 'styles/imagesgame/Nivel6/c12.png', 100, 75);
    juego.load.spritesheet(' S_c13', 'styles/imagesgame/Nivel6/c13.png', 100, 75);
    juego.load.spritesheet(' S_cholito','styles/imagesgame/sprite_comple2.png',70,185);


  },
  create:function()
  {
   //alert("Juego1_6");
   t1 = juego.add.text(20, 2, "0", {font: "15px Arial", fill: "#000000"});
   t2 = juego.add.text(100, 2, "0", {font: "15px Arial", fill: "#000000"});
   t1.text='NIVEL: 3';
   t2.text='SUBNIVEL: 6';
              juego.physics.startSystem(Phaser.Physics.ARCADE);
//--------------------------------------CHOLITO---------------------------------------------------------
               S_cholito=juego.add.sprite(50,205,' S_cholito');
               S_cholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
               S_cholito.animations.add('stop', [4], 20, true);
               S_cholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
               S_cholito.animations.add('llora', [9], 10, true);
               S_cholito.animations.play('stop');

               S_globo=juego.add.sprite(600,40,' S_globo');
               S_globo.scale.setTo(0.6,0.7);
//-------------------------------------------MENU----------------------------------------------------
               barra_menu=juego.add.tileSprite(0,juego.height-60,juego.width,100,'bar_menu');
               var ye = (barra_menu.position.y)+4;
               var ex =(barra_menu.position.x)+4;
               b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
               b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
               b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
               b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
               cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
               scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+10,300,40,'scroolBar7');

               b_atras.scale.setTo(0.8,0.8);
               b_siguiente.scale.setTo(0.8,0.8);
               b_home.scale.setTo(0.8,0.8);
               b_actualizar.scale.setTo(0.8,0.8);
               cholito_negro.scale.setTo(1,0.8);
//----------------------------------------PISO IZQUIERDO  Y DERECHO--------------------------------------------
                S_piso1=juego.add.sprite(-800,(barra_menu.position.y)-150,' S_piso');
                S_piso2=juego.add.sprite(700,(barra_menu.position.y)-150,' S_piso');

//-----------------------------------------GENERAR BASE---------------------------------------------------
                S_base = Math.floor((Math.random() * 2) + 12);
               if ( S_base==12) {
                  S_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,300,75,' S_base12');

                 juego.physics.arcade.enable([ S_basePrimal, S_piso1, S_piso2, S_cholito, S_globo]);
                 juego.physics.arcade.gravity.y=250;
                  S_basePrimal.body.allowGravity=false;
                  S_basePrimal.body.immovable=true;
                  S_piso1.body.allowGravity=false;
                  S_piso1.body.immovable=true;
                  S_piso2.body.allowGravity=false;
                  S_piso2.body.immovable=true;
                  S_cholito.body.allowGravity=false;
                  S_cholito.body.immovable=true;
                  S_globo.body.allowGravity=false;
                  S_globo.body.immovable=true;

               }
               if ( S_base==13) {
                  S_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,300,75,' S_base13');

                 juego.physics.arcade.enable([ S_basePrimal, S_piso1, S_piso2, S_cholito, S_globo]);
                 juego.physics.arcade.gravity.y=250;
                  S_basePrimal.body.allowGravity=false;
                  S_basePrimal.body.immovable=true;
                  S_piso1.body.allowGravity=false;
                  S_piso1.body.immovable=true;
                  S_piso2.body.allowGravity=false;
                  S_piso2.body.immovable=true;
                  S_cholito.body.allowGravity=false;
                  S_cholito.body.immovable=true;
                  S_globo.body.allowGravity=false;
                  S_globo.body.immovable=true;

               }

//----------------------------------------------------GENERAR CAJAS----------------------------------------
               for (var i = 0; i < 9; i++)
               {
                   if ( S_base==12) {
                      S_item = juego.add.sprite(90*i+ S_separacion, 25 , ' S_c12', i);
                    }
                   if ( S_base==13) {
                      S_item = juego.add.sprite(90*i+ S_separacion, 25 , ' S_c13', i);
                   }
                                   S_item.name =  i;
                                   S_separacion= S_separacion+10;
                                   S_item.inputEnabled = true;             //PERMITIR PULSACION ARRASTRAR
                                   S_item.input.enableDrag();
                                   S_item.events.onDragStop.add(this.fixLocation);   // Limitar la ubicación a solo las 2 columnas.
               }

  },
  Actualizar:function()
  {
    S_actualis=1;
    this.state.start('Actualis');
  },
  Home:function(){
  //    this.state.start('Nivel');
  },

  fixLocation:function( S_item)
  {
          if ( S_mal_bien==1|| S_mal_bien==2) {
                                  if ( S_item.y<25) {
                                     S_item.y=25;

                                  }else if ( S_item.y>25) {
                                     S_item.y = 25;
                                     S_item.inputEnabled = false;
                                     S_item.tint = 0xFF6699;
                                    Materialize.toast('cajon bloqueado', 4000)

                                  }

          }
          if ( S_mal_bien==0) {
                                 if ( S_item.y <25) {
                                    S_item.y = 25;

                                 }else if ( S_item.y > 25) {
                                     S_item.position.y = S_basePrimal.position.y-75;
                                     S_item.position.x = S_j;
                                     S_j= S_j+100;
                                     S_item.inputEnabled = false;

                                     }

//-------------------------------------ASIGNAMOS  VALORES A CADA  CAJON----------------------------

                                     if ( S_base==12) {
                                                    if ( S_item.name==0) {
                                                       S_uno=4;
                                                    }
                                                    if ( S_item.name==1) {
                                                       S_dos=6;
                                                    }
                                                    if ( S_item.name==2) {
                                                       S_tres=1;
                                                    }
                                                    if ( S_item.name==3) {
                                                       S_cuatro=8;
                                                    }
                                                    if ( S_item.name==4) {
                                                       S_cinco=3;
                                                    }
                                                    if ( S_item.name==5) {
                                                       S_seis=2;
                                                    }
                                                    if ( S_item.name==6) {
                                                       S_siete=5;
                                                    }
                                                    if ( S_item.name==7) {
                                                       S_ocho=9;
                                                    }
                                                    if ( S_item.name==8) {
                                                       S_nueve=7;
                                                    }
                                     }
                                     if ( S_base==13) {
                                                     if ( S_item.name==0) {
                                                        S_uno=9;
                                                     }
                                                     if ( S_item.name==1) {
                                                        S_dos=3;
                                                     }
                                                     if ( S_item.name==2) {
                                                        S_tres=6;
                                                     }
                                                     if ( S_item.name==3) {
                                                        S_cuatro=4;
                                                     }
                                                     if ( S_item.name==4) {
                                                        S_cinco=1;
                                                     }
                                                     if ( S_item.name==5) {
                                                        S_seis=7;
                                                     }
                                                     if ( S_item.name==6) {
                                                        S_siete=8;
                                                     }
                                                     if ( S_item.name==7) {
                                                        S_ocho=5;
                                                     }
                                                     if ( S_item.name==8) {
                                                        S_nueve=2;
                                                     }

                                     }
//--------------------------------------SUMAR PULSACION Y  SUMAR ------------------------------------------------------
                                  S_pulsacion++;
                                  S_suma= S_uno+ S_dos+ S_tres+ S_cuatro+ S_cinco+ S_seis+S_siete+S_ocho+S_nueve;
                                //  alert(S_suma);


//-----------------------------------------EVENTOS----------------------------------------
                                       if ( S_base==12) {
                                                       if ( S_pulsacion==3&& S_suma==12) {
                                                              S_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,' S_check');
                                                              S_cholito.body.velocity.x= +100;
                                                              S_cholito.animations.play('derecha');
                                                              S_mal_bien=1;

                                                       }
                                                       if ( S_pulsacion==3&& S_suma!=12) {
                                                               S_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,' S_cruz');
                                                               S_cholito.animations.play('llora');
                                                               S_mal_bien=2;

                                                       }

                                       }
                                       if ( S_base==13) {
                                                        if ( S_pulsacion==3&& S_suma==13) {
                                                           S_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,' S_check');
                                                           S_cholito.body.velocity.x= +100;
                                                           S_cholito.animations.play('derecha');
                                                           S_mal_bien=1;

                                                        }
                                                        if ( S_pulsacion==3&& S_suma!=13) {
                                                           S_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,' S_cruz');
                                                           S_cholito.animations.play('llora');
                                                           S_mal_bien=2;

                                                        }

                                       }


                             }


},


  update:function()
  {
     S_time = juego.time.events.loop(0, this.choqueI, this);
     S_time = juego.time.events.loop(0, this.choqueD, this);

     var cho=parseInt(S_cholito.position.x);

   if (S_mal_bien==1) {
     if (cho==701) {
                       S_cholito.body.velocity.x= 0;
                       S_cholito.animations.play('stop');

                       S_globo.body.velocity.y=-100;
                       S_cholito.body.velocity.y=-100;
   }

   }
   if (S_mal_bien==2) {
                   S_globo.body.velocity.y=-100;
                   var m=parseInt(S_globo.position.y);

                   if (m==-345) {
                     S_actualis=1;
                     this.state.start('Actualis');
                   }

   }

   var k=parseInt( S_cholito.position.y);
   var fin=-181;

   if (k==fin) {

           var connect,form,result,subnivel=2;
           form='jugador='+jugador+'&nivel='+4+'&sNivel='+7;


           connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');

           // alert(jugador+'-'+nivel);
           if(jugador!=''&&nivel!='')
           {
               connect.onreadystatechange =function(){
               if(connect.readyState==4&&connect.status==200){
                 //  alert(connect.responseText);
                   if(parseInt(connect.responseText) ==1){

                        S_pasar=1;
                        puntoDB=4;
                        nivel=4;

                        sNivel=7;

                   }
                   else{
                      //    error
                      Materialize.toast('ERROR ... ', 3000, 'red')
                     }

               }else if(connect.readyState!=4){
                 Materialize.toast('PROCESANDNO..', 1000,'blue')
                 }
           }

           connect.open('POST','?view=usuario',true);
           connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
           connect.send(form);
           }
           else
           {
             Materialize.toast('ERROR FALTAN  DATOS... ', 3000, 'red')

           }


   }
   if (S_pasar==1) {

     this.state.start('Nivel');

     }




  },
  choqueI:function(){
    juego.physics.arcade.overlap( S_piso1, S_basePrimal, this.tocoUno, null, this);
    if( S_parar1==0) {  S_piso1.body.velocity.x=+200; }
    else if ( S_parar1==1)
    {
        if( S_espacio_piso1==0)
            {
                          S_piso1.body.velocity.x=0;
                          S_espacio_piso1=1;

            }
    }

  },
  tocoUno:function(){
    if( S_piso1.alive == false) { return; }
         S_parar1=1;

  },
  choqueD:function(){
    juego.physics.arcade.overlap( S_piso2, S_basePrimal, this.tocoDos, null, this);
    if( S_parar2==0) {  S_piso2.body.velocity.x=-200; }
    else if ( S_parar2==1)
    {
        if( S_espacio_piso2==0)
            {
                          S_piso2.body.velocity.x=0;
                          S_espacio_piso2=1;

            }
    }

  },
  tocoDos:function(){
    if( S_piso2.alive == false) { return; }
         S_parar2=1;

  }




};
