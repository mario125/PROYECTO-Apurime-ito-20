var boton;
var nuve;
var fondo;
var nino;
//tomamos  el tamaño de pantalla dela Pc,Tablet,Movil para   hacer dinamico el tamaño


var Menu = {
  preload:function()
  {
    juego.stage.backgroundColor = '#f1e7e7';
    //sprite de  niño para  el escenario
    juego.load.spritesheet('nino','styles/imagesgame/sprite1.png',100,200);
    //cargamos  como  esprite el  fondo para  poder   hacer responsi
    juego.load.spritesheet('fondo','styles/imagesgame/m.png',1400,980);
    // cargamos  la  nueve  y  el  boton como  imagenes normales
    juego.load.image('nueve','styles/imagesgame/nuves.png');
    juego.load.image('boton','styles/imagesgame/btn.png');

  },
  create:function()
  {
    //mostramos  el  fondo  en  el deterninado  punto  del escenario  el  sprite 0
    fondo =juego.add.sprite((juego.width/2),(juego.height/2),'fondo');
    fondo.anchor.setTo(0.5);
    fondo.animations.add('fondo', [0]);
    fondo.animations.play('fondo', 4, true);

    //mostramos la  nueve   que mas luego se le animara en el update
    nuve = juego.add.tileSprite(0,0,juego.width,juego.height,'nueve');
    //mostrando el  boton JUGAR y asignando la  function " iniciarJuego"
    boton = this.add.button(juego.width/2, (juego.height/2)+230, 'boton', this.iniciarNivel, this);
    boton.scale.setTo(0.8,0.8);
    //mostrando el  niño   y  dando  animacion  por  cada  sprite  0,1,2,3  en tiempo de 4
    nino =juego.add.sprite((juego.width/2)-5,(juego.height/2)+59,'nino');
    nino.animations.add('nino', [0, 1, 2, 3]);
    nino.animations.play('nino', 4, true);

    //  asignando  punto de anclaje
      fondo.anchor.setTo(0.5);
      nino.anchor.setTo(0.5);
      boton.anchor.setTo(0.5);





  },
  iniciarNivel:function(){
     this.state.start('Nivel');
  },
  update:function()
  {
     nuve.tilePosition.x -= 0.7;

  }
};
