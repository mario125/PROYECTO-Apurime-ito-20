<?php

class Conexion extends mysqli{

    public function __construct(){
        parent::__construct('localhost','root','','juego125');
        $this->query("SET NAME utf8;");
        $this->connect_errno ?die('ERROR:conexion fallida'):null;

    }
    public function rows($x){
        return mysqli_num_rows($x);


    }
    public function rrecorrer($x){
        return mysqli_fetch_array($x);

    }
    public function liberar($x){
        return mysqli_free_result($x);


    }
}
?>
