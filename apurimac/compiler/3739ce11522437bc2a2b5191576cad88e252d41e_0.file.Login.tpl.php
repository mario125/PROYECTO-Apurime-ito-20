<?php /* Smarty version 3.1.27, created on 2016-12-18 18:12:11
         compiled from "C:\xampp\htdocs\PHP Avanzado\styles\templates\public\Login.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:298785856c36bdd78b0_93576572%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3739ce11522437bc2a2b5191576cad88e252d41e' => 
    array (
      0 => 'C:\\xampp\\htdocs\\PHP Avanzado\\styles\\templates\\public\\Login.tpl',
      1 => 1482081124,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '298785856c36bdd78b0_93576572',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5856c36be48650_95517399',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5856c36be48650_95517399')) {
function content_5856c36be48650_95517399 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '298785856c36bdd78b0_93576572';
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
              alert('por aki 1');
             form='user='+user+'&pass='+pass+'&session='+session;
             connect=window.XMLHttpRequest ? new XMLHttpRequest(): new ActiveXObject('Microsoft.XMLHTTP') ;
             alert("por aki 2");


             connect.onreadystatechange =function(){
                 alert("por aki 3");

        if (connect.readyState==4 && connect.status==200)
        {
            var je =parseInt( connect.resposeText);
             alert("por aki 4"+je);
               if (parseInt( connect.resposeText)==1) {
              alert("por aki 5");
            result='<div class="alert alert-dismissible alert-success">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+=' <strong>CONECTANDO..</strong>Bienvenido, solo un poco más.';
            result+='</div>';
            location.href='?view=index';
            document.getElementById('_AJAX_').innerHTML=result;


          }
               else {
            result='<div class="alert alert-dismissible alert-danger">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+=' <strong>ERROR</strong> Credenciales incorrectos.';
            result+='</div>';
            document.getElementById('_AJAX_').innerHTML=result;


          }

        }
        else if (connect.readyState!=4)
        {


            result='<div class="alert alert-dismissible alert-warning">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+='Procesando...';
            result+='</div>';
            document.getElementById('_AJAX_').innerHTML=result;


        }
      }
      alert(" enviando");
      connect.open('POST','?view=login',true);

      connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      connect.send(form);


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