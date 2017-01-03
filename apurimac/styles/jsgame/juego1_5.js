
var  C_cholito;
var  C_globo;
var  C_piso1;
var  C_piso2;
var  C_base;
var  C_basePrimal;
var  C_separacion=20;
var  C_mal_bien=0;
var  C_j=300;

var  C_uno =0;
var  C_dos =0;
var  C_tres =0;
var  C_cuatro =0;
var  C_cinco =0;
var  C_seis =0;
var  C_siete =0;
var  C_ocho =0;

var  C_pulsacion=0;
var  C_suma=0;
var  C_cruz;
var  C_check;
var  C_time;
var  C_parar2=0;
var  C_parar1=0;
var  C_pasar=0;


var  C_espacio_piso2=0;
var  C_espacio_piso1=0;


var Juego1_5={

  preload:function()
  {
    juego.load.image(' C_base10','styles/imagesgame/Nivel5/base10.png');
    juego.load.image(' C_base11','styles/imagesgame/Nivel5/base11.png');
    juego.load.image(' C_piso','styles/imagesgame/piso2.png');
    juego.load.image(' C_check','styles/imagesgame/bien.png');
    juego.load.image(' C_cruz','styles/imagesgame/mal.png');
    juego.load.image(' C_globo','styles/imagesgame/globo.png');

    juego.load.spritesheet(' C_c10', 'styles/imagesgame/Nivel5/c10.png', 100, 75);
    juego.load.spritesheet(' C_c11', 'styles/imagesgame/Nivel5/c11.png', 100, 75);
    juego.load.spritesheet(' C_cholito','styles/imagesgame/sprite_comple2.png',70,185);


  },
  create:function()
  {
    //alert("Juego1_5");
    t1 = juego.add.text(20, 2, "0", {font: "15px Arial", fill: "#000000"});
    t2 = juego.add.text(100, 2, "0", {font: "15px Arial", fill: "#000000"});
    t1.text='NIVEL: 3';
    t2.text='SUBNIVEL: 5';
              juego.physics.startSystem(Phaser.Physics.ARCADE);
//--------------------------------------CHOLITO---------------------------------------------------------
               C_cholito=juego.add.sprite(50,205,' C_cholito');
               C_cholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
               C_cholito.animations.add('stop', [4], 20, true);
               C_cholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
               C_cholito.animations.add('llora', [9], 10, true);
               C_cholito.animations.play('stop');

               C_globo=juego.add.sprite(600,40,' C_globo');
               C_globo.scale.setTo(0.6,0.7);
//-------------------------------------------MENU----------------------------------------------------
               barra_menu=juego.add.tileSprite(0,juego.height-60,juego.width,100,'bar_menu');
               var ye = (barra_menu.position.y)+4;
               var ex =(barra_menu.position.x)+4;
               b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
               b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
               b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
               b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
               cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
               scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+10,300,40,'scroolBar6');

               b_atras.scale.setTo(0.8,0.8);
               b_siguiente.scale.setTo(0.8,0.8);
               b_home.scale.setTo(0.8,0.8);
               b_actualizar.scale.setTo(0.8,0.8);
               cholito_negro.scale.setTo(1,0.8);
//----------------------------------------PISO IZQUIERDO  Y DERECHO--------------------------------------------
                C_piso1=juego.add.sprite(-800,(barra_menu.position.y)-150,' C_piso');
                C_piso2=juego.add.sprite(700,(barra_menu.position.y)-150,' C_piso');

//-----------------------------------------GENERAR BASE---------------------------------------------------
                C_base = Math.floor((Math.random() * 2) + 10);
               if ( C_base==10) {
                  C_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,' C_base10');

                 juego.physics.arcade.enable([ C_basePrimal, C_piso1, C_piso2, C_cholito, C_globo]);
                 juego.physics.arcade.gravity.y=250;
                  C_basePrimal.body.allowGravity=false;
                  C_basePrimal.body.immovable=true;
                  C_piso1.body.allowGravity=false;
                  C_piso1.body.immovable=true;
                  C_piso2.body.allowGravity=false;
                  C_piso2.body.immovable=true;
                  C_cholito.body.allowGravity=false;
                  C_cholito.body.immovable=true;
                  C_globo.body.allowGravity=false;
                  C_globo.body.immovable=true;

               }
               if ( C_base==11) {
                  C_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,' C_base11');

                 juego.physics.arcade.enable([ C_basePrimal, C_piso1, C_piso2, C_cholito, C_globo]);
                 juego.physics.arcade.gravity.y=250;
                  C_basePrimal.body.allowGravity=false;
                  C_basePrimal.body.immovable=true;
                  C_piso1.body.allowGravity=false;
                  C_piso1.body.immovable=true;
                  C_piso2.body.allowGravity=false;
                  C_piso2.body.immovable=true;
                  C_cholito.body.allowGravity=false;
                  C_cholito.body.immovable=true;
                  C_globo.body.allowGravity=false;
                  C_globo.body.immovable=true;

               }

//----------------------------------------------------GENERAR CAJAS----------------------------------------
               for (var i = 0; i < 8; i++)
               {
                   if ( C_base==10) {
                      C_item = juego.add.sprite(90*i+ C_separacion, 25 , ' C_c10', i);
                    }
                   if ( C_base==11) {
                      C_item = juego.add.sprite(90*i+ C_separacion, 25 , ' C_c11', i);
                   }
                                   C_item.name =  i;
                                   C_separacion= C_separacion+20;
                                   C_item.inputEnabled = true;             //PERMITIR PULSACION ARRASTRAR
                                   C_item.input.enableDrag();
                                   C_item.events.onDragStop.add(this.fixLocation);   // Limitar la ubicación a solo las 2 columnas.
               }

  },
  Actualizar:function()
  {
    C_actualis=1;
    this.state.start('Actualis');
  },
  Home:function(){
  //    this.state.start('Nivel');
  },

  fixLocation:function( C_item)
  {
          if ( C_mal_bien==1|| C_mal_bien==2) {
                                  if ( C_item.y<25) {
                                     C_item.y=25;

                                  }else if ( C_item.y>25) {
                                     C_item.y = 25;
                                     C_item.inputEnabled = false;
                                     C_item.tint = 0xFF6699;
                                    Materialize.toast('cajon bloqueado', 4000)

                                  }

          }
          if ( C_mal_bien==0) {
                                 if ( C_item.y <25) {
                                    C_item.y = 25;

                                 }else if ( C_item.y > 25) {
                                     C_item.position.y = C_basePrimal.position.y-75;
                                     C_item.position.x = C_j;
                                     C_j= C_j+100;
                                     C_item.inputEnabled = false;

                                     }

//-------------------------------------ASIGNAMOS  VALORES A CADA  CAJON----------------------------

                                     if ( C_base==10) {
                                                    if ( C_item.name==0) {
                                                       C_uno=5;
                                                    }
                                                    if ( C_item.name==1) {
                                                       C_dos=9;
                                                    }
                                                    if ( C_item.name==2) {
                                                       C_tres=8;
                                                    }
                                                    if ( C_item.name==3) {
                                                       C_cuatro=6;
                                                    }
                                                    if ( C_item.name==4) {
                                                       C_cinco=7;
                                                    }
                                                    if ( C_item.name==5) {
                                                       C_seis=2;
                                                    }
                                                    if ( C_item.name==6) {
                                                       C_siete=4;
                                                    }
                                                    if ( C_item.name==7) {
                                                       C_ocho=1;
                                                    }
                                     }
                                     if ( C_base==11) {
                                                     if ( C_item.name==0) {
                                                        C_uno=10;
                                                     }
                                                     if ( C_item.name==1) {
                                                        C_dos=5;
                                                     }
                                                     if ( C_item.name==2) {
                                                        C_tres=7;
                                                     }
                                                     if ( C_item.name==3) {
                                                        C_cuatro=9;
                                                     }
                                                     if ( C_item.name==4) {
                                                        C_cinco=2;
                                                     }
                                                     if ( C_item.name==5) {
                                                        C_seis=4;
                                                     }
                                                     if ( C_item.name==6) {
                                                        C_siete=6;
                                                     }
                                                     if ( C_item.name==7) {
                                                        C_ocho=1;
                                                     }

                                     }
//--------------------------------------SUMAR PULSACION Y  SUMAR ------------------------------------------------------
                                  C_pulsacion++;
                                  C_suma= C_uno+ C_dos+ C_tres+ C_cuatro+ C_cinco+ C_seis+C_siete+C_ocho;


//-----------------------------------------EVENTOS----------------------------------------
                                       if ( C_base==10) {
                                                       if ( C_pulsacion==2&& C_suma==10) {
                                                              C_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,' C_check');
                                                              C_cholito.body.velocity.x= +100;
                                                              C_cholito.animations.play('derecha');
                                                              C_mal_bien=1;

                                                       }
                                                       if ( C_pulsacion==2&& C_suma!=10) {
                                                               C_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,' C_cruz');
                                                               C_cholito.animations.play('llora');
                                                               C_mal_bien=2;

                                                       }

                                       }
                                       if ( C_base==11) {
                                                        if ( C_pulsacion==2&& C_suma==11) {
                                                           C_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,' C_check');
                                                           C_cholito.body.velocity.x= +100;
                                                           C_cholito.animations.play('derecha');
                                                           C_mal_bien=1;

                                                        }
                                                        if ( C_pulsacion==2&& C_suma!=11) {
                                                           C_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,' C_cruz');
                                                           C_cholito.animations.play('llora');
                                                           C_mal_bien=2;

                                                        }

                                       }


                             }


},


  update:function()
  {
     C_time = juego.time.events.loop(0, this.choqueI, this);
     C_time = juego.time.events.loop(0, this.choqueD, this);

     var cho=parseInt(C_cholito.position.x);

   if (C_mal_bien==1) {
     if (cho==701) {
                       C_cholito.body.velocity.x= 0;
                       C_cholito.animations.play('stop');

                       C_globo.body.velocity.y=-100;
                       C_cholito.body.velocity.y=-100;
   }

   }
   if (C_mal_bien==2) {
                   C_globo.body.velocity.y=-100;
                   var m=parseInt(C_globo.position.y);

                   if (m==-345) {
                     C_actualis=1;
                     this.state.start('Actualis');
                   }

   }

   var k=parseInt( C_cholito.position.y);
   var fin=-181;

   if (k==fin) {

           var connect,form,result,subnivel=2;
           form='jugador='+jugador+'&nivel='+3+'&sNivel='+6;


           connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');

           // alert(jugador+'-'+nivel);
           if(jugador!=''&&nivel!='')
           {
               connect.onreadystatechange =function(){
               if(connect.readyState==4&&connect.status==200){
                 //  alert(connect.responseText);
                   if(parseInt(connect.responseText) ==1){

                        C_pasar=1;

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
   if (C_pasar==1) {

     this.state.start('Juego1_6');

     }




  },
  choqueI:function(){
    juego.physics.arcade.overlap( C_piso1, C_basePrimal, this.tocoUno, null, this);
    if( C_parar1==0) {  C_piso1.body.velocity.x=+200; }
    else if ( C_parar1==1)
    {
        if( C_espacio_piso1==0)
            {
                          C_piso1.body.velocity.x=0;
                          C_espacio_piso1=1;

            }
    }

  },
  tocoUno:function(){
    if( C_piso1.alive == false) { return; }
         C_parar1=1;

  },
  choqueD:function(){
    juego.physics.arcade.overlap( C_piso2, C_basePrimal, this.tocoDos, null, this);
    if( C_parar2==0) {  C_piso2.body.velocity.x=-200; }
    else if ( C_parar2==1)
    {
        if( C_espacio_piso2==0)
            {
                          C_piso2.body.velocity.x=0;
                          C_espacio_piso2=1;

            }
    }

  },
  tocoDos:function(){
    if( C_piso2.alive == false) { return; }
         C_parar2=1;

  }




};
