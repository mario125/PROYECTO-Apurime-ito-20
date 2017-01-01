<?php

$template = new smarty();
if($_SESSION['cargo']=='1'){

    $db = new Conexion();

    $sql = $db->query("SELECT * FROM usuario ORDER BY id ASC");
    while ($x = $db->rrecorrer($sql)) {
      # code...
      $posts[] = array(
        'id' =>$x['id'] ,
        'nombres' =>$x['nombres'] ,
        'apellidos' =>$x['apellidos'] ,
        'sexo' =>$x['sexo'] ,
        'nick' =>$x['nick'] ,
        'cargo' =>$x['cargo']


      );
    }
    $template->assign('posts',$posts);

    $template->display('public/lista.tpl');



}else{

    header('location:?view=index');

}




 ?>
