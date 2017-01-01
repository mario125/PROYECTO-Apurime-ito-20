<?php /* Smarty version 3.1.27, created on 2016-12-26 17:56:43
         compiled from "C:\xampp\htdocs\pueva\avanzado\styles\templates\overall\mostrar.php" */ ?>
<?php
/*%%SmartyHeaderCode:3219758614bcba90376_27062937%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '8a0f6c558cd94af8f1c90c44d67a47e1f6fbf8f6' => 
    array (
      0 => 'C:\\xampp\\htdocs\\pueva\\avanzado\\styles\\templates\\overall\\mostrar.php',
      1 => 1482771390,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3219758614bcba90376_27062937',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58614bcbadd036_01016833',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58614bcbadd036_01016833')) {
function content_58614bcbadd036_01016833 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '3219758614bcba90376_27062937';
echo '<?php

';?>$directorio='styles/galeria/';
$imagenes = glob("galeria/*", GLOB_BRACE);

$i = 0;
foreach($imagenes as $imagen) {
  $contenedor[$i] = $imagen;
  $i++;
};

 $k=0;
 foreach ($imagenes as $imagen) {

   echo '<option value="3" data-icon="'.$contenedor[$k].'" class="circle" id="circle" >'.$contenedor[$k].'</option>';

   $k++;
 }
 <?php echo '?>';

}
}
?>