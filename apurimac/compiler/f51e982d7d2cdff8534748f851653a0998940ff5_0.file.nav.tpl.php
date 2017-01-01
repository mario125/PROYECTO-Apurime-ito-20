<?php /* Smarty version 3.1.27, created on 2016-12-28 08:47:13
         compiled from "C:\xampp\htdocs\pueva\avanzado\styles\templates\overall\nav.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1027358636e01827d64_79772116%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f51e982d7d2cdff8534748f851653a0998940ff5' => 
    array (
      0 => 'C:\\xampp\\htdocs\\pueva\\avanzado\\styles\\templates\\overall\\nav.tpl',
      1 => 1482911230,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1027358636e01827d64_79772116',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_58636e018a9788_13788843',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_58636e018a9788_13788843')) {
function content_58636e018a9788_13788843 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1027358636e01827d64_79772116';
?>

<div class="navbar-fixed ">
  <nav class="">
    <div class="nav-wrapper ">
      <a href="#!" class="brand-logo letra white-text">Logo</a>
     <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons letra white-text">menu</i></a>
      <ul class="right hide-on-med-and-down letra ">




         <?php if (isset($_SESSION['cargo'])) {?>
         <?php if ($_SESSION['cargo'] == '1') {?>
         <li><a href="?view=registro">REGISTRAR USUARIO</a></li>
         <li><a href="?view=lista">VER USUARIO</a></li>


         <?php } else { ?>
         <li><a href="#">PERFIL</a></li>
        <li><a href="#">JUGAR</a></li>

         <?php }?>

        <li><a class="dropdown-button white-text" href="#!" data-activates="dropdown1"><?php echo $_SESSION['nombres'];?>
  <?php echo $_SESSION['apellidos'];?>
<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><a href="sass.html"><?php echo $_SESSION['cargo'];?>
</a></li>
         <?php } else { ?>
       <li><a class=" white-text"href="?view=login"><i class="material-icons right">person_pin</i>login</a></li>

       <?php }?>

      </ul>

      <ul id="dropdown1" class="dropdown-content">
         <li><a href="?view=logout">salir</a></li>
         <li><a href="#!">perfil</a></li>
         <li class="divider"></li>
         <li><a href="#!">cuenta</a></li>
      </ul>
<!-- responsi -->



    </div>
  </nav>
</div>


<ul id="slide-out" class="side-nav cyan">

    <?php if (isset($_SESSION['cargo'])) {?>

      <li>
           <div class="userView">

              <center><a href="#"><img class="circle" src="styles/galeria/user.png"></a></center>
              <li><a class="dropdown-button white-text" href="#!" data-activates="dropdown2"><?php echo $_SESSION['nombres'];?>
 <i class="material-icons right">arrow_drop_down</i></a></li>
              <a href="#"><span class="white-text email"><?php echo $_SESSION['apellidos'];?>
</span></a>
           </div>
    </li>
    <?php if ($_SESSION['cargo'] == '1') {?>

    <li><a href="?view=registro" class="white-text waves-effect">REGISTRAR USUARIO</a></li>
    <li><a href="?view=lista" class="white-text waves-effect">VER USUARIO</a></li>


    <?php } else { ?>
    <li><a href="#">PERFIL</a></li>
    <li><a href="#">JUGAR</a></li>
    <?php }?>


    <?php } else { ?>
    <li><a class=" white-text"href="?view=login"><i class="material-icons right waves-effect">person_pin</i>login</a></li>




  <?php }?>






<ul id="dropdown2" class="dropdown-content">
   <li><a href="?view=logout">salir</a></li>
   <li><a href="#!">perfil</a></li>
   <li class="divider"></li>
   <li><a href="#!">cuenta</a></li>
</ul>

</ul>
<?php }
}
?>