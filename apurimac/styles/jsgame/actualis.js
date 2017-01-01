var    scrollBarCircle;
var    Actualis={
  preload:function()
  {
      juego.load.spritesheet('scrollBarCircle','styles/imagesgame/barras/scrollbar.png',200,200);
  },
  create:function()
  {
    scrollBarCircle=juego.add.sprite(juego.width/2,juego.height/2,'scrollBarCircle');
    scrollBarCircle.animations.add('scrollAnimate',[0,1,2,3,4],2,true);
    scrollBarCircle.anchor.setTo(0.5);

  },
  update:function()
  {
    //  alert(S_actualis);
      time = juego.time.events.loop(2500, this.clasCargar, this);
      time = juego.time.events.loop(100,this.classScroll,this);
      //_____________________juego1_1__________________________________
       j=300;
       parar1=0;
       parar2=0;
       espacio_piso1=0;
       espacio_piso2=0;
       uno=0;
       dos=0;
       tres=0;
       cuatro=0;
       cinco=0;
       pulsadas=0;
       base=0;

       pasar=0;

       mal_bien=0;

      //_____________________juego1_2__________________________________


        M_separacion=50;
        M_j=300;
        M_mal_bien=0;
        M_uno =0;
        M_dos =0;
        M_tres =0;
        M_cuatro =0;
        M_cinco =0;
        M_seis =0;
        M_pulsacion=0;
        M_suma=0;
        M_parar2=0;
        M_parar1=0;
        M_pasar=0;


        M_espacio_piso2=0;
        M_espacio_piso1=0;
      //_____________________juego_3__________________________________


         T_separacion=50;
         T_mal_bien=0;
         T_j=300;

         T_uno =0;
         T_dos =0;
         T_tres =0;
         T_cuatro =0;
         T_cinco =0;
         T_seis =0;
         T_siete =0;

         T_pulsacion=0;
         T_suma=0;

         T_parar2=0;
         T_parar1=0;
         T_pasar=0;


         T_espacio_piso2=0;
         T_espacio_piso1=0;
      //______________________juego_4__________________________________


         K_separacion=25;
         K_mal_bien=0;
         K_j=300;

         K_uno =0;
         K_dos =0;
         K_tres =0;
         K_cuatro =0;
         K_cinco =0;
         K_seis =0;
         K_siete =0;

         K_pulsacion=0;
         K_suma=0;

         K_parar2=0;
         K_parar1=0;
         K_pasar=0;


         K_espacio_piso2=0;
         K_espacio_piso1=0;
      //______________________JUEGO1_5__________________________________


         C_separacion=20;
         C_mal_bien=0;
         C_j=300;

         C_uno =0;
         C_dos =0;
         C_tres =0;
         C_cuatro =0;
         C_cinco =0;
         C_seis =0;
         C_siete =0;
         C_ocho =0;

         C_pulsacion=0;
         C_suma=0;
         C_cruz;
         C_check;
         C_time;
         C_parar2=0;
         C_parar1=0;
         C_pasar=0;


         C_espacio_piso2=0;
         C_espacio_piso1=0;
      //______________________juego1_6___________________________________

        S_separacion=5;
        S_mal_bien=0;
        S_j=300;

        S_uno =0;
        S_dos =0;
        S_tres =0;
        S_cuatro =0;
        S_cinco =0;
        S_seis =0;
        S_siete =0;
        S_ocho =0;
        S_pulsacion=0;
        S_suma=0;
        S_parar2=0;
        S_parar1=0;
        S_pasar=0;
        S_espacio_piso2=0;
        S_espacio_piso1=0;
      //______________________juego1_7___________________________________





  },
  classScroll:function(){scrollBarCircle.animations.play('scrollAnimate');},
clasCargar:function()
{
  if (M_actualis==1) {

    this.state.start('Juego1_2');
    M_actualis=0;
  }
  if (Actualis1==1) {


    this.state.start('Juego1_1');
    Actualis1=0;
  }
  if (T_actualis==1) {
    this.state.start('Juego1_3');
    T_actualis=0;
  }
  if (K_actualis==1) {
    this.state.start('Juego1_4');
    K_actualis=0;

  }
  if (C_actualis==1) {
    this.state.start('Juego1_5');
    C_actualis=0;

  }
  if (S_actualis==1) {
    this.state.start('Juego1_6');
    S_actualis=0;

  }



}


};
