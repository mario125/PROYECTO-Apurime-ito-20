<?php /* Smarty version 3.1.27, created on 2016-12-28 09:35:58
         compiled from "C:\xampp\htdocs\apurimac\styles\templates\overall\footer.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:95655863796e018af3_41183000%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '01e7822060453d296ed166999c14eb28fbab2433' => 
    array (
      0 => 'C:\\xampp\\htdocs\\apurimac\\styles\\templates\\overall\\footer.tpl',
      1 => 1482743342,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '95655863796e018af3_41183000',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5863796e01bfa0_82904581',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5863796e01bfa0_82904581')) {
function content_5863796e01bfa0_82904581 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '95655863796e018af3_41183000';
?>
<?php echo '<script'; ?>
 >
  window.onload=function(){
    $(".button-collapse").sideNav();
}

  <?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 type="text/javascript" src="styles/js/jquery-2.1.4.min.js"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 type="text/javascript" src="styles/js/materialize.min.js."><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 type="text/javascript" src="styles/js/init.js"><?php echo '</script'; ?>
>
<?php }
}
?>