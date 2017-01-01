<?php




unset($_SESSION['id'],$_SESSION['nombres'],$_SESSION['apellidos'],$_SESSION['sexo'],$_SESSION['nick'],$_SESSION['password'],$_SESSION['cargo']);

session_destroy();
header('location:?view=index');
?>
