<?php /* Smarty version 3.1.27, created on 2017-01-02 19:59:19
         compiled from "C:\xampp\htdocs\apurimac\styles\templates\overall\footer.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:21512586aa307bc8441_52390566%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '01e7822060453d296ed166999c14eb28fbab2433' => 
    array (
      0 => 'C:\\xampp\\htdocs\\apurimac\\styles\\templates\\overall\\footer.tpl',
      1 => 1483383542,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '21512586aa307bc8441_52390566',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_586aa307bcd591_60427031',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_586aa307bcd591_60427031')) {
function content_586aa307bcd591_60427031 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '21512586aa307bc8441_52390566';
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