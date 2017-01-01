<?php /* Smarty version 3.1.27, created on 2016-12-28 09:35:57
         compiled from "C:\xampp\htdocs\apurimac\styles\templates\home\index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:215745863796dd97081_30904644%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c1cadd7164f8bd8b254567b6e5372fbe95d0a368' => 
    array (
      0 => 'C:\\xampp\\htdocs\\apurimac\\styles\\templates\\home\\index.tpl',
      1 => 1482865101,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '215745863796dd97081_30904644',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5863796ddec4c0_62351189',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5863796ddec4c0_62351189')) {
function content_5863796ddec4c0_62351189 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '215745863796dd97081_30904644';
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