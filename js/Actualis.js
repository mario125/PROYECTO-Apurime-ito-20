var scrollBarCircle;
Actualis = {

  preload:function()
  {
    juego.load.spritesheet('scrollBarCircle','img/barras/scrollbar.png',200,200);


  },
  create:function()
  {
    scrollBarCircle=juego.add.sprite(juego.width/2,juego.height/2,'scrollBarCircle');
    scrollBarCircle.animations.add('scrollAnimate',[0,1,2,3,4],2,true);
    scrollBarCircle.anchor.setTo(0.5);

  },
  update:function()
  {
    time = juego.time.events.loop(2500, this.clasCargar, this);
    time = juego.time.events.loop(100,this.classScroll,this);


    uno=null;
    dos=null;
    tres=null;
    cuatro=null;
    cinco=null;

    x1 = 0;
    x2 = 0;
    x3 = 0;
    x4 = 0;
    x5 = 0;
    x6 = 0;
    xpuntero = 90;
   //PARAR  PISO AL   COLICIONAR  CON  BASE
    parar1 = 0;
    parar2 = 0;
    espacio_piso2 = 0;
    espacio_piso1 = 0;
    a = 0 ;
    b = 0 ;
    c = 0 ;
    baseprimal_secundario_uno=false;
    baseprimal_secundario_dos=false;
    baseprimal_secundario_tres=false;
    baseprimal_secundario_cuatro=false;
    baseprimal_secundario_cinco=false;
    mochilaPuntero=0;
  },
  classScroll:function(){scrollBarCircle.animations.play('scrollAnimate');},
  clasCargar:function()
  {

    this.state.start('Juego1_1');

  }


};
