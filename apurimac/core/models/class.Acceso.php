<?php
class Acceso{



    public function Login()
    {
        try{


            if(!empty($_POST['user']) and !empty($_POST['pass']) and !empty($_POST['session'])){
                $db = new Conexion();
                $this->user =$db->real_escape_string($_POST['user']);
                 $this->pass =$db->real_escape_string($_POST['pass']);


                //$sql = $db->query("SELECT * FROM user WHERE USER ='$this->user' and pass='$this->pass'");
                $sql = $db->query("SELECT * FROM usuario WHERE nick ='$this->user'and password='$this->pass'");

                if($db-> rows($sql)>0){

                    $datos = $db->rrecorrer($sql);

                    $_SESSION['id'] = $datos['id'];
                    $_SESSION['nombres'] = $datos['nombres'];
                    $_SESSION['apellidos'] = $datos['apellidos'];
                    $_SESSION['sexo'] = $datos['sexo'];
                    $_SESSION['nick'] = $datos['nick'];
                    $_SESSION['password'] = $datos['password'];
                    $_SESSION['cargo'] = $datos['cargo'];


                    if($_POST['session']==true){  ini_set('session.cookie_lifetime',time()+(60*60*24*2));}

                    echo $_SESSION['cargo'];



                }else{
                    echo 25;
      }

                $db->liberar($sql);
                $db->close();






            }else{
                throw new Exception('Error: Datos vacios..');

            }

        }catch(Exceptionm $login){
            echo $login->getMessage();

        }
    }
    public function Recuperar()
    {

    }


    public function U_juego()
    {
      try {
        if (!empty($_POST['jugador']) and !empty($_POST['nivel']) and !empty($_POST['sNivel'])) {

           $db = new Conexion();
           $fecha_actual = date('Y-m-d');
           $this->jugador =$db->real_escape_string($_POST['jugador']);
           $this->nivel =$db->real_escape_string($_POST['nivel']);
           $this->sNivel =$db->real_escape_string($_POST['sNivel']);
           $this->fecha =$db->real_escape_string($fecha_actual);



          $sql = $db->query("UPDATE game SET nivel=$this->nivel ,sNivel=$this->sNivel ,fin='$this->fecha' WHERE jugador=$this->jugador");
          echo 1;
        }
      } catch (Exception $e) {
          echo $e->getMessage();

      }


    }


    public function Registrar()
    {

      try{
          //require('core/models/class.Conexion.php');

          if(!empty($_POST['nombres']) and !empty($_POST['apellidos']) and !empty($_POST['sexo'])and !empty($_POST['cargo'])and !empty($_POST['nick'])and !empty($_POST['password']))
          {
              $db = new Conexion();
               $fecha_actual = date('Y-m-d');
               $this->nombres =$db->real_escape_string($_POST['nombres']);
               $this->apellidos =$db->real_escape_string($_POST['apellidos']);
               $this->sexo =$db->real_escape_string($_POST['sexo']);
               $this->cargo =$db->real_escape_string($_POST['cargo']);
               $this->nick =$db->real_escape_string($_POST['nick']);
               $this->password =$db->real_escape_string($_POST['password']);
               $this->fecha =$db->real_escape_string($fecha_actual);
              //$sql = $db->query("SELECT * FROM user WHERE USER ='$this->user' and pass='$this->pass'");
              $sql  = $db->query("SELECT id , nick,apellidos,nombres FROM usuario WHERE nick ='$this->nick'or apellidos='$this->apellidos' or nombres='$this->nombres'");

              if($db-> rows($sql)==0){
              $sql2 = $db->query("INSERT INTO usuario(nombres, apellidos, sexo, nick, password, cargo) VALUES ('$this->nombres','$this->apellidos','$this->sexo','$this->nick','$this->password','$this->cargo')");
              $sql3 = $db->query("SELECT MAX(id) AS id FROM usuario");
              $id = $db->rrecorrer($sql3);
              $sql4 =$db->query("INSERT INTO game (jugador, inicio, fin, nivel, sNivel) VALUES ($id[0],'$this->fecha','$this->fecha',0,0)");


              echo 1;
              $db->liberar($sql2,$sql3,$sql4);

              }else{
                  $datos = $db->rrecorrer($sql);
                  if (strtolower($this->nombres) == strtolower($datos['nombres']) && strtolower($this->apellidos) == strtolower($datos['apellidos'])) {
                        echo  2;
                  }
                  if (strtolower($this->nick) == strtolower($datos['nick'])) {
                      echo 3;
                  }

              }


              $db->liberar($sql);
              $db->close();
          }else{
              throw new Exception('Error: Datos vacios..');

          }

      }catch(Exceptionm $login){
          echo $login->getMessage();

      }

    }


}
?>
