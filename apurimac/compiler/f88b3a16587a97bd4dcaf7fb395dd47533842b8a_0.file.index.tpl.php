<?php /* Smarty version 3.1.27, created on 2016-12-20 08:03:51
         compiled from "C:\xampp\htdocs\avanzado\styles\templates\home\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:183585858d7d75524c1_48747831%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f88b3a16587a97bd4dcaf7fb395dd47533842b8a' => 
    array (
      0 => 'C:\\xampp\\htdocs\\avanzado\\styles\\templates\\home\\index.tpl',
      1 => 1481927766,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '183585858d7d75524c1_48747831',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5858d7d75a0ce5_17229027',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5858d7d75a0ce5_17229027')) {
function content_5858d7d75a0ce5_17229027 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '183585858d7d75524c1_48747831';
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