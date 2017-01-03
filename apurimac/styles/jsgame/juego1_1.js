var j=300;
var basePrimal;
var piso_1;
var time;
var parar1=0;
var parar2=0;
var espacio_piso1=0;
var espacio_piso2=0;
var uno=0;
var dos=0;
var tres=0;
var cuatro=0;
var cinco=0;
var pulsadas=0;
var base=0;
var jugador=jugador;

var pasar=0;
var Actualis1;


var t1;
var t2;

var bien;
var mal;
var item;
var mal_bien=0;
var cholito1;
var  globo;


var Juego1_1 ={

  preload:function()
  {
              juego.load.image('base_2','styles/imagesgame/nivel1/ca_b2.png');
              juego.load.image('base_3','styles/imagesgame/nivel1/c_b3.png');
              juego.load.image('piso_1','styles/imagesgame/piso2.png');
              juego.load.image('bien','styles/imagesgame/bien.png');
              juego.load.image('mal','styles/imagesgame/mal.png');
              juego.load.image('fondo','styles/imagesgame/fond.png');
              juego.load.image('globo','styles/imagesgame/globo.png');
              juego.load.spritesheet('cajas', 'styles/imagesgame/nivel1/cajas100x100.png', 100, 75);
              juego.load.spritesheet('cajas2', 'styles/imagesgame/nivel1/cajas2100x100.png', 100, 75);
              juego.load.spritesheet('cholito1','styles/imagesgame/sprite_comple2.png',70,185);



  },
  create:function()
  {
    t1 = juego.add.text(20, 2, "0", {font: "15px Arial", fill: "#000000"});
    t2 = juego.add.text(100, 2, "0", {font: "15px Arial", fill: "#000000"});
    t1.text='NIVEL: 1';
    t2.text='SUBNIVEL: 1';
              //  alert("juego1");
               juego.physics.startSystem(Phaser.Physics.ARCADE);




               cholito1=juego.add.sprite(50,205,'cholito1');
               //mochila=juego.add.sprite(50,juego.height/2-200,'mochila')



               cholito1.animations.add('izquierda', [0, 1, 2, 3], 8, true);
               cholito1.animations.add('stop', [4], 20, true);
               cholito1.animations.add('derecha', [5, 6, 7, 8], 8, true);
               cholito1.animations.add('llora', [9], 10, true);
                cholito1.animations.play('stop');
                globo=juego.add.sprite(600,40,'globo');
                globo.scale.setTo(0.6,0.7);




    barra_menu=juego.add.tileSprite(0,juego.height-60,juego.width,100,'bar_menu');

    var ye = (barra_menu.position.y)+4;
    var ex =(barra_menu.position.x)+4;

  //  b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
  //  b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
  //  b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
    b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);
    cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
    scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+10,300,40,'scroolBar2');

    b_atras.scale.setTo(0.8,0.8);
    b_siguiente.scale.setTo(0.8,0.8);
    b_home.scale.setTo(0.8,0.8);
    b_actualizar.scale.setTo(0.8,0.8);
    cholito_negro.scale.setTo(1,0.8);


    piso_1=juego.add.sprite(-800,(barra_menu.position.y)-150,'piso_1');
    piso_2=juego.add.sprite(700,(barra_menu.position.y)-150,'piso_1');




     base = Math.floor((Math.random() * 2) + 2);

    if (base==2) {
      basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,'base_2');

      juego.physics.arcade.enable([basePrimal,piso_1,piso_2,cholito1,globo]);
      juego.physics.arcade.gravity.y=250;
      basePrimal.body.allowGravity=false;
      basePrimal.body.immovable=true;

      piso_1.body.allowGravity=false;
      piso_1.body.immovable=true;
      piso_2.body.allowGravity=false;
      piso_2.body.immovable=true;
      cholito1.body.allowGravity=false;
      cholito1.body.immovable=true;
      globo.body.allowGravity=false;
      globo.body.immovable=true;
    }
    else if (base==3) {
      basePrimal=juego.add.tileSprite(300,(barra_menu.position.y)-75,200,75,'base_3');

      juego.physics.arcade.enable([basePrimal,piso_1,piso_2,cholito1,globo]);
      juego.physics.arcade.gravity.y=250;
      basePrimal.body.allowGravity=false;
      basePrimal.body.immovable=true;

      piso_1.body.allowGravity=false;
      piso_1.body.immovable=true;
      piso_2.body.allowGravity=false;
      piso_2.body.immovable=true;
      cholito1.body.allowGravity=false;
      cholito1.body.immovable=true;
      globo.body.allowGravity=false;
      globo.body.immovable=true;
    }




