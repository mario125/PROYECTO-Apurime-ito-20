<?php /* Smarty version 3.1.27, created on 2016-12-26 10:09:11
         compiled from "C:\xampp\htdocs\pueva\avanzado\styles\templates\overall\footer.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:253525860de3703fad6_08754447%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '8c1bf603f5e80209aca8deb81cd85809b132cac8' => 
    array (
      0 => 'C:\\xampp\\htdocs\\pueva\\avanzado\\styles\\templates\\overall\\footer.tpl',
      1 => 1482743342,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '253525860de3703fad6_08754447',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5860de370810e2_66115554',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5860de370810e2_66115554')) {
function content_5860de370810e2_66115554 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '253525860de3703fad6_08754447';
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