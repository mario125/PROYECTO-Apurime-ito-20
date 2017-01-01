<?php /* Smarty version 3.1.27, created on 2016-12-27 02:20:13
         compiled from "C:\xampp\htdocs\pueva\avanzado\styles\templates\public\admin.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:43005861c1cd66c5d7_34552638%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '256dbfca7d0c35ae9afe0a0ecd5117bcb714e94f' => 
    array (
      0 => 'C:\\xampp\\htdocs\\pueva\\avanzado\\styles\\templates\\public\\admin.tpl',
      1 => 1482801491,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '43005861c1cd66c5d7_34552638',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5861c1cd7005e3_46408226',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5861c1cd7005e3_46408226')) {
function content_5861c1cd7005e3_46408226 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '43005861c1cd66c5d7_34552638';
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