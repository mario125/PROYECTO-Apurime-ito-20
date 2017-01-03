<?php /* Smarty version 3.1.27, created on 2017-01-03 16:37:13
         compiled from "C:\xampp\htdocs\apurimac\styles\templates\public\usuario.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:32019586bc5296f81c0_44094039%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9e715b4fa8634fe9cf442dafd6648c6d64f8f5f3' => 
    array (
      0 => 'C:\\xampp\\htdocs\\apurimac\\styles\\templates\\public\\usuario.tpl',
      1 => 1483457819,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '32019586bc5296f81c0_44094039',
  'variables' => 
  array (
    'Contacts' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_586bc52978db15_43380916',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_586bc52978db15_43380916')) {
function content_586bc52978db15_43380916 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '32019586bc5296f81c0_44094039';
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
 type='text/javascript' id='identificador_js' src='styles/jsgame/principal.js?nivel=<?php echo $_smarty_tpl->tpl_vars['Contacts']->value['nivel'];?>
&jugador=<?php echo $_smarty_tpl->tpl_vars['Contacts']->value['jugador'];?>
&sNivel=<?php echo $_smarty_tpl->tpl_vars['Contacts']->value['sNivel'];?>
? ' ><?php echo '</script'; ?>
>



   <?php echo '<script'; ?>
 src="styles/jsgame/phaser.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/menu.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/nivel.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/juego1_1.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/juego1_2.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/juego1_3.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/juego1_4.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/juego1_5.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/juego1_6.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/juego1_7.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/Juego1_8.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/Actualis.js"     type="text/javascript"><?php echo '</script'; ?>
>






   <!--<?php echo '<script'; ?>
 src="styles/jsgame/juego1_1.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/juego1_2.js"     type="text/javascript"><?php echo '</script'; ?>
>




   <?php echo '<script'; ?>
 src="styles/jsgame/juego.js"     type="text/javascript"><?php echo '</script'; ?>
>
   <?php echo '<script'; ?>
 src="styles/jsgame/game_over.js"     type="text/javascript"><?php echo '</script'; ?>
>-->
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