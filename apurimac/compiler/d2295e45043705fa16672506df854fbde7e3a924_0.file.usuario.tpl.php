<?php /* Smarty version 3.1.27, created on 2016-12-28 09:27:40
         compiled from "C:\xampp\htdocs\pueva\avanzado\styles\templates\public\usuario.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:47035863777c926506_25599337%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd2295e45043705fa16672506df854fbde7e3a924' => 
    array (
      0 => 'C:\\xampp\\htdocs\\pueva\\avanzado\\styles\\templates\\public\\usuario.tpl',
      1 => 1482913656,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '47035863777c926506_25599337',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5863777c983bc8_86339817',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5863777c983bc8_86339817')) {
function content_5863777c983bc8_86339817 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '47035863777c926506_25599337';
echo $_smarty_tpl->getSubTemplate ('overall/header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <body>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/nav.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

  <center>
    <div class="juego" id="bloque_juego" style="margin-top:0.5em;">

    </div>
  </center>


<?php echo '<script'; ?>
 src="styles/jsgame/phaser.js"     type="text/javascript"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="styles/jsgame/Menu.js"     type="text/javascript"><?php echo '</script'; ?>
>
 <?php echo '<script'; ?>
 src="styles/jsgame/principal.js"     type="text/javascript"><?php echo '</script'; ?>
>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

  </body>
</html>
<?php }
}
?>