<?php
session_start();
$view =isset($_GET['view'])?$_GET['view']:'index';


require('core/libs/smarty/Smarty.class.php');


require('core/models/class.Conexion.php');


if (file_exists('core/controllers/'.$view.'Controllers.php')) {
  # code...
  include('core/controllers/'.$view.'Controllers.php');
}
else {
  # code...

  include('core/controllers/errorControllers.php');
}




 ?>
