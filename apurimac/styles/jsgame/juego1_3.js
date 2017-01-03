
var  T_cholito;
var  T_globo;
var  T_piso1;
var  T_piso2;
var  T_base;
var  T_basePrimal;
var  T_separacion=25;
var  T_mal_bien=0;
var  T_j=300;

var  T_uno =0;
var  T_dos =0;
var  T_tres =0;
var  T_cuatro =0;
var  T_cinco =0;
var  T_seis =0;
var T_siete =0;

var  T_pulsacion=0;
var  T_suma=0;
var  T_cruz;
var  T_check;
var  T_time;
var  T_parar2=0;
var  T_parar1=0;
var  T_pasar=0;


var  T_espacio_piso2=0;
var  T_espacio_piso1=0;


var Juego1_3={

  preload:function()
  {
    juego.load.image(' T_base6','styles/imagesgame/Nivel3/base6.png');
    juego.load.image(' T_base7','styles/imagesgame/Nivel3/base7.png');
    juego.load.image(' T_piso','styles/imagesgame/piso2.png');
    juego.load.image(' T_check','styles/imagesgame/bien.png');
    juego.load.image(' T_cruz','styles/imagesgame/mal.png');
    juego.load.image(' T_globo','styles/imagesgame/globo.png');

    juego.load.spritesheet(' T_c6', 'styles/imagesgame/Nivel3/c6.png', 100, 75);
    juego.load.spritesheet(' T_c7', 'styles/imagesgame/Nivel3/c7.png', 100, 75);
    juego.load.spritesheet(' T_cholito','styles/imagesgame/sprite_comple2.png',70,185);


  },
  create:function()
  {
    //alert("juego3");
    t1 = juego.add.text(20, 2, "0", {font: "15px Arial", fill: "#000000"});
    t2 = juego.add.text(100, 2, "0", {font: "15px Arial", fill: "#000000"});
    t1.text='NIVEL: 2';
    t2.text='SUBNIVEL: 3';
              juego.physics.startSystem(Phaser.Physics.ARCADE);
//--------------------------------------CHOLITO---------------------------------------------------------
               T_cholito=juego.add.sprite(50,205,' T_cholito');
               T_cholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
               T_cholito.animations.add('stop', [4], 20, true);
               T_cholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
               T_cholito.animations.add('llora', [9], 10, true);
               T_cholito.animations.play('stop');

               T_globo=juego.add.sprite(600,40,' T_globo');
               T_globo.scale.setTo(0.6,0.7);
//-------------------------------------------MENU----------------------------------------------------
               barra_menu=juego.add.tileSprite(0,juego.height-60,juego.width,100,'bar_menu');
               var ye = (barra_menu.position.y)+4;
               var ex =(barra_menu.position.x)+4;
               b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
               b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
               b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
               b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
               cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
               scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+10,300,40,'scroolBar4');

               b_atras.scale.setTo(0.8,0.8);
               b_siguiente.scale.setTo(0.8,0.8);
               b_home.scale.setTo(0.8,0.8);
               b_actualizar.scale.setTo(0.8,0.8);
               cholito_negro.scale.setTo(1,0.8);
//----------------------------------------PISO IZQUIERDO  Y DERECHO--------------------------------------------
                T_piso1=juego.add.sprite(-800,(barra_menu.position.y)-150,' T_piso');
                T_piso2=juego.add.sprite(700,(barra_menu.position.y)-150,' T_piso');

//-----------------------------------------GENERAR BASE---------------------------------------------------
                T_base = Math.floor((Math.random() * 2) + 6);
               if ( T_base==6) {
                  T_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,' T_base6');

                 juego.physics.arcade.enable([ T_basePrimal, T_piso1, T_piso2, T_cholito, T_globo]);
                 juego.physics.arcade.gravity.y=250;
                  T_basePrimal.body.allowGravity=false;
                  T_basePrimal.body.immovable=true;
                  T_piso1.body.allowGravity=false;
                  T_piso1.body.immovable=true;
                  T_piso2.body.allowGravity=false;
                  T_piso2.body.immovable=true;
                  T_cholito.body.allowGravity=false;
                  T_cholito.body.immovable=true;
                  T_globo.body.allowGravity=false;
                  T_globo.body.immovable=true;

               }
               if ( T_base==7) {
                  T_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,' T_base7');

                 juego.physics.arcade.enable([ T_basePrimal, T_piso1, T_piso2, T_cholito, T_globo]);
                 juego.physics.arcade.gravity.y=250;
                  T_basePrimal.body.allowGravity=false;
                  T_basePrimal.body.immovable=true;
                  T_piso1.body.allowGravity=false;
                  T_piso1.body.immovable=true;
                  T_piso2.body.allowGravity=false;
                  T_piso2.body.immovable=true;
                  T_cholito.body.allowGravity=false;
                  T_cholito.body.immovable=true;
                  T_globo.body.allowGravity=false;
                  T_globo.body.immovable=true;

               }

