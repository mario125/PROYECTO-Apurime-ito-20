
var  K_cholito;
var  K_globo;
var  K_piso1;
var  K_piso2;
var  K_base;
var  K_basePrimal;
var  K_separacion=25;
var  K_mal_bien=0;
var  K_j=300;

var  K_uno =0;
var  K_dos =0;
var  K_tres =0;
var  K_cuatro =0;
var  K_cinco =0;
var  K_seis =0;
var K_siete =0;

var  K_pulsacion=0;
var  K_suma=0;
var  K_cruz;
var  K_check;
var  K_time;
var  K_parar2=0;
var  K_parar1=0;
var  K_pasar=0;


var  K_espacio_piso2=0;
var  K_espacio_piso1=0;


var Juego1_4={

  preload:function()
  {
    juego.load.image(' K_base8','styles/imagesgame/Nivel4/base8.png');
    juego.load.image(' K_base9','styles/imagesgame/Nivel4/base9.png');
    juego.load.image(' K_piso','styles/imagesgame/piso2.png');
    juego.load.image(' K_check','styles/imagesgame/bien.png');
    juego.load.image(' K_cruz','styles/imagesgame/mal.png');
    juego.load.image(' K_globo','styles/imagesgame/globo.png');

    juego.load.spritesheet(' K_c8', 'styles/imagesgame/Nivel4/c8.png', 100, 75);
    juego.load.spritesheet(' K_c9', 'styles/imagesgame/Nivel4/c9.png', 100, 75);
    juego.load.spritesheet(' K_cholito','styles/imagesgame/sprite_comple2.png',70,185);


  },
  create:function()
  {
alert("juego4");
              juego.physics.startSystem(Phaser.Physics.ARCADE);
//--------------------------------------CHOLITO---------------------------------------------------------
               K_cholito=juego.add.sprite(50,205,' K_cholito');
               K_cholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
               K_cholito.animations.add('stop', [4], 20, true);
               K_cholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
               K_cholito.animations.add('llora', [9], 10, true);
               K_cholito.animations.play('stop');

               K_globo=juego.add.sprite(600,40,' K_globo');
               K_globo.scale.setTo(0.6,0.7);
//-------------------------------------------MENU----------------------------------------------------
               barra_menu=juego.add.tileSprite(0,juego.height-60,juego.width,100,'bar_menu');
               var ye = (barra_menu.position.y)+4;
               var ex =(barra_menu.position.x)+4;
               b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
               b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
               b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
               b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
               cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
               scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+10,300,40,'scroolBar');

               b_atras.scale.setTo(0.8,0.8);
               b_siguiente.scale.setTo(0.8,0.8);
               b_home.scale.setTo(0.8,0.8);
               b_actualizar.scale.setTo(0.8,0.8);
               cholito_negro.scale.setTo(1,0.8);
//----------------------------------------PISO IZQUIERDO  Y DERECHO--------------------------------------------
                K_piso1=juego.add.sprite(-800,(barra_menu.position.y)-150,' K_piso');
                K_piso2=juego.add.sprite(700,(barra_menu.position.y)-150,' K_piso');

//-----------------------------------------GENERAR BASE---------------------------------------------------
                K_base = Math.floor((Math.random() * 2) + 8);
               if ( K_base==8) {
                  K_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,' K_base8');

                 juego.physics.arcade.enable([ K_basePrimal, K_piso1, K_piso2, K_cholito, K_globo]);
                 juego.physics.arcade.gravity.y=250;
                  K_basePrimal.body.allowGravity=false;
                  K_basePrimal.body.immovable=true;
                  K_piso1.body.allowGravity=false;
                  K_piso1.body.immovable=true;
                  K_piso2.body.allowGravity=false;
                  K_piso2.body.immovable=true;
                  K_cholito.body.allowGravity=false;
                  K_cholito.body.immovable=true;
                  K_globo.body.allowGravity=false;
                  K_globo.body.immovable=true;

               }
               if ( K_base==9) {
                  K_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,' K_base9');

                 juego.physics.arcade.enable([ K_basePrimal, K_piso1, K_piso2, K_cholito, K_globo]);
                 juego.physics.arcade.gravity.y=250;
                  K_basePrimal.body.allowGravity=false;
                  K_basePrimal.body.immovable=true;
                  K_piso1.body.allowGravity=false;
                  K_piso1.body.immovable=true;
                  K_piso2.body.allowGravity=false;
                  K_piso2.body.immovable=true;
                  K_cholito.body.allowGravity=false;
                  K_cholito.body.immovable=true;
                  K_globo.body.allowGravity=false;
                  K_globo.body.immovable=true;

               }