//group2 = game.add.group();
var k=100;
for (var i = 0; i < 4; i++)
{
    // Crea directamente sprites en el grupo izquierdo.
    if (base==2) {
      item = juego.add.sprite(90*i+k, 25 , 'cajas', i);

    }
    if (base==3) {
      item = juego.add.sprite(90*i+k, 25 , 'cajas2', i);

    }

    item.name =  i;
    k=k+100;

    // Habilitar la detección de entrada, es posible ser arrastrado.
    item.inputEnabled = true;


    // Hacer que este elemento se pueda arrastrar
    item.input.enableDrag();



    // Limitar la ubicación de la gota a solo las 2 columnas.
    item.events.onDragStop.add(this.fixLocation);
}




  },
  Actualizar:function()
  {
    Actualis1=1;

    this.state.start('Actualis');
  },

  fixLocation:function(item)
{
  if (mal_bien==1||mal_bien==2) {
    




  // Mover los elementos cuando ya se ha eliminado.
  if (item.y <25) {
        item.y = 25;
    }

    else if (item.y > 25) {
        item.y = 25;
        item.inputEnabled = false;
        item.tint = 0xFF6699;
        Materialize.toast('cajon bloqueado', 4000)




    }


  }

if (mal_bien==0) {
  t2.text=text = item.name;




// Mover los elementos cuando ya se ha eliminado.
if (item.y <25) {
      item.y = 25;
  }

  else if (item.y > 25) {
      item.position.y = basePrimal.position.y-75;
      item.position.x =j;
      j=j+100;
      item.inputEnabled = false;
      //item.tint = 0xFF6699;
      if (base==2) {
        if (item.name==0) {
          uno=1;

        }
        if (item.name==1) {
          dos=3;

        }
        if (item.name==2) {
          tres=1;

        }
        if (item.name==3) {
          cuatro=5;


        }
        }
     if (base==3) {
       if (item.name==0) {
         uno=1;

       }
       if (item.name==1) {
         dos=4;

       }
       if (item.name==2) {
         tres=2;

       }
       if (item.name==3) {
         cuatro=5;


       }


     }

      pulsadas++;

      var suma =uno+dos+tres+cuatro ;


      if (base==2) {
        if (pulsadas==2&&suma==2) {
          //fondo=juego.add.tileSprite(0,0,juego.width,390,'fondo');
          bien=juego.add.sprite(juego.height/2+45,juego.width/2-300,'bien');
              cholito1.body.velocity.x= +100;
              cholito1.animations.play('derecha');
              mal_bien=1;



        }if (pulsadas==2&&suma!=2) {
            //fondo=juego.add.tileSprite(0,0,juego.width,390,'fondo');
            mal=juego.add.sprite(juego.height/2+45,juego.width/2-300,'mal');
              //cholito1.body.velocity.x= +100;
              cholito1.animations.play('llora');
              mal_bien=2;

        }

      }
      if (base==3) {
        if (pulsadas==2&&suma==3) {
          //fondo=juego.add.tileSprite(0,0,juego.width,390,'fondo');
           bien=juego.add.sprite(juego.height/2+45,juego.width/2-300,'bien');
              cholito1.body.velocity.x= +100;
              cholito1.animations.play('derecha');
           mal_bien=1;

        }if (pulsadas==2&&suma!=3) {
          //fondo=juego.add.tileSprite(0,0,juego.width,390,'fondo');
            mal=juego.add.sprite(juego.height/2+45,juego.width/2-300,'mal');
              //cholito1.body.velocity.x= +100;
              cholito1.animations.play('llora');
            mal_bien=2;

        }

      }





  }



}//////////////////////////////////////////


},///////////////////

  update:function()
  {
    time = juego.time.events.loop(0, this.choqueIzquierda, this);
    time = juego.time.events.loop(0, this.choqueDerecha, this);



    var cho=parseInt(cholito1.position.x);

  if (mal_bien==1) {
    if (cho==701) {
               cholito1.body.velocity.x= 0;
               cholito1.animations.play('stop');

               globo.body.velocity.y=-100;
               cholito1.body.velocity.y=-100;


    }

  }
    if (mal_bien==2) {
      globo.body.velocity.y=-100;
      var m=parseInt(globo.position.y);

      if (m==-345) {
        Actualis1=1;

        this.state.start('Actualis');
      }

    }
    var k=parseInt(cholito1.position.y);
    var fin=-181;

  if (k==fin) {
     var genial=0;
            var connect,form,result,subnivel=1;

          form='jugador='+jugador+'&nivel='+1+'&sNivel='+2;
          connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');

          // alert(form);
          if(jugador!='')
          {
              connect.onreadystatechange =function(){
              if(connect.readyState==4&&connect.status==200){
                //  alert(connect.responseText);
                  if(parseInt(connect.responseText) ==1){


                      pasar=1;

                  }
                  else{
                     //    error
                     Materialize.toast('EROR.... ', 3000, 'red')
                    }

              }else if(connect.readyState!=4){
                Materialize.toast('procesando...', 1000,'blue')
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

  if (pasar==1) {
    sNivel=2;
    nivel=1

    this.state.start('Juego1_2');

  }


  },
  choqueDerecha:function()   {
        juego.physics.arcade.overlap(piso_2,basePrimal, this.tocoDos, null, this);
        if(parar2==0) { piso_2.body.velocity.x=-200; }
        else if (parar2==1)
        {
            if(espacio_piso2==0)
                {
                             piso_2.body.velocity.x=0;
                             espacio_piso2=1;

                }
        }
        },
        tocoDos:function()     {
          if(piso_2.alive == false) { return; }
              parar2=1;
        },
    choqueIzquierda:function()   {
              juego.physics.arcade.overlap(piso_1,basePrimal, this.tocoUno, null, this);
              if(parar1==0) { piso_1.body.velocity.x=+80; }
              else if (parar1==1)
              {
                  if(espacio_piso1==0)
                      {
                                   piso_1.body.velocity.x=0;
                                   espacio_piso1=1;
                      }
              }
              },
              tocoUno:function()     {
                if(piso_1.alive == false) { return; }
                    parar1=1;
              }


};