//----------------------------------------------------GENERAR CAJAS----------------------------------------
               for (var i = 0; i < 7; i++)
               {
                   if ( T_base==6) {
                      T_item = juego.add.sprite(90*i+ T_separacion, 25 , ' T_c6', i);
                    }
                   if ( T_base==7) {
                      T_item = juego.add.sprite(90*i+ T_separacion, 25 , ' T_c7', i);
                   }
                                   T_item.name =  i;
                                   T_separacion= T_separacion+35;
                                   T_item.inputEnabled = true;             //PERMITIR PULSACION ARRASTRAR
                                   T_item.input.enableDrag();
                                   T_item.events.onDragStop.add(this.fixLocation);   // Limitar la ubicación a solo las 2 columnas.
               }

  },
  Actualizar:function()
  {
    T_actualis=1;
   this.state.start('Actualis');
  },
  Home:function(){
  //    this.state.start('Nivel');
  },

  fixLocation:function( T_item)
  {
          if ( T_mal_bien==1|| T_mal_bien==2) {
                                  if ( T_item.y<25) {
                                     T_item.y=25;

                                  }else if ( T_item.y>25) {
                                     T_item.y = 25;
                                     T_item.inputEnabled = false;
                                     T_item.tint = 0xFF6699;
                                    Materialize.toast('cajon bloqueado', 4000)

                                  }

          }
          if ( T_mal_bien==0) {
                                 if ( T_item.y <25) {
                                    T_item.y = 25;

                                 }else if ( T_item.y > 25) {
                                     T_item.position.y = T_basePrimal.position.y-75;
                                     T_item.position.x = T_j;
                                     T_j= T_j+100;
                                     T_item.inputEnabled = false;

                                     }

//-------------------------------------ASIGNAMOS  VALORES A CADA  CAJON----------------------------

                                     if ( T_base==6) {
                                                    if ( T_item.name==0) {
                                                       T_uno=4;
                                                    }
                                                    if ( T_item.name==1) {
                                                       T_dos=8;
                                                    }
                                                    if ( T_item.name==2) {
                                                       T_tres=2;
                                                    }
                                                    if ( T_item.name==3) {
                                                       T_cuatro=3;
                                                    }
                                                    if ( T_item.name==4) {
                                                       T_cinco=5;
                                                    }
                                                    if ( T_item.name==5) {
                                                       T_seis=3;
                                                    }
                                                    if ( T_item.name==6) {
                                                       T_siete=1;
                                                    }
                                     }
                                     if ( T_base==7) {
                                                     if ( T_item.name==0) {
                                                        T_uno=8;
                                                     }
                                                     if ( T_item.name==1) {
                                                        T_dos=3;
                                                     }
                                                     if ( T_item.name==2) {
                                                        T_tres=6;
                                                     }
                                                     if ( T_item.name==3) {
                                                        T_cuatro=1;
                                                     }
                                                     if ( T_item.name==4) {
                                                        T_cinco=4;
                                                     }
                                                     if ( T_item.name==5) {
                                                        T_seis=2;

                                                     }
                                                     if ( T_item.name==6) {
                                                        T_siete=5;

                                                     }

                                     }
//--------------------------------------SUMAR PULSACION Y  SUMAR ------------------------------------------------------
                                  T_pulsacion++;
                                  T_suma= T_uno+ T_dos+ T_tres+ T_cuatro+ T_cinco+ T_seis+T_siete;

//-----------------------------------------EVENTOS----------------------------------------
                                       if ( T_base==6) {
                                                       if ( T_pulsacion==2&& T_suma==6) {
                                                              T_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,' T_check');
                                                              T_cholito.body.velocity.x= +100;
                                                              T_cholito.animations.play('derecha');
                                                              T_mal_bien=1;

                                                       }
                                                       if ( T_pulsacion==2&& T_suma!=6) {
                                                               T_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,' T_cruz');
                                                               T_cholito.animations.play('llora');
                                                               T_mal_bien=2;

                                                       }

                                       }
                                       if ( T_base==7) {
                                                        if ( T_pulsacion==2&& T_suma==7) {
                                                           T_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,' T_check');
                                                           T_cholito.body.velocity.x= +100;
                                                           T_cholito.animations.play('derecha');
                                                           T_mal_bien=1;

                                                        }
                                                        if ( T_pulsacion==2&& T_suma!=7) {
                                                           T_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,' T_cruz');
                                                           T_cholito.animations.play('llora');
                                                           T_mal_bien=2;

                                                        }

                                       }


                             }


},


  update:function()
  {
     T_time = juego.time.events.loop(0, this.choqueI, this);
     T_time = juego.time.events.loop(0, this.choqueD, this);
    var cho=parseInt( T_cholito.position.x);

  if ( T_mal_bien==1) {
    if (cho==701) {
                       T_cholito.body.velocity.x= 0;
                       T_cholito.animations.play('stop');

                       T_globo.body.velocity.y=-100;
                       T_cholito.body.velocity.y=-100;
  }

  }
  if ( T_mal_bien==2) {
                   T_globo.body.velocity.y=-100;
                  var m=parseInt( T_globo.position.y);

                  if (m==-345) {
                     T_actualis=1;
                    this.state.start('Actualis');
                  }

  }
  var k=parseInt( T_cholito.position.y);
  var fin=-181;

  if (k==fin) {

            var connect,form,result,subnivel=2;

          form='jugador='+jugador+'&nivel='+2+'&sNivel='+4;


          connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');

          // alert(jugador+'-'+nivel);
          if(jugador!=''&&nivel!='')
          {
              connect.onreadystatechange =function(){
              if(connect.readyState==4&&connect.status==200){
                //  alert(connect.responseText);
                  if(parseInt(connect.responseText) ==1){

                       T_pasar=1;





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
  if ( T_pasar==1) {



    this.state.start('Juego1_4');

    }




  },
  choqueI:function(){
    juego.physics.arcade.overlap( T_piso1, T_basePrimal, this.tocoUno, null, this);
    if( T_parar1==0) {  T_piso1.body.velocity.x=+200; }
    else if ( T_parar1==1)
    {
        if( T_espacio_piso1==0)
            {
                          T_piso1.body.velocity.x=0;
                          T_espacio_piso1=1;

            }
    }

  },
  tocoUno:function(){
    if( T_piso1.alive == false) { return; }
         T_parar1=1;

  },
  choqueD:function(){
    juego.physics.arcade.overlap( T_piso2, T_basePrimal, this.tocoDos, null, this);
    if( T_parar2==0) {  T_piso2.body.velocity.x=-200; }
    else if ( T_parar2==1)
    {
        if( T_espacio_piso2==0)
            {
                          T_piso2.body.velocity.x=0;
                          T_espacio_piso2=1;

            }
    }

  },
  tocoDos:function(){
    if( T_piso2.alive == false) { return; }
         T_parar2=1;

  }




};
