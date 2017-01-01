<?php /* Smarty version 3.1.27, created on 2016-12-27 02:43:09
         compiled from "C:\xampp\htdocs\pueva\avanzado\styles\templates\public\login.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:128425861c72d411db1_36449078%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '454f44567ae8e0708913a89c182d78ad7eaef4df' => 
    array (
      0 => 'C:\\xampp\\htdocs\\pueva\\avanzado\\styles\\templates\\public\\login.tpl',
      1 => 1482802091,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '128425861c72d411db1_36449078',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5861c72d47d7d7_76909983',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5861c72d47d7d7_76909983')) {
function content_5861c72d47d7d7_76909983 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '128425861c72d411db1_36449078';
echo $_smarty_tpl->getSubTemplate ('overall/header.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <body>

  <?php echo $_smarty_tpl->getSubTemplate ('overall/nav.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>

  <div class="container">
<div class="row">
   <div class="col s12 col m8 push-m2  col l6 push-l3">
     <div class="card-panel white z-depth-5">
            <img id ="user-img" src="styles/images/user.png">
            <div id="_AJAX_">

            </div>



        <div class="row">
          <div class="col s12">

              <div class="row">
                <div class="input-field col s12">
                  <input id="usuario" type="text" class="validate" length="10" required>
                  <label for="first-name">USUARIO</label>
                </div>
                </div>

            <div class="row">
               <div class="input-field col s12 " >
                <select class="icons" id="password">
                <option value="0" disabled selected></option>
                <option value="1" data-icon="../avanzado/styles/galeria/f.png" class="circle">*****************</option>
                <option value="2" data-icon="../avanzado/styles/galeria/m.png" class="circle">*****************</option>
                <option value="3" data-icon="../avanzado/styles/galeria/m2.png" class="circle">*****************</option>
                <option value="4" data-icon="../avanzado/styles/galeria/f2.png" class="circle">*****************</option>
                </select>
                <label> CONTRA</label>
               </div>

              </div>
              <div class="row">
                <p>
                    <input type="checkbox" class="filled-in" id="filled-in-box"  />
                    <label for="filled-in-box">Guardar cuenta</label>
                </p>

              </div>


            <div class="row">
              <div class="col s12">

                    <button id="submitBtn" class="btn waves-effect waves-light" type="submit" name="action">login
           </div>
          </div>

        </div>

        </div>

     </div>
   </div>
</div>
</div>





  <?php echo $_smarty_tpl->getSubTemplate ('overall/footer.tpl', $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>


  <?php echo '<script'; ?>
>
  window.onload=function(){
    document.getElementById('submitBtn').onclick=function(){
      var connect,user,pass,session,form,result;
        user=document.getElementById('usuario').value;
        pass=document.getElementById('password').value;
        session=document.getElementById('filled-in-box').checked?true:false;
        form='user='+user+'&pass='+pass+'&session='+session;


        connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');
       alert(user+pass+session);

        if(user!=''&&pass!='')
        {
            connect.onreadystatechange =function(){
            if(connect.readyState==4&&connect.status==200){
                alert(connect.responseText);
                if(parseInt(connect.responseText) ==1){

                    //conecatado con exito
                    //redireccione
                    result='<div class="card-panel blue white-text">CONECTANDO..  !! </div>';
                    location.href= '?view=admin';
                    document.getElementById('_AJAX_').innerHTML=result;


                }else if (parseInt(connect.responseText)==2) {
                  result='<div class="card-panel blue white-text">CONECTANDO..  !! </div>';
                  location.href= '?view=usuario';
                  document.getElementById('_AJAX_').innerHTML=result;

                }
                else{
                   //    error
                   result='<div class="card-panel red white-text">CREDENCIALE incorectas ..!! </div>';
                   document.getElementById('_AJAX_').innerHTML=result;
                  }

            }else if(connect.readyState!=4){
                //procesando....
              result='<div class="card-panel amber white-text">PROCESANDO..  !! </div>';
               document.getElementById('_AJAX_').innerHTML=result;
              }
        }

        connect.open('POST','?view=login',true);
        connect.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        connect.send(form);
        }
        else
        {
          result='<div class="card-panel red white-text">EROR.. Faltan datos !! </div>';
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