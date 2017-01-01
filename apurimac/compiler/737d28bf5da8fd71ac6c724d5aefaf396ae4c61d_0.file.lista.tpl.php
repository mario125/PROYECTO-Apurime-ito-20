<?php /* Smarty version 3.1.27, created on 2016-12-27 21:07:25
         compiled from "C:\xampp\htdocs\pueva\avanzado\styles\templates\public\lista.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:100865862c9fd32a6c4_06784492%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '737d28bf5da8fd71ac6c724d5aefaf396ae4c61d' => 
    array (
      0 => 'C:\\xampp\\htdocs\\pueva\\avanzado\\styles\\templates\\public\\lista.tpl',
      1 => 1482869243,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '100865862c9fd32a6c4_06784492',
  'variables' => 
  array (
    'posts' => 0,
    'tp' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5862c9fd3d1b37_45465122',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5862c9fd3d1b37_45465122')) {
function content_5862c9fd3d1b37_45465122 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '100865862c9fd32a6c4_06784492';
echo $_smarty_tpl->getSubTemplate ('overall/header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <body>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/nav.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

  <table class="bordered centered">
      <thead>
        <tr>
            <th data-field="id">ID</th>
            <th data-field="name">NOMBRES</th>
            <th data-field="price">APELLIDOS</th>
            <th data-field="edid">SEXO</th>
            <th data-field="edid">NICK</th>
            <th data-field="edid">CARGO</th>

        </tr>
      </thead>

      <tbody>
        <?php
$_from = $_smarty_tpl->tpl_vars['posts']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['tp'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['tp']->_loop = false;
foreach ($_from as $_smarty_tpl->tpl_vars['tp']->value) {
$_smarty_tpl->tpl_vars['tp']->_loop = true;
$foreach_tp_Sav = $_smarty_tpl->tpl_vars['tp'];
?>
        <tr>
          <td><?php echo $_smarty_tpl->tpl_vars['tp']->value['id'];?>
</td>
          <td><?php echo $_smarty_tpl->tpl_vars['tp']->value['nombres'];?>
</td>
          <td><?php echo $_smarty_tpl->tpl_vars['tp']->value['apellidos'];?>
</td>
          <td><?php echo $_smarty_tpl->tpl_vars['tp']->value['sexo'];?>
</td>
          <td><?php echo $_smarty_tpl->tpl_vars['tp']->value['nick'];?>
</td>
          <?php if ($_smarty_tpl->tpl_vars['tp']->value['cargo'] == "1") {?>
          <td>ADMIN</td>
          <?php } else { ?>
          <td>USUARIO</td>

          <?php }?>
          <td><a href="#!" class="btn waves-effect cyan">PERFIL</a></td>
          
        </tr>
        <?php
$_smarty_tpl->tpl_vars['tp'] = $foreach_tp_Sav;
}
?>

      </tbody>
    </table>



  <?php echo $_smarty_tpl->getSubTemplate ('overall/footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

  </body>
</html>
<?php }
}
?>