//----------------------------------------------------GENERAR CAJAS----------------------------------------
               for (var i = 0; i < 7; i++)
               {
                   if ( K_base==8) {
                      K_item = juego.add.sprite(90*i+ K_separacion, 25 , ' K_c8', i);
                    }
                   if ( K_base==9) {
                      K_item = juego.add.sprite(90*i+ K_separacion, 25 , ' K_c9', i);
                   }
                                   K_item.name =  i;
                                   K_separacion= K_separacion+35;
                                   K_item.inputEnabled = true;             //PERMITIR PULSACION ARRASTRAR
                                   K_item.input.enableDrag();
                                   K_item.events.onDragStop.add(this.fixLocation);   // Limitar la ubicación a solo las 2 columnas.
               }

  },

  fixLocation:function( K_item)
  {
          if ( K_mal_bien==1|| K_mal_bien==2) {
                                  if ( K_item.y<25) {
                                     K_item.y=25;

                                  }else if ( K_item.y>25) {
                                     K_item.y = 25;
                                     K_item.inputEnabled = false;
                                     K_item.tint = 0xFF6699;
                                    Materialize.toast('cajon bloqueado', 4000)

                                  }

          }
          if ( K_mal_bien==0) {
                                 if ( K_item.y <25) {
                                    K_item.y = 25;

                                 }else if ( K_item.y > 25) {
                                     K_item.position.y = K_basePrimal.position.y-75;
                                     K_item.position.x = K_j;
                                     K_j= K_j+100;
                                     K_item.inputEnabled = false;

                                     }

//-------------------------------------ASIGNAMOS  VALORES A CADA  CAJON----------------------------

                                     if ( K_base==8) {
                                                    if ( K_item.name==0) {
                                                       K_uno=7;
                                                    }
                                                    if ( K_item.name==1) {
                                                       K_dos=1;
                                                    }
                                                    if ( K_item.name==2) {
                                                       K_tres=6;
                                                    }
                                                    if ( K_item.name==3) {
                                                       K_cuatro=2;
                                                    }
                                                    if ( K_item.name==4) {
                                                       K_cinco=5;
                                                    }
                                                    if ( K_item.name==5) {
                                                       K_seis=3;
                                                    }
                                                    if ( K_item.name==6) {
                                                       K_siete=9;
                                                    }
                                     }
                                     if ( K_base==9) {
                                                     if ( K_item.name==0) {
                                                        K_uno=8;
                                                     }
                                                     if ( K_item.name==1) {
                                                        K_dos=6;
                                                     }
                                                     if ( K_item.name==2) {
                                                        K_tres=4;
                                                     }
                                                     if ( K_item.name==3) {
                                                        K_cuatro=7;
                                                     }
                                                     if ( K_item.name==4) {
                                                        K_cinco=5;
                                                     }
                                                     if ( K_item.name==5) {
                                                        K_seis=1;

                                                     }
                                                     if ( K_item.name==6) {
                                                        K_siete=3;

                                                     }

                                     }
//--------------------------------------SUMAR PULSACION Y  SUMAR ------------------------------------------------------
                                  K_pulsacion++;
                                  K_suma= K_uno+ K_dos+ K_tres+ K_cuatro+ K_cinco+ K_seis+K_siete;
                                  alert(K_suma);

//-----------------------------------------EVENTOS----------------------------------------
                                       if ( K_base==8) {
                                                       if ( K_pulsacion==2&& K_suma==8) {
                                                              K_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,' K_check');
                                                              K_cholito.body.velocity.x= +100;
                                                              K_cholito.animations.play('derecha');
                                                              K_mal_bien=1;

                                                       }
                                                       if ( K_pulsacion==2&& K_suma!=8) {
                                                               K_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,' K_cruz');
                                                               K_cholito.animations.play('llora');
                                                               K_mal_bien=2;

                                                       }

                                       }
                                       if ( K_base==9) {
                                                        if ( K_pulsacion==2&& K_suma==9) {
                                                           K_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,' K_check');
                                                           K_cholito.body.velocity.x= +100;
                                                           K_cholito.animations.play('derecha');
                                                           K_mal_bien=1;

                                                        }
                                                        if ( K_pulsacion==2&& K_suma!=9) {
                                                           K_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,' K_cruz');
                                                           K_cholito.animations.play('llora');
                                                           K_mal_bien=2;

                                                        }

                                       }


                             }


},


  update:function()
  {
     K_time = juego.time.events.loop(0, this.choqueI, this);
     K_time = juego.time.events.loop(0, this.choqueD, this);

     var cho=parseInt(K_cholito.position.x);

   if (K_mal_bien==1) {
     if (cho==701) {
                       K_cholito.body.velocity.x= 0;
                       K_cholito.animations.play('stop');

                       K_globo.body.velocity.y=-100;
                       K_cholito.body.velocity.y=-100;
   }

   }
   if (K_mal_bien==2) {
                   K_globo.body.velocity.y=-100;
                   var m=parseInt(K_globo.position.y);

                   if (m==-345) {
                     K_actualis=1;
                     this.state.start('Actualis');
                   }

   }

   var k=parseInt( K_cholito.position.y);
   var fin=-181;

   if (k==fin) {

           var connect,form,result,subnivel=2;
           form='jugador='+jugador+'&nivel='+3+'&sNivel='+5;


           connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');

           // alert(jugador+'-'+nivel);
           if(jugador!=''&&nivel!='')
           {
               connect.onreadystatechange =function(){
               if(connect.readyState==4&&connect.status==200){
                 //  alert(connect.responseText);
                   if(parseInt(connect.responseText) ==1){

                        K_pasar=1;

                        puntoDB=3;
                        nivel=3;

                        sNivel=5;





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
   if (K_pasar==1) {



     this.state.start('Nivel');

     }


  },
  choqueI:function(){
    juego.physics.arcade.overlap( K_piso1, K_basePrimal, this.tocoUno, null, this);
    if( K_parar1==0) {  K_piso1.body.velocity.x=+200; }
    else if ( K_parar1==1)
    {
        if( K_espacio_piso1==0)
            {
                          K_piso1.body.velocity.x=0;
                          K_espacio_piso1=1;

            }
    }

  },
  tocoUno:function(){
    if( K_piso1.alive == false) { return; }
         K_parar1=1;

  },
  choqueD:function(){
    juego.physics.arcade.overlap( K_piso2, K_basePrimal, this.tocoDos, null, this);
    if( K_parar2==0) {  K_piso2.body.velocity.x=-200; }
    else if ( K_parar2==1)
    {
        if( K_espacio_piso2==0)
            {
                          K_piso2.body.velocity.x=0;
                          K_espacio_piso2=1;

            }
    }

  },
  tocoDos:function(){
    if( K_piso2.alive == false) { return; }
         K_parar2=1;

  }




};
