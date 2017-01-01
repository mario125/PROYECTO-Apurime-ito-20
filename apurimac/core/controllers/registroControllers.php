<?php


if($_SESSION['cargo']=='1'){

    if ($_POST) {

	require('core/models/class.Acceso.php');
	$acceso = new Acceso();
	$acceso->Registrar();
	exit;

	# code...
    }else {
	$template = new Smarty();
	$template->display('public/registro.tpl');
	# code...
    }


}else{

    header('location:?view=index');

}




 ?>
