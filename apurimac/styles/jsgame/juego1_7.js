var G_base=0;
var G_j=300;
var G_text = '';
var G_separacion=50;
var G_variables1;
var G_variables2;
var G_uno =0;
var G_resul=0;
var G_basepri=0
var G_basePrimal;
var G_pulsador=0;
var G_base2;
var G_base4;
var G_piso1;
var G_piso2;
var G_time;
var G_espacio_piso1=0;
var G_espacio_piso2=0;
var G_parar1=0;
var G_parar2=0;
var G_mal_bien=0;
var G_check;
var G_cruz;
var G_cholito;
var G_globo;
var G_pasar=0;
var t1;
var t2;
var Juego1_7 = {
    preload:function()
    {
      juego.load.spritesheet('G_caja', 'styles/imagesgame/nivel7/c7.png', 100, 75);
      juego.load.spritesheet('G_cholito','styles/imagesgame/sprite_comple2.png',70,185);
      juego.load.image('G_globo','styles/imagesgame/globo.png');
      juego.load.image('G_block', 'styles/imagesgame/nivel7/block.png');
      juego.load.image('G_base2', 'styles/imagesgame/nivel7/base2.png');
      juego.load.image('G_base4', 'styles/imagesgame/nivel7/base4.png');

      juego.load.image('G_check','styles/imagesgame/bien.png');
      juego.load.image('G_cruz','styles/imagesgame/mal.png');

      juego.load.image('G_base1', 'styles/imagesgame/nivel7/b_uno.png');
      juego.load.image('G_base22', 'styles/imagesgame/nivel7/b_dos.png');
      juego.load.image('G_base3', 'styles/imagesgame/nivel7/b_tres.png');
      juego.load.image('G_base44', 'styles/imagesgame/nivel7/b_cuatro.png');

      juego.load.image('G_piso','styles/imagesgame/piso2.png');

    },
    create:function()
    {
      t1 = juego.add.text(20, 2, "0", {font: "15px Arial", fill: "#000000"});
      t2 = juego.add.text(100, 2, "0", {font: "15px Arial", fill: "#000000"});
      t1.text='NIVEL: 4';
      t2.text='SUBNIVEL: 1';
      //--------------------------------------CHOLITO---------------------------------------------------------
                     G_cholito=juego.add.sprite(50,205,'G_cholito');
                     G_cholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
                     G_cholito.animations.add('stop', [4], 20, true);
                     G_cholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
                     G_cholito.animations.add('llora', [9], 10, true);
                     G_cholito.animations.play('stop');

                     G_globo=juego.add.sprite(600,40,'G_globo');
                     G_globo.scale.setTo(0.6,0.7);



      //-------------------------------------------MENU----------------------------------------------------
                     barra_menu=juego.add.tileSprite(0,juego.height-60,juego.width,100,'bar_menu');
                     var ye = (barra_menu.position.y)+4;
                     var ex =(barra_menu.position.x)+4;
                     b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
                     b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
                     b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
                     b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
                     cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
                    // scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+10,300,40,'scroolBar7');

                     b_atras.scale.setTo(0.8,0.8);
                     b_siguiente.scale.setTo(0.8,0.8);
                     b_home.scale.setTo(0.8,0.8);
                     b_actualizar.scale.setTo(0.8,0.8);
                     cholito_negro.scale.setTo(1,0.8);

                     for (var i = 1; i < 7; i++)
                       {

                       var G_item = juego.add.sprite(80*i+ G_separacion, 25, 'G_caja', i);
                        G_item.scale.setTo(0.7,0.7);
                       G_item.name =i;
                       G_separacion=G_separacion+25;

                       G_item.inputEnabled = true;

                       G_item.events.onInputDown.add(this.clickedSprite);
                       }

                       G_piso1=juego.add.sprite(-800,(barra_menu.position.y)-150,'G_piso');

                       G_piso2=juego.add.sprite(700,(barra_menu.position.y)-150,'G_piso');


         G_base =Math.floor(Math.random() * (3 -1)) + 1;
         //G_base=1;
         if (G_base==1) {


                  G_variables1 = juego.add.sprite(juego.height/2 + (70 * 1), 150 + (1*6), 'G_block');


                     G_basepri =Math.floor(Math.random() * (5 -1)) + 1;


                      if (G_basepri==1) {
                        G_resul=1;
                       G_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,100,75,'G_base1');
                      juego.physics.arcade.enable([ G_basePrimal,G_piso1,G_piso2,G_globo,G_cholito]);
                      juego.physics.arcade.gravity.y=250;
                       G_basePrimal.body.allowGravity=false;
                       G_basePrimal.body.immovable=true;
                         G_piso1.body.allowGravity=false;
                         G_piso1.body.immovable=true;
                         G_piso2.body.allowGravity=false;
                         G_piso2.body.immovable=true;
                         G_globo.body.allowGravity=false;
                         G_globo.body.immovable=true;
                         G_cholito.body.allowGravity=false;
                         G_cholito.body.immovable=true;


                     }
                     if (G_basepri==2) {
                         G_resul=2;
                       G_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,100,75,'G_base22');

                       juego.physics.arcade.enable([ G_basePrimal,G_piso1,G_piso2,G_globo,G_cholito]);
                       juego.physics.arcade.gravity.y=250;
                        G_basePrimal.body.allowGravity=false;
                        G_basePrimal.body.immovable=true;
                          G_piso1.body.allowGravity=false;
                          G_piso1.body.immovable=true;
                          G_piso2.body.allowGravity=false;
                          G_piso2.body.immovable=true;
                          G_globo.body.allowGravity=false;
                          G_globo.body.immovable=true;
                          G_cholito.body.allowGravity=false;
                          G_cholito.body.immovable=true;

                     }
                     if (G_basepri==3) {
                         G_resul=3;
                      G_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,100,75,'G_base3');

                      juego.physics.arcade.enable([ G_basePrimal,G_piso1,G_piso2,G_globo,G_cholito]);
                      juego.physics.arcade.gravity.y=250;
                       G_basePrimal.body.allowGravity=false;
                       G_basePrimal.body.immovable=true;
                         G_piso1.body.allowGravity=false;
                         G_piso1.body.immovable=true;
                         G_piso2.body.allowGravity=false;
                         G_piso2.body.immovable=true;
                         G_globo.body.allowGravity=false;
                         G_globo.body.immovable=true;
                         G_cholito.body.allowGravity=false;
                         G_cholito.body.immovable=true;


                    }
                    if (G_basepri==4) {
                        G_resul=4;
                      G_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,100,75,'G_base44');

                      juego.physics.arcade.enable([ G_basePrimal,G_piso1,G_piso2,G_globo,G_cholito]);
                      juego.physics.arcade.gravity.y=250;
                       G_basePrimal.body.allowGravity=false;
                       G_basePrimal.body.immovable=true;
                         G_piso1.body.allowGravity=false;
                         G_piso1.body.immovable=true;
                         G_piso2.body.allowGravity=false;
                         G_piso2.body.immovable=true;
                         G_globo.body.allowGravity=false;
                         G_globo.body.immovable=true;
                         G_cholito.body.allowGravity=false;
                         G_cholito.body.immovable=true;

                    }

         }
         if (G_base==2) {


                  G_variables1 = juego.add.sprite(juego.height/2 + (70 * 1), 150 + (1*6), 'G_block');
                  G_variables2 = juego.add.sprite(juego.height/2 + (70 * 2), 150 + (2*6), 'G_block');


                            G_basepri =Math.floor(Math.random() * (3 -1)) + 1;

                            if (G_basepri==1) {

                              G_resul=2;

                              G_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,'G_base2');

                              juego.physics.arcade.enable([ G_basePrimal,G_piso1,G_piso2,G_globo,G_cholito]);
                              juego.physics.arcade.gravity.y=250;
                               G_basePrimal.body.allowGravity=false;
                               G_basePrimal.body.immovable=true;
                                 G_piso1.body.allowGravity=false;
                                 G_piso1.body.immovable=true;
                                 G_piso2.body.allowGravity=false;
                                 G_piso2.body.immovable=true;
                                 G_globo.body.allowGravity=false;
                                 G_globo.body.immovable=true;
                                 G_cholito.body.allowGravity=false;
                                 G_cholito.body.immovable=true;




                            }
                            if (G_basepri==2) {

                              G_resul=4;
                              G_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,'G_base4');

                              juego.physics.arcade.enable([ G_basePrimal,G_piso1,G_piso2,G_globo,G_cholito]);
                              juego.physics.arcade.gravity.y=250;
                               G_basePrimal.body.allowGravity=false;
                               G_basePrimal.body.immovable=true;
                                 G_piso1.body.allowGravity=false;
                                 G_piso1.body.immovable=true;
                                 G_piso2.body.allowGravity=false;
                                 G_piso2.body.immovable=true;
                                 G_globo.body.allowGravity=false;
                                 G_globo.body.immovable=true;
                                 G_cholito.body.allowGravity=false;
                                 G_cholito.body.immovable=true;


                            }




         }









    },
    Actualizar:function()
    {
      G_actualis=1;
      this.state.start('Actualis');
    },
     clickedSprite:function (G_item) {
       if (G_pulsador==0)
       {

         if (G_item.name==1) {
                                G_uno=3 ;
         }
         if (G_item.name==2) {
                                G_uno =6 ;
         }
         if (G_item.name==3) {
                                G_uno =1 ;
         }
         if (G_item.name==4) {
                                G_uno = 4;
         }
         if (G_item.name==5) {
                                G_uno = 2;
         }
         if (G_item.name==6) {
                                G_uno =5;
         }

         G_item.tint = 0xff0000;
         G_pulsador++;
         //alert(G_uno);
         //alert(G_base);
         //alert(G_resul);

         var dato = G_uno*G_base;

         if (dato==G_resul) {
           G_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,'G_check');
           G_cholito.body.velocity.x= +100;
           G_cholito.animations.play('derecha');
           G_mal_bien=1;
         }
         if (dato!=G_resul) {
           G_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,'G_cruz');
           G_cholito.animations.play('llora');
           G_mal_bien=2;

         }
       }
       if (G_pulsador!=0) {

       }


                                     },

    update:function()
    {
        G_time = juego.time.events.loop(0, this.choqueI, this);
        G_time = juego.time.events.loop(0, this.choqueD, this);
///________________________________________PARA  BASE 1  Y BASE 2_______________--
if (G_base==1) {

    if (G_mal_bien==1) {

      G_variables1.position.y = G_basePrimal.position.y-75;
      G_variables1.position.x = G_j;
      G_j= G_j+100;
      G_variables1.inputEnabled = false;
      G_mal_bien=3;

    }
    var cho=parseInt(G_cholito.position.x);
    if (cho==701) {
      G_cholito.body.velocity.x= 0;
      G_cholito.animations.play('stop');

      G_globo.body.velocity.y=-100;
      G_cholito.body.velocity.y=-100;

    }
    if (G_mal_bien==2) {
                    G_globo.body.velocity.y=-100;
                    var m=parseInt(G_globo.position.y);

                    if (m==-345) {
                    //  alert("Siguiente");
                      G_actualis=1;
                      this.state.start('Actualis');
                    }

    }

}
if (G_base==2) {
  if (G_mal_bien==1) {

    G_variables1.position.y = G_basePrimal.position.y-75;
    G_variables1.position.x = G_j;
    G_j= G_j+100;
    G_variables1.inputEnabled = false;

    G_variables2.position.y = G_basePrimal.position.y-75;
    G_variables2.position.x = G_j;
    G_variables2.inputEnabled = false;
    G_mal_bien=3;
  }
  var cho=parseInt(G_cholito.position.x);
  if (cho==701) {
    G_cholito.body.velocity.x= 0;
    G_cholito.animations.play('stop');

    G_globo.body.velocity.y=-100;
    G_cholito.body.velocity.y=-100;

  }
  if (G_mal_bien==2) {
                  G_globo.body.velocity.y=-100;
                  var m=parseInt(G_globo.position.y);
                  console.log('da:'+m);

                  if (m==-345) {
                    //alert("nuevamente");
                    G_actualis=1;
                    this.state.start('Actualis');
                  }

  }


}

var k=parseInt(G_cholito.position.y);
var fin=-181;

if (k==fin) {
  var connect,form,result,subnivel=2;
  form='jugador='+jugador+'&nivel='+5+'&sNivel='+9;


  connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');

  // alert(jugador+'-'+nivel);
  if(jugador!=''&&nivel!='')
  {
      connect.onreadystatechange =function(){
      if(connect.readyState==4&&connect.status==200){
          //alert(connect.responseText);
          if(parseInt(connect.responseText) ==1){

               G_pasar=1;
               puntoDB=5;
               nivel=5;

               sNivel=9;

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
}///

if (G_pasar==1) {

  this.state.start('Nivel');

  }


    },
    choqueI:function(){
      juego.physics.arcade.overlap( G_piso1, G_basePrimal, this.tocoUno, null, this);
      if( G_parar1==0) {  G_piso1.body.velocity.x=+200; }
      else if ( G_parar1==1)
      {
          if( G_espacio_piso1==0)
              {
                            G_piso1.body.velocity.x=0;
                            G_espacio_piso1=1;

              }
      }

    },
    tocoUno:function(){
      if( G_piso1.alive == false) { return; }
           G_parar1=1;

    },
    choqueD:function(){
      juego.physics.arcade.overlap( G_piso2, G_basePrimal, this.tocoDos, null, this);
      if( G_parar2==0) {  G_piso2.body.velocity.x=-200; }
      else if ( G_parar2==1)
      {
          if( G_espacio_piso2==0)
              {
                            G_piso2.body.velocity.x=0;
                            G_espacio_piso2=1;

              }
      }

    },
    tocoDos:function(){
      if( G_piso2.alive == false) { return; }
           G_parar2=1;

    }


};
