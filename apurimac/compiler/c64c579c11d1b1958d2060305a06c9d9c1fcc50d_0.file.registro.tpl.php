<?php /* Smarty version 3.1.27, created on 2016-12-20 08:58:19
         compiled from "C:\xampp\htdocs\avanzado\styles\templates\public\registro.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:247255858e49be62ac1_86719992%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c64c579c11d1b1958d2060305a06c9d9c1fcc50d' => 
    array (
      0 => 'C:\\xampp\\htdocs\\avanzado\\styles\\templates\\public\\registro.tpl',
      1 => 1482218988,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '247255858e49be62ac1_86719992',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5858e49bed9e76_86360410',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5858e49bed9e76_86360410')) {
function content_5858e49bed9e76_86360410 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '247255858e49be62ac1_86719992';
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
    <h2 class="form-signin-heading">Registrarme</h2>
    <label for="inputEmail" class="sr-only">usuario</label>
    <input type="text" id="user" class="form-control" placeholder="Email " required autofocus>
    <label for="inputPassword" class="sr-only">contraseña</label>
    <input type="password" id="pass" class="form-control" placeholder="Password" required>
    <label for="inputPassword" class="sr-only">email</label>
    <input type="password" id="email" class="form-control" placeholder="Password" required>
   
    <button class="btn btn-lg btn-primary btn-block"id="send_request" type="submit">regis</button>
  </div>

</center>



    </div>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <?php echo '<script'; ?>
>
  window.onload=function(){
    document.getElementById('send_request').onclick=function(){
      var connect,user,pass,email,form,result;
        user=document.getElementById('user').value;
        pass=document.getElementById('pass').value;
        email=document.getElementById('email').value;
        
        form='user='+user+'&pass='+pass+'&email='+email;
         

        connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');
        
        
        if(user!=''&&pass!=''&&email!='')
        {
            connect.onreadystatechange =function(){
            if(connect.readyState==4&&connect.status==200){
                //
                //
                var frase = connect.responseText;
                frase = frase.replace("<","");
                frase = frase.replace(">","");
                frase = frase.replace("script","");
                frase = frase.replace("type","");
                frase = frase.replace("=","");
                frase = frase.replace("text","");
                frase = frase.replace("alert","");
                frase = frase.replace("/script","");
                frase = frase.replace("<>","");
                frase = frase.replace("javascript","");
                frase = frase.replace("login","");
                frase = frase.replace("/","");
                frase = frase.replace("(","");
                frase = frase.replace(")","");
                frase = frase.replace('"',"");
                frase = frase.replace(';',"");
                frase = frase.replace('""',"");
                frase = frase.replace('"',"");
                frase = frase.replace('"',"");
                frase = frase.replace("''","");
                var respuesta =parseInt(frase);
                

                alert(respuesta);
                if(respuesta ==1){
                   
                    //conecatado con exito
                    //redireccione
            result='<div class="alert alert-dismissible alert-success">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+=' <strong>REGISTRO COMPLETADO...</strong> SOLO un poco mas.';
            result+='</div>';
            location.href= '?view=login';
           // window.location='?view=login';        
            document.getElementById('_AJAX_').innerHTML=result;
              
                    
                }else if(respuesta ==2){
                   //    error
            result='<div class="alert alert-dismissible alert-danger">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+=' <strong>ERROR...</strong> El usuario ya existe.';
            result+='</div>';
            document.getElementById('_AJAX_').innerHTML=result;
              
                    
                    
                }elseif(respuesta ==3){
                    
            result='<div class="alert alert-dismissible alert-danger">';
            result+='<button type="button" class="close" data-dismiss="alert">&times;</button>';
            result+=' <strong>ERROR...</strong> El email ya existe.';
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
        
        connect.open('POST','?view=reg',true);
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