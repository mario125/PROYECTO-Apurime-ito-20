<?php /* Smarty version 3.1.27, created on 2016-12-28 09:36:38
         compiled from "C:\xampp\htdocs\apurimac\styles\templates\public\admin.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2837058637996d165b3_82418757%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a1c2c857bcae79dd7227f474a9663239c8790995' => 
    array (
      0 => 'C:\\xampp\\htdocs\\apurimac\\styles\\templates\\public\\admin.tpl',
      1 => 1482801491,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2837058637996d165b3_82418757',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58637996d6d589_96820104',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58637996d6d589_96820104')) {
function content_58637996d6d589_96820104 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2837058637996d165b3_82418757';
echo $_smarty_tpl->getSubTemplate ('overall/header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <body>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/nav.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

    <div class="container" style="margin-top: 100px;">
      <div class="jumbotron">
        <h1>Bienvenido admin</h1>
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