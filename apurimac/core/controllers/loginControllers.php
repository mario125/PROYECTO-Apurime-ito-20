<?php


if(!isset($_SESSION['id'],$_SESSION['nombres'],$_SESSION['apellidos'],$_SESSION['sexo'],$_SESSION['nick'],$_SESSION['password'],$_SESSION['cargo'])){

    if ($_POST) {

	require('core/models/class.Acceso.php');
	$acceso = new Acceso();
	$acceso->Login();
	exit;

	# code...
    }else {
	$template = new Smarty();
	$template->display('public/login.tpl');
	# code...
    }


}else{

    header('location:?view=index');

}




 ?>
