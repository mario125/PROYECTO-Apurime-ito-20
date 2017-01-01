<?php /* Smarty version 3.1.27, created on 2016-12-17 07:24:31
         compiled from "C:\xampp\htdocs\PHP Avanzado\styles\templates\home\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:248205854da1fab45e5_75380620%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd2b6d78275f3f2aba33700c89ad73f880fc69424' => 
    array (
      0 => 'C:\\xampp\\htdocs\\PHP Avanzado\\styles\\templates\\home\\index.tpl',
      1 => 1481927766,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '248205854da1fab45e5_75380620',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5854da1fdfec39_93166658',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5854da1fdfec39_93166658')) {
function content_5854da1fdfec39_93166658 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '248205854da1fab45e5_75380620';
echo $_smarty_tpl->getSubTemplate ('overall/header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <body>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/nav.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

<div class="container" style="margin-top: 100px;">
      <div class="jumbotron">
        <h1>Bienvenido al curso!</h1>
        <p class="lead">Plantilla de ejemplo para iniciar el curso de php avanzado.</p>
        <p><a class="btn btn-lg btn-success" href="http://www.prinick.com" role="button">Comenzar!</a></p>



      </div>
    </div>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

  </body>
</html>
<?php }
}
?>