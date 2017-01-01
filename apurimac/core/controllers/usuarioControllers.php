<?php

$template = new Smarty();
if($_SESSION['cargo']=='2'){

    if ($_POST) {

	          require('core/models/class.Acceso.php');
	          $acceso = new Acceso();
	          $acceso->U_juego();
	          exit;
          //$jugador = $_POST['sNivel'];

         //echo $jugador;

	# code...
    }else {

      $db = new Conexion();
      $variable =$_SESSION['id'];
     $variable = (int) $variable;

      $sql = $db->query("SELECT * FROM game where jugador=$variable ");
      while ($x = $db->rrecorrer($sql))
      {
        # code...
          $template->assign('Contacts',array(
                                            'id' =>$x['id'] ,
                                            'jugador' =>$x['jugador'] ,
                                            'inicio' =>$x['inicio'] ,
                                            'fin' =>$x['fin'] ,
                                            'nivel' =>$x['nivel'],
                                            'sNivel' =>$x['sNivel']
          ));


      }
      $template->display('public/usuario.tpl');
	# code...
    }


}else{

    header('location:?view=index');

}








 ?>
