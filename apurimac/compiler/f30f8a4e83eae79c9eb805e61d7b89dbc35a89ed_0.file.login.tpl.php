<?php /* Smarty version 3.1.27, created on 2016-12-18 21:50:48
         compiled from "C:\xampp\htdocs\PHP Avanzado\styles\templates\public\login.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:196445856f6a89a5ab2_40077013%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f30f8a4e83eae79c9eb805e61d7b89dbc35a89ed' => 
    array (
      0 => 'C:\\xampp\\htdocs\\PHP Avanzado\\styles\\templates\\public\\login.tpl',
      1 => 1482094245,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '196445856f6a89a5ab2_40077013',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5856f6a89ff2e1_66394823',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5856f6a89ff2e1_66394823')) {
function content_5856f6a89ff2e1_66394823 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '196445856f6a89a5ab2_40077013';
echo $_smarty_tpl->getSubTemplate ('overall/header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <body>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/nav.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

<div class="container" style="margin-top: 100px;">

<center>
    <div id="_AJAX_" style="width:500px">




    </div>
      <div class="form-signin" style="width:500px">
    <h2 class="form-signin-heading">inicia session</h2>
    <label for="inputEmail" class="sr-only">usuario</label>
    <input type="text" id="user" class="form-control" placeholder="Email " required autofocus>
    <label for="inputPassword" class="sr-only">contraseña</label>
    <input type="password" id="pass" class="form-control" placeholder="Password" required>
    <div class="checkbox">
      <label>
        <input type="checkbox" id="session" value="1"> Remember me
      </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block"id="send_request" type="submit">Sign in</button>
  </div>

</center>



    </div>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <?php echo '<script'; ?>
>
  window.onload=function(){
    document.getElementById('send_request').onclick=function(){
      var connect,user,pass,session,form,result;
        user=document.getElementById('user').value;
        pass=document.getElementById('pass').value;
        session=document.getElementById('session').checked?true:false;


        alert(user +pass+session+'por aki ');
        if(user!=''&&pass!='')
        {
          $.ajax({
             url:'../../core/controllers/loginControllers.php',
             type:'POST',
             data:'email='+user+'&password='+pass
         }).done(function(resp){
             alert(resp);
         });


        }
        else
        {
            result='<div class="alert alert-dismissible alert-danger">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+=' <strong>ERROR</strong> faltan datos.';
            result+='</div>';
            document.getElementById('_AJAX_').innerHTML=result;

        }


    }
  }

  <?php echo '</script'; ?>
>

</body>
  </html>
<?php }
}
?>