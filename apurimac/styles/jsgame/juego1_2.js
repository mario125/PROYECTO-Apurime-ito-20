
var M_cholito;
var M_globo;
var M_piso1;
var M_piso2;
var M_base;
var M_basePrimal;
var M_separacion=50;
var M_mal_bien=0;
var M_j=300;

var M_uno =0;
var M_dos =0;
var M_tres =0;
var M_cuatro =0;
var M_cinco =0;
var M_seis =0;

var M_pulsacion=0;
var M_suma=0;
var M_cruz;
var M_check;
var M_time;
var M_parar2=0;
var M_parar1=0;
var M_pasar=0;


var M_espacio_piso2=0;
var M_espacio_piso1=0;


var Juego1_2={

  preload:function()
  {
    juego.load.image('M_base4','styles/imagesgame/nivel2/base4.png');
    juego.load.image('M_base5','styles/imagesgame/nivel2/base5.png');
    juego.load.image('M_piso','styles/imagesgame/piso2.png');
    juego.load.image('M_check','styles/imagesgame/bien.png');
    juego.load.image('M_cruz','styles/imagesgame/mal.png');
    juego.load.image('M_globo','styles/imagesgame/globo.png');

    juego.load.spritesheet('M_c4', 'styles/imagesgame/nivel2/c4.png', 100, 75);
    juego.load.spritesheet('M_c5', 'styles/imagesgame/nivel2/c5.png', 100, 75);
    juego.load.spritesheet('M_cholito','styles/imagesgame/sprite_comple2.png',70,185);


  },
  create:function()
  {
//alert("juego2");
t1 = juego.add.text(20, 2, "0", {font: "15px Arial", fill: "#000000"});
t2 = juego.add.text(100, 2, "0", {font: "15px Arial", fill: "#000000"});
t1.text='NIVEL: 1';
t2.text='SUBNIVEL: 2';
              juego.physics.startSystem(Phaser.Physics.ARCADE);
//--------------------------------------CHOLITO---------------------------------------------------------
              M_cholito=juego.add.sprite(50,205,'M_cholito');
              M_cholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
              M_cholito.animations.add('stop', [4], 20, true);
              M_cholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
              M_cholito.animations.add('llora', [9], 10, true);
              M_cholito.animations.play('stop');

              M_globo=juego.add.sprite(600,40,'M_globo');
              M_globo.scale.setTo(0.6,0.7);
//-------------------------------------------MENU----------------------------------------------------
               barra_menu=juego.add.tileSprite(0,juego.height-60,juego.width,100,'bar_menu');
               var ye = (barra_menu.position.y)+4;
               var ex =(barra_menu.position.x)+4;
            //   b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
            //   b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
              // b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
               b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
               cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
               scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+10,300,40,'scroolBar3');

               b_atras.scale.setTo(0.8,0.8);
               b_siguiente.scale.setTo(0.8,0.8);
               b_home.scale.setTo(0.8,0.8);
               b_actualizar.scale.setTo(0.8,0.8);
               cholito_negro.scale.setTo(1,0.8);
//----------------------------------------PISO IZQUIERDO  Y DERECHO--------------------------------------------
               M_piso1=juego.add.sprite(-800,(barra_menu.position.y)-150,'M_piso');
               M_piso2=juego.add.sprite(700,(barra_menu.position.y)-150,'M_piso');

//-----------------------------------------GENERAR BASE---------------------------------------------------
               M_base = Math.floor((Math.random() * 2) + 4);
               if (M_base==4) {
                 M_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,'M_base4');

                 juego.physics.arcade.enable([M_basePrimal,M_piso1,M_piso2,M_cholito,M_globo]);
                 juego.physics.arcade.gravity.y=250;
                 M_basePrimal.body.allowGravity=false;
                 M_basePrimal.body.immovable=true;
                 M_piso1.body.allowGravity=false;
                 M_piso1.body.immovable=true;
                 M_piso2.body.allowGravity=false;
                 M_piso2.body.immovable=true;
                 M_cholito.body.allowGravity=false;
                 M_cholito.body.immovable=true;
                 M_globo.body.allowGravity=false;
                 M_globo.body.immovable=true;

               }
               if (M_base==5) {
                 M_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,'M_base5');

                 juego.physics.arcade.enable([M_basePrimal,M_piso1,M_piso2,M_cholito,M_globo]);
                 juego.physics.arcade.gravity.y=250;
                 M_basePrimal.body.allowGravity=false;
                 M_basePrimal.body.immovable=true;
                 M_piso1.body.allowGravity=false;
                 M_piso1.body.immovable=true;
                 M_piso2.body.allowGravity=false;
                 M_piso2.body.immovable=true;
                 M_cholito.body.allowGravity=false;
                 M_cholito.body.immovable=true;
                 M_globo.body.allowGravity=false;
                 M_globo.body.immovable=true;

               }

//----------------------------------------------------GENERAR CAJAS----------------------------------------
               for (var i = 0; i < 6; i++)
               {
                   if (M_base==4) {
                     M_item = juego.add.sprite(90*i+M_separacion, 25 , 'M_c4', i);
                    }
                   if (M_base==5) {
                     M_item = juego.add.sprite(90*i+M_separacion, 25 , 'M_c5', i);
                   }
                                  M_item.name =  i;
                                  M_separacion=M_separacion+50;
                                  M_item.inputEnabled = true;             //PERMITIR PULSACION ARRASTRAR
                                  M_item.input.enableDrag();
                                  M_item.events.onDragStop.add(this.fixLocation);   // Limitar la ubicación a solo las 2 columnas.
               }

  },
  Actualizar:function()
  {
    M_actualis=1;
    this.state.start('Actualis');
  },
  Home:function(){
    //this.state.start('Nivel');
  },

  fixLocation:function(M_item)
  {
          if (M_mal_bien==1||M_mal_bien==2) {
                                  if (M_item.y<25) {
                                    M_item.y=25;

                                  }else if (M_item.y>25) {
                                    M_item.y = 25;
                                    M_item.inputEnabled = false;
                                    M_item.tint = 0xFF6699;
                                    Materialize.toast('cajon bloqueado', 4000)

                                  }

          }
          if (M_mal_bien==0) {
                                 if (M_item.y <25) {
                                   M_item.y = 25;

                                 }else if (M_item.y > 25) {
                                    M_item.position.y =M_basePrimal.position.y-75;
                                    M_item.position.x =M_j;
                                    M_j=M_j+100;
                                    M_item.inputEnabled = false;

                                     }

//-------------------------------------ASIGNAMOS  VALORES A CADA  CAJON----------------------------
                                     if (M_base==4) {
                                                    if (M_item.name==0) {
                                                      M_uno=6;
                                                    }
                                                    if (M_item.name==1) {
                                                      M_dos=2;
                                                    }
                                                    if (M_item.name==2) {
                                                      M_tres=5;
                                                    }
                                                    if (M_item.name==3) {
                                                      M_cuatro=3;
                                                    }
                                                    if (M_item.name==4) {
                                                      M_cinco=2;
                                                    }
                                                    if (M_item.name==5) {
                                                      M_seis=1;
                                                    }
                                     }
                                     if (M_base==5) {
                                                     if (M_item.name==0) {
                                                       M_uno=7;
                                                     }
                                                     if (M_item.name==1) {
                                                       M_dos=1;
                                                     }
                                                     if (M_item.name==2) {
                                                       M_tres=2;
                                                     }
                                                     if (M_item.name==3) {
                                                       M_cuatro=6;
                                                     }
                                                     if (M_item.name==4) {
                                                       M_cinco=4;
                                                     }
                                                     if (M_item.name==5) {
                                                       M_seis=3;

                                                     }

                                     }
//--------------------------------------SUMAR PULSACION Y  SUMAR ------------------------------------------------------
                                 M_pulsacion++;
                                 M_suma=M_uno+M_dos+M_tres+M_cuatro+M_cinco+M_seis;
//-----------------------------------------EVENTOS----------------------------------------
                                       if (M_base==4) {
                                                       if (M_pulsacion==2&&M_suma==4) {
                                                             M_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,'M_check');
                                                             M_cholito.body.velocity.x= +100;
                                                             M_cholito.animations.play('derecha');
                                                             M_mal_bien=1;

                                                       }
                                                       if (M_pulsacion==2&&M_suma!=4) {
                                                              M_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,'M_cruz');
                                                              M_cholito.animations.play('llora');
                                                              M_mal_bien=2;

                                                       }

                                       }
                                       if (M_base==5) {
                                                        if (M_pulsacion==2&&M_suma==5) {
                                                          M_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,'M_check');
                                                          M_cholito.body.velocity.x= +100;
                                                          M_cholito.animations.play('derecha');
                                                          M_mal_bien=1;

                                                        }
                                                        if (M_pulsacion==2&&M_suma!=5) {
                                                          M_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,'M_cruz');
                                                          M_cholito.animations.play('llora');
                                                          M_mal_bien=2;

                                                        }

                                       }


                             }


},


  update:function()
  {
    M_time = juego.time.events.loop(0, this.choqueI, this);
    M_time = juego.time.events.loop(0, this.choqueD, this);
    var cho=parseInt(M_cholito.position.x);

  if (M_mal_bien==1) {
    if (cho==701) {
                      M_cholito.body.velocity.x= 0;
                      M_cholito.animations.play('stop');

                      M_globo.body.velocity.y=-100;
                      M_cholito.body.velocity.y=-100;
  }

  }
  if (M_mal_bien==2) {
                  M_globo.body.velocity.y=-100;
                  var m=parseInt(M_globo.position.y);

                  if (m==-345) {
                    M_actualis=1;
                    this.state.start('Actualis');
                  }

  }
  var k=parseInt(M_cholito.position.y);
  var fin=-181;

  if (k==fin) {

            var connect,form,result,subnivel=2;

          form='jugador='+jugador+'&nivel='+2+'&sNivel='+3;


          connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');

          // alert(jugador+'-'+nivel);
          if(jugador!=''&&nivel!='')
          {
              connect.onreadystatechange =function(){
              if(connect.readyState==4&&connect.status==200){
                //  alert(connect.responseText);
                  if(parseInt(connect.responseText) ==1){

                      M_pasar=1;
                      puntoDB=2;
                      nivel=2;

                      sNivel=3;




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
  if (M_pasar==1) {



    this.state.start('Nivel');

    }




  },
  choqueI:function(){
    juego.physics.arcade.overlap(M_piso1,M_basePrimal, this.tocoUno, null, this);
    if(M_parar1==0) { M_piso1.body.velocity.x=+200; }
    else if (M_parar1==1)
    {
        if(M_espacio_piso1==0)
            {
                         M_piso1.body.velocity.x=0;
                         M_espacio_piso1=1;

            }
    }

  },
  tocoUno:function(){
    if(M_piso1.alive == false) { return; }
        M_parar1=1;

  },
  choqueD:function(){
    juego.physics.arcade.overlap(M_piso2,M_basePrimal, this.tocoDos, null, this);
    if(M_parar2==0) { M_piso2.body.velocity.x=-200; }
    else if (M_parar2==1)
    {
        if(M_espacio_piso2==0)
            {
                         M_piso2.body.velocity.x=0;
                         M_espacio_piso2=1;

            }
    }

  },
  tocoDos:function(){
    if(M_piso2.alive == false) { return; }
        M_parar2=1;

  }




};
