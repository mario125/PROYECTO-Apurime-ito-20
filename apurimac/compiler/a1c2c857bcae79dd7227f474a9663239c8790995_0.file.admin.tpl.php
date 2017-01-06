<?php /* Smarty version 3.1.27, created on 2017-01-03 22:18:47
         compiled from "C:\xampp\htdocs\apurimac\styles\templates\public\admin.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:14597586c153703d041_04059105%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a1c2c857bcae79dd7227f474a9663239c8790995' => 
    array (
      0 => 'C:\\xampp\\htdocs\\apurimac\\styles\\templates\\public\\admin.tpl',
      1 => 1483478319,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '14597586c153703d041_04059105',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_586c153708f8b5_41349840',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_586c153708f8b5_41349840')) {
function content_586c153708f8b5_41349840 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '14597586c153703d041_04059105';
echo $_smarty_tpl->getSubTemplate ('overall/header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <body>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/nav.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

    <div class="container" style="margin-top: 100px;">
      <div class="jumbotron">
        <h1>Bienvenido admin</h1>
        




      </div>
    </div>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

  </body>
</html>
<?php }
}
?>