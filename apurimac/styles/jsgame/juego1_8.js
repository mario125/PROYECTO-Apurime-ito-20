var O_base=0;
var O_j=300;
var O_text = '';
var O_separacion=20;
var O_variables1;
var O_variables2;
var O_variables3;
var O_variables4;

var O_uno =0;
var O_resul=0;
var O_basepri=0
var O_basePrimal;
var O_pulsador=0;
var O_base2;
var O_base4;
var O_piso1;
var O_piso2;
var O_time;
var O_espacio_piso1=0;
var O_espacio_piso2=0;
var O_parar1=0;
var O_parar2=0;
var O_mal_bien=0;
var O_check;
var O_cruz;
var O_cholito;
var O_globo;
var O_pasar=0;

var O_base6 ;
var O_base9 ;
var O_base12 ;
var O_base15 ;

var O_base8 ;
var O_base12 ;
var O_base16 ;
var O_base20 ;
var t1;
var t2;
var Juego1_8 = {
    preload:function()
    {
      juego.load.spritesheet('O_caja', 'styles/imagesgame/nivel8/sprite.png', 100, 75);
      juego.load.spritesheet('O_cholito','styles/imagesgame/sprite_comple2.png',70,185);
      juego.load.image('O_globo','styles/imagesgame/globo.png');
      juego.load.image('O_block', 'styles/imagesgame/nivel7/block.png');
      juego.load.image('O_check','styles/imagesgame/bien.png');
      juego.load.image('O_cruz','styles/imagesgame/mal.png');
      juego.load.image('O_piso','styles/imagesgame/piso2.png');
       //para 3
      juego.load.image('O_base6','styles/imagesgame/nivel8/b3_6.png');
      juego.load.image('O_base9','styles/imagesgame/nivel8/b_3_9.png');
      juego.load.image('O_base12','styles/imagesgame/nivel8/b_3_12.png');
      juego.load.image('O_base15','styles/imagesgame/nivel8/b_3_15.png');
      //para 4
      juego.load.image('O_base8','styles/imagesgame/nivel8/b_4_8.png');
      juego.load.image('O_base12','styles/imagesgame/nivel8/b_4_12.png');
      juego.load.image('O_base16','styles/imagesgame/nivel8/b_4_16.png');
      juego.load.image('O_base20','styles/imagesgame/nivel8/b_4_20.png');




    },
    create:function()
    {
      t1 = juego.add.text(20, 2, "0", {font: "15px Arial", fill: "#000000"});
      t2 = juego.add.text(100, 2, "0", {font: "15px Arial", fill: "#000000"});
      t1.text='NIVEL: 5';
      t2.text='SUBNIVEL: 1';
      //--------------------------------------CHOLITO---------------------------------------------------------
                     O_cholito=juego.add.sprite(50,205,'O_cholito');
                     O_cholito.animations.add('izquierda', [0, 1, 2, 3], 8, true);
                     O_cholito.animations.add('stop', [4], 20, true);
                     O_cholito.animations.add('derecha', [5, 6, 7, 8], 8, true);
                     O_cholito.animations.add('llora', [9], 10, true);
                     O_cholito.animations.play('stop');

                     O_globo=juego.add.sprite(620,40,'O_globo');
                     O_globo.scale.setTo(0.6,0.7);



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

                     for (var i = 0; i < 11; i++)
                       {

                       var O_item = juego.add.sprite(80*i+ O_separacion, 25, 'O_caja', i);
                        O_item.scale.setTo(0.5,0.5);
                       O_item.name =i;
                       O_separacion=O_separacion+10;

                       O_item.inputEnabled = true;

                       O_item.events.onInputDown.add(this.clickedSprite);
                       }

                       O_piso1=juego.add.sprite(-800,(barra_menu.position.y)-150,'O_piso');

                       O_piso2=juego.add.sprite(700,(barra_menu.position.y)-150,'O_piso');


         O_base =Math.floor(Math.random() * (5 -3)) + 3;
        // O_base=3;
         //alert(O_base);
         if (O_base==3) {
                   O_variables1 = juego.add.sprite((juego.height/2)-100 + (70 * 1), 150 + (1*6), 'O_block');
                   O_variables2 = juego.add.sprite((juego.height/2)-100 + (70 * 2), 150 + (2*6), 'O_block');
                   O_variables3 = juego.add.sprite((juego.height/2)-100 + (70 * 3), 150 + (3*6), 'O_block');
                   O_basepri =Math.floor(Math.random() * (5 -1)) + 1;
                   //alert("DATO:"+O_basepri);
                   if (O_basepri==1) {
                      O_resul=6;
                      O_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,300,75,'O_base6');
                      juego.physics.arcade.enable([ O_basePrimal,O_piso1,O_piso2,O_globo,O_cholito]);
                      juego.physics.arcade.gravity.y=250;
                      O_basePrimal.body.allowGravity=false;
                      O_basePrimal.body.immovable=true;
                      O_piso1.body.allowGravity=false;
                      O_piso1.body.immovable=true;
                      O_piso2.body.allowGravity=false;
                      O_piso2.body.immovable=true;
                      O_globo.body.allowGravity=false;
                      O_globo.body.immovable=true;
                      O_cholito.body.allowGravity=false;
                      O_cholito.body.immovable=true;

                   }
                   if (O_basepri==2) {
                     O_resul=9;
                     O_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,300,75,'O_base9');
                     juego.physics.arcade.enable([ O_basePrimal,O_piso1,O_piso2,O_globo,O_cholito]);
                     juego.physics.arcade.gravity.y=250;
                     O_basePrimal.body.allowGravity=false;
                     O_basePrimal.body.immovable=true;
                     O_piso1.body.allowGravity=false;
                     O_piso1.body.immovable=true;
                     O_piso2.body.allowGravity=false;
                     O_piso2.body.immovable=true;
                     O_globo.body.allowGravity=false;
                     O_globo.body.immovable=true;
                     O_cholito.body.allowGravity=false;
                     O_cholito.body.immovable=true;

                   }
                   if (O_basepri==3) {
                     O_resul=12;
                     O_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,300,75,'O_base12');
                     juego.physics.arcade.enable([ O_basePrimal,O_piso1,O_piso2,O_globo,O_cholito]);
                     juego.physics.arcade.gravity.y=250;
                     O_basePrimal.body.allowGravity=false;
                     O_basePrimal.body.immovable=true;
                     O_piso1.body.allowGravity=false;
                     O_piso1.body.immovable=true;
                     O_piso2.body.allowGravity=false;
                     O_piso2.body.immovable=true;
                     O_globo.body.allowGravity=false;
                     O_globo.body.immovable=true;
                     O_cholito.body.allowGravity=false;
                     O_cholito.body.immovable=true;

                   }
                   if (O_basepri==4) {
                     O_resul=15;
                     O_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,300,75,'O_base15');
                     juego.physics.arcade.enable([ O_basePrimal,O_piso1,O_piso2,O_globo,O_cholito]);
                     juego.physics.arcade.gravity.y=250;
                     O_basePrimal.body.allowGravity=false;
                     O_basePrimal.body.immovable=true;
                     O_piso1.body.allowGravity=false;
                     O_piso1.body.immovable=true;
                     O_piso2.body.allowGravity=false;
                     O_piso2.body.immovable=true;
                     O_globo.body.allowGravity=false;
                     O_globo.body.immovable=true;
                     O_cholito.body.allowGravity=false;
                     O_cholito.body.immovable=true;

                   }


         }
         if (O_base==4) {


                  O_variables1 = juego.add.sprite((juego.height/2)-100 + (70 * 1), 150 + (1*6), 'O_block');
                  O_variables2 = juego.add.sprite((juego.height/2)-100 + (70 * 2), 150 + (2*6), 'O_block');
                  O_variables3 = juego.add.sprite((juego.height/2)-100 + (70 * 3), 150 + (3*6), 'O_block');
                  O_variables4 = juego.add.sprite((juego.height/2)-100 + (70 * 4), 150 + (4*6), 'O_block');

                  O_basepri =Math.floor(Math.random() * (5 -1)) + 1;
                  if (O_basepri==1) {
                     O_resul=8;
                     O_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,400,75,'O_base8');
                     juego.physics.arcade.enable([ O_basePrimal,O_piso1,O_piso2,O_globo,O_cholito]);
                     juego.physics.arcade.gravity.y=250;
                     O_basePrimal.body.allowGravity=false;
                     O_basePrimal.body.immovable=true;
                     O_piso1.body.allowGravity=false;
                     O_piso1.body.immovable=true;
                     O_piso2.body.allowGravity=false;
                     O_piso2.body.immovable=true;
                     O_globo.body.allowGravity=false;
                     O_globo.body.immovable=true;
                     O_cholito.body.allowGravity=false;
                     O_cholito.body.immovable=true;

                  }
                  if (O_basepri==2) {
                    O_resul=12;
                    O_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,400,75,'O_base12');
                    juego.physics.arcade.enable([ O_basePrimal,O_piso1,O_piso2,O_globo,O_cholito]);
                    juego.physics.arcade.gravity.y=250;
                    O_basePrimal.body.allowGravity=false;
                    O_basePrimal.body.immovable=true;
                    O_piso1.body.allowGravity=false;
                    O_piso1.body.immovable=true;
                    O_piso2.body.allowGravity=false;
                    O_piso2.body.immovable=true;
                    O_globo.body.allowGravity=false;
                    O_globo.body.immovable=true;
                    O_cholito.body.allowGravity=false;
                    O_cholito.body.immovable=true;

                  }
                  if (O_basepri==3) {
                    O_resul=16;
                    O_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,400,75,'O_base16');
                    juego.physics.arcade.enable([ O_basePrimal,O_piso1,O_piso2,O_globo,O_cholito]);
                    juego.physics.arcade.gravity.y=250;
                    O_basePrimal.body.allowGravity=false;
                    O_basePrimal.body.immovable=true;
                    O_piso1.body.allowGravity=false;
                    O_piso1.body.immovable=true;
                    O_piso2.body.allowGravity=false;
                    O_piso2.body.immovable=true;
                    O_globo.body.allowGravity=false;
                    O_globo.body.immovable=true;
                    O_cholito.body.allowGravity=false;
                    O_cholito.body.immovable=true;

                  }
                  if (O_basepri==4) {
                    O_resul=20;
                    O_basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,400,75,'O_base20');
                    juego.physics.arcade.enable([ O_basePrimal,O_piso1,O_piso2,O_globo,O_cholito]);
                    juego.physics.arcade.gravity.y=250;
                    O_basePrimal.body.allowGravity=false;
                    O_basePrimal.body.immovable=true;
                    O_piso1.body.allowGravity=false;
                    O_piso1.body.immovable=true;
                    O_piso2.body.allowGravity=false;
                    O_piso2.body.immovable=true;
                    O_globo.body.allowGravity=false;
                    O_globo.body.immovable=true;
                    O_cholito.body.allowGravity=false;
                    O_cholito.body.immovable=true;

                  }




         }



    },
    Actualizar:function()
    {
      O_actualis=1;
      this.state.start('Actualis');
    },
     clickedSprite:function (O_item) {
       if (O_pulsador==0)
       {
         if (O_item.name==0) {
                                O_uno=9 ;
         }
         if (O_item.name==1) {
                                O_uno=3;
         }
         if (O_item.name==2) {
                                O_uno =6 ;
         }
         if (O_item.name==3) {
                                O_uno =4 ;
         }
         if (O_item.name==4) {
                                O_uno = 1;
         }
         if (O_item.name==5) {
                                O_uno = 7;
         }
         if (O_item.name==6) {
                                O_uno =8;
         }
         if (O_item.name==7) {
                                O_uno =5;
         }
         if (O_item.name==8) {
                                O_uno =2;
         }
         if (O_item.name==9) {
                                O_uno =10;
         }

         O_item.tint = 0xff0000;
        // O_pulsador++;
        // alert(O_uno);
        // alert(O_base);
        // alert(O_resul);

         var dato = O_uno*O_base;

         if (dato==O_resul) {
           O_check=juego.add.sprite(juego.height/2+45,juego.width/2-300,'O_check');
           O_cholito.body.velocity.x= +100;
           O_cholito.animations.play('derecha');
           O_mal_bien=1;
         }
         if (dato!=O_resul) {
           O_cruz=juego.add.sprite(juego.height/2+45,juego.width/2-300,'O_cruz');
           O_cholito.animations.play('llora');
           O_mal_bien=2;

         }
       }
       if (O_pulsador!=0) {

       }


                                     },

    update:function()
    {
        O_time = juego.time.events.loop(0, this.choqueI, this);
        O_time = juego.time.events.loop(0, this.choqueD, this);
///________________________________________PARA  BASE 1  Y BASE 2_______________--
if (O_base==3) {

    if (O_mal_bien==1) {

      O_variables1.position.y = O_basePrimal.position.y-75;
      O_variables1.position.x = O_j;
      O_variables1.inputEnabled = false;
      O_j= O_j+100;

      O_variables2.position.y = O_basePrimal.position.y-75;
      O_variables2.position.x = O_j;
      O_variables2.inputEnabled = false;
      O_j= O_j+100;

      O_variables3.position.y = O_basePrimal.position.y-75;
      O_variables3.position.x = O_j;
      O_variables3.inputEnabled = false;

      O_mal_bien=3;

    }
    var cho=parseInt(O_cholito.position.x);
    if (cho==701) {
      O_cholito.body.velocity.x= 0;
      O_cholito.animations.play('stop');

      O_globo.body.velocity.y=-100;
      O_cholito.body.velocity.y=-100;

    }
    if (O_mal_bien==2) {
                    O_globo.body.velocity.y=-100;
                    var m=parseInt(O_globo.position.y);

                    if (m==-345) {
                    //  alert("Siguiente");
                      O_actualis=1;
                      this.state.start('Actualis');
                    }

    }

}
if (O_base==4) {
  if (O_mal_bien==1) {

    O_variables1.position.y = O_basePrimal.position.y-75;
    O_variables1.position.x = O_j;
    O_variables1.inputEnabled = false;
    O_j= O_j+100;

    O_variables2.position.y = O_basePrimal.position.y-75;
    O_variables2.position.x = O_j;
    O_variables2.inputEnabled = false;
    O_j= O_j+100;

    O_variables3.position.y = O_basePrimal.position.y-75;
    O_variables3.position.x = O_j;
    O_variables3.inputEnabled = false;
    O_j= O_j+100;

    O_variables4.position.y = O_basePrimal.position.y-75;
    O_variables4.position.x = O_j;
    O_variables4.inputEnabled = false;

    O_mal_bien=3;
  }
  var cho=parseInt(O_cholito.position.x);
  if (cho==701) {
    O_cholito.body.velocity.x= 0;
    O_cholito.animations.play('stop');

    O_globo.body.velocity.y=-100;
    O_cholito.body.velocity.y=-100;

  }
  if (O_mal_bien==2) {
                  O_globo.body.velocity.y=-100;
                  var m=parseInt(O_globo.position.y);


                  if (m==-345) {
                    alert("nuevamente");
                    O_actualis=1;
                    this.state.start('Actualis');
                  }

  }


}

var k=parseInt(O_cholito.position.y);
console.log('data:'+k);
var fin=-181;

if (k==fin) {
  var connect,form,result,subnivel=2;
  form='jugador='+jugador+'&nivel='+6+'&sNivel='+10;


  connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');

  // alert(jugador+'-'+nivel);
  if(jugador!=''&&nivel!='')
  {
      connect.onreadystatechange =function(){
      if(connect.readyState==4&&connect.status==200){
        //  alert(connect.responseText);
          if(parseInt(connect.responseText) ==1){

               O_pasar=1;
               //puntoDB=5;
               nivel=6;

               sNivel=10;

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

if (O_pasar==1) {

  this.state.start('Nivel');

  }


    },
    choqueI:function(){
      juego.physics.arcade.overlap( O_piso1, O_basePrimal, this.tocoUno, null, this);
      if( O_parar1==0) {  O_piso1.body.velocity.x=+200; }
      else if ( O_parar1==1)
      {
          if( O_espacio_piso1==0)
              {
                            O_piso1.body.velocity.x=0;
                            O_espacio_piso1=1;

              }
      }

    },
    tocoUno:function(){
      if( O_piso1.alive == false) { return; }
           O_parar1=1;

    },
    choqueD:function(){
      juego.physics.arcade.overlap( O_piso2, O_basePrimal, this.tocoDos, null, this);
      if( O_parar2==0) {  O_piso2.body.velocity.x=-200; }
      else if ( O_parar2==1)
      {
          if( O_espacio_piso2==0)
              {
                            O_piso2.body.velocity.x=0;
                            O_espacio_piso2=1;

              }
      }

    },
    tocoDos:function(){
      if( O_piso2.alive == false) { return; }
           O_parar2=1;

    }


};
