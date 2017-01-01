
var cielo;
var piso;
var nuve;
var cholito1;
var mano;
var cholito_negro;
var scroolBar;
var piramide;
var piramide2;
var puntoNiveles=[0,0,0,0,0];

var jugador=jugador;
var sNivelvel=sNivelvel;
var barra_menu;
var pasto;


//BOTONES
var b_atras;
var b_siguiente;
var b_actualizar;
var b_home;
var b_avanzado;
var b_basico;

var boton1;
var boton2;
var boton3;
var boton4;
var boton5;

var Nivel ={

preload:function()
{

   juego.load.image('cielo','styles/imagesgame/degra.png');

   juego.load.image('nuve','styles/imagesgame/nuves.png');
   juego.load.image('bar_menu','styles/imagesgame/barra_menu.png');
   juego.load.image('pasto','styles/imagesgame/piso.png');

   juego.load.image('b_atras','styles/imagesgame/atras.png');
   juego.load.image('b_siguiente','styles/imagesgame/sig.png');
   juego.load.image('b_actualizar','styles/imagesgame/reanudar.png');
   juego.load.image('b_home','styles/imagesgame/home.png');
   juego.load.image('b_avanzado','styles/imagesgame/b_avanzado.png');
   juego.load.image('b_basico','styles/imagesgame/b_basico.png');
   juego.load.image('cholito_negro','styles/imagesgame/cholito_negro.png');
   juego.load.image('scroolBar','styles/imagesgame/barras/barra1.png');
   juego.load.image('scroolBar2','styles/imagesgame/barras/barra2.png');

   juego.load.spritesheet('cholito1','styles/imagesgame/sprite_comple.png',100,200);
   juego.load.spritesheet('piramide','styles/imagesgame/n_sprite2.png',500,500);
   juego.load.spritesheet('piramide2','styles/imagesgame/n_sprite2.png',100,500);
   juego.load.spritesheet('mano','styles/imagesgame/mano_pat.png',60,100);

   juego.load.image('boton1','styles/imagesgame/b_uno.png');
   juego.load.image('boton2','styles/imagesgame/b_dos.png');
   juego.load.image('boton3','styles/imagesgame/b_tres.png');
   juego.load.image('boton4','styles/imagesgame/b_cuatro.png');
   juego.load.image('boton5','styles/imagesgame/b_cinco.png');
 //para poder tner  mejor  rendimiento
   juego.forceSingleUpdate = true;

},
create:function()
{
  //alert("nivel:"+sNivel);
  //alert("subnivel:"+nivel);


   cielo = juego.add.tileSprite(0,0,juego.width,juego.height,'cielo');

    nuve  = juego.add.tileSprite(0,0,juego.width,juego.height,'nuve');



    pasto=juego.add.tileSprite(0,juego.height-170,juego.width,150,'pasto');

    cholito1 =juego.add.sprite((juego.width/2)-300,(pasto.position.y)-70,'cholito1');
    cholito1.animations.add('cholito1', [5,6, 7, 8]);
    cholito1.animations.play('cholito1', 4, true);

    //remplazando cada nivel 0  por  1
     for (var x=0;x<puntoDB;x++)
     {
       puntoNiveles.splice(x, 0, 1);


     }


    piramide =juego.add.sprite((juego.width/2)-200,(pasto.position.y)-458,'piramide');
    piramide.animations.add('piramide', [1]);
    piramide.animations.play('piramide', 4, true);

    var j = 0;
    var a=198;

    //segun avance de punto  cambiamos de sprite  de nivel
    for (var i = 0; i < puntoDB; i++)
    {

      if (puntoNiveles[i]==1&& puntoDB !=5) {

        piramide2 =juego.add.sprite(((juego.width/2))-a,(pasto.position.y)-458,'piramide2');
        piramide2.animations.add('piramide', [j]);
        piramide2.animations.play('piramide', 4, true);
        piramide2.scale.setTo(1,1);

        j++;
        a=a-98;

      }
      else if (puntoDB==5) {
        piramide2 =juego.add.sprite(((juego.width/2))-a,(pasto.position.y)-458,'piramide2');
        piramide.animations.add('piramide', [0]);
        piramide.animations.play('piramide', 4, true);
      }

    }




    barra_menu=juego.add.tileSprite(0,juego.height-60,juego.width,100,'bar_menu');
    var ye = (barra_menu.position.y)+4;
    var ex =(barra_menu.position.x)+4;

    b_atras=this.add.button(ex,ye,'b_atras',this.Atras,this);
    b_siguiente=this.add.button(b_atras.position.x+64,ye,'b_siguiente',this.Siguiente,this);
    b_home=this.add.button(b_siguiente.position.x+64,ye,'b_home',this.Home,this);
    b_actualizar=this.add.button(b_home.position.x+64,ye,'b_actualizar',this.Actualizar,this);


    boton1     = this.add.button((piramide.position.x)+25,(piramide.position.y)+458,'boton1',this.Nivel1 ,this);
    boton1.scale.setTo(0.4,0.4);
    boton2     = this.add.button((piramide.position.x)+130,(piramide.position.y)+386,'boton2',this.Nivel2 ,this);
    boton2.scale.setTo(0.4,0.4);
    boton3     = this.add.button((piramide.position.x)+235,(piramide.position.y)+317,'boton3',this.Nivel3,this);
    boton3.scale.setTo(0.4,0.4);
    boton4     = this.add.button((piramide.position.x)+335,(piramide.position.y)+250,'boton4',this.Nivel4 ,this);
    boton4.scale.setTo(0.4,0.4);
    boton5     = this.add.button((piramide.position.x)+440,(piramide.position.y)+185,'boton5',this.Nivel5 ,this);
    boton5.scale.setTo(0.4,0.4);

    //MANO
    if (nivel==0||nivel==1&&sNivel==0||sNivel==1||sNivel==2) {
        mano =juego.add.sprite((piramide.position.x)+29,(piramide.position.y)+480,'mano');
        mano.animations.add('mano', [0,1]);
        mano.animations.play('mano', 2, true);
        mano.scale.setTo(0.7,0.7);

    }

    if (nivel==2 && sNivel==3 ||sNivel==4) {
        mano =juego.add.sprite((piramide.position.x)+134,(piramide.position.y)+410,'mano');
        mano.animations.add('mano', [0,1]);
        mano.animations.play('mano', 2, true);
        mano.scale.setTo(0.7,0.7);

    }

    if (nivel==3 && sNivel==5 ||sNivel==6) {
        mano =juego.add.sprite((piramide.position.x)+239,(piramide.position.y)+341,'mano');
        mano.animations.add('mano', [0,1]);
        mano.animations.play('mano', 2, true);
        mano.scale.setTo(0.7,0.7);

    }
    if (nivel==4 && sNivel==7 ||sNivel==8) {

        mano =juego.add.sprite((piramide.position.x)+339,(piramide.position.y)+274,'mano');
        mano.animations.add('mano', [0,1]);
        mano.animations.play('mano', 2, true);
        mano.scale.setTo(0.7,0.7);
        alert("ai4");
    }
    if (nivel==5 && sNivel==9 ||sNivel==10) {

        mano =juego.add.sprite((piramide.position.x)+444,(piramide.position.y)+209,'mano');
        mano.animations.add('mano', [0,1]);
        mano.animations.play('mano', 2, true);
        mano.scale.setTo(0.7,0.7);
        alert("ai4");
    }




    cholito_negro=juego.add.tileSprite(juego.width-400,ye,64,64,'cholito_negro');
    scroolBar=juego.add.tileSprite(cholito_negro.position.x+50,ye+20,300,40,'scroolBar');

    b_atras.scale.setTo(0.8,0.8);
    b_siguiente.scale.setTo(0.8,0.8);
    b_home.scale.setTo(0.8,0.8);
    b_actualizar.scale.setTo(0.8,0.8);
    cholito_negro.scale.setTo(1,0.8);
    scroolBar.scale.setTo(1,0.8);
    cholito1.scale.setTo(0.7,0.6);
    piramide.scale.setTo(1,1);










},

Actualizar:function()
{
  //this.state.start('Nivel');
},
Home:function()
{
  alert("boton Home");
},

Siguiente:function()
{
  alert('boton Siguiente');

},
Atras:function()
{
  alert("boton  Atras");
},

//BOTONES DE  Nivel
Nivel1:function()
{
  if (nivel==0||nivel==1) {

    if (sNivel==0) {
      this.state.start('Juego1_1');

    }
    if (sNivel==2) {
      this.state.start('Juego1_2');
    }

  }else {
    Materialize.toast('NIVEL CONCLUIDO', 3000, 'red')
  }

},

Nivel2:function()
{
  if (nivel==2) {
    if (sNivel==3) {
      this.state.start('Juego1_3');
    }
    if (sNivel==4) {
      this.state.start('Juego1_4');
    }

  }else {
    Materialize.toast('NIVEL CONCLUIDO', 3000, 'red')
  }
},

Nivel3:function()
{
  
  if (nivel==3) {
    if (sNivel==5) {
      this.state.start('Juego1_5');
    }
    if (sNivel==6) {

      this.state.start('Juego1_6');
    }

  }else {
    Materialize.toast('NIVEL CONCLUIDO', 3000, 'red')
  }
},

Nivel4:function()
{
  alert("hola soy 4");
},

Nivel5:function()
{
  alert("hola soy 5");
},




update:function()
{
 nuve.tilePosition.x -= 0.7;





}

};
