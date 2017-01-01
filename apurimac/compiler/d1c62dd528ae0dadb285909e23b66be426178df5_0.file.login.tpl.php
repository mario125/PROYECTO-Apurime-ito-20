<?php /* Smarty version 3.1.27, created on 2016-12-24 23:23:31
         compiled from "C:\xampp\htdocs\avanzado\styles\templates\public\login.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:3763585ef563894a89_05698989%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'd1c62dd528ae0dadb285909e23b66be426178df5' => 
    array (
      0 => 'C:\\xampp\\htdocs\\avanzado\\styles\\templates\\public\\login.tpl',
      1 => 1482618207,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3763585ef563894a89_05698989',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_585ef563c5d746_19937225',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_585ef563c5d746_19937225')) {
function content_585ef563c5d746_19937225 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '3763585ef563894a89_05698989';
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
        form='user='+user+'&pass='+pass+'&session='+session;


        connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');


        if(user!=''&&pass!='')
        {
            connect.onreadystatechange =function(){
            if(connect.readyState==4&&connect.status==200){
                //
                //
                alert(connect.responseText);
                if(parseInt(connect.responseText) ==1){

                    //conecatado con exito
                    //redireccione
            result='<div class="alert alert-dismissible alert-success">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+=' <strong>CONECTANDO...</strong> un poco mas.';
            result+='</div>';
            location.href= '?view=login';
           // window.location='?view=login';
            document.getElementById('_AJAX_').innerHTML=result;


                }else{
                   //    error
            result='<div class="alert alert-dismissible alert-danger">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+=' <strong>ERROR...</strong> Credenciales incorrectas.';
            result+='</div>';
            document.getElementById('_AJAX_').innerHTML=result;



                }

            }else if(connect.readyState!=4){
                //procesando....

            result='<div class="alert alert-dismissible alert-warning">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+=' <strong>PROCESANDO...</strong>';
            result+='</div>';
            document.getElementById('_AJAX_').innerHTML=result;


            }
        }

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