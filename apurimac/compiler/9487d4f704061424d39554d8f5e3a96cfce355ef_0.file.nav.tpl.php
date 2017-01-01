<?php /* Smarty version 3.1.27, created on 2016-12-24 23:27:14
         compiled from "C:\xampp\htdocs\avanzado\styles\templates\overall\nav.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:25035585ef64266c703_59487590%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9487d4f704061424d39554d8f5e3a96cfce355ef' => 
    array (
      0 => 'C:\\xampp\\htdocs\\avanzado\\styles\\templates\\overall\\nav.tpl',
      1 => 1482618359,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '25035585ef64266c703_59487590',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_585ef642872af4_88664438',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_585ef642872af4_88664438')) {
function content_585ef642872af4_88664438 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '25035585ef64266c703_59487590';
?>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <?php if (isset($_SESSION['nombres'])) {?>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><?php echo $_SESSION['nombres'];?>
 <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="?view=logout">Salir</a></li>
            <li><a href="?view=perfil">Perfil</a></li>
            <li><a href="?view=cuenta">Cuenta</a></li>

          </ul>
        </li>
        <?php } else { ?>
        <li><a href="?view=login">login</a></li>
        <li><a href="?view=reg">Registrarme</a></li>
        <?php }?>
      </ul>
    </div>
  </div>
</nav>
<?php }
}
?>