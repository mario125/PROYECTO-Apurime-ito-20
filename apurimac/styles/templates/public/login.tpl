{include 'overall/header.tpl'}

  <body>

  {include 'overall/nav.tpl'}
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
                  <input id="usuario" type="text" class="validate " length="10" required>
                  <label  for="first-name">USUARIO</label>
                </div>
              </div>

            <div class="row">
               <div class="input-field col s12 " >
                <select class="icons" id="password">
                <option value="0" disabled selected></option>
                <option value="1" data-icon="styles/galeria/f.png" class="circle">*****************</option>
                <option value="2" data-icon="styles/galeria/m.png" class="circle">*****************</option>
                <option value="3" data-icon="styles/galeria/m2.png" class="circle">*****************</option>
                <option value="4" data-icon="styles/galeria/f2.png" class="circle">*****************</option>
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

                    <button id="submitBtn"style="background:orange" class="btn waves-effect orange waves-light" type="submit" name="action">login
           </div>
          </div>

        </div>

        </div>

     </div>
   </div>
</div>
</div>





  {include 'overall/footer.tpl'}

  <script>
  window.onload=function(){
    document.getElementById('submitBtn').onclick=function(){
      var connect,user,pass,session,form,result;
        user=document.getElementById('usuario').value;
        pass=document.getElementById('password').value;
        session=document.getElementById('filled-in-box').checked?true:false;
        form='user='+user+'&pass='+pass+'&session='+session;


        connect = window.XMLHttpRequest ? new XMLHttpRequest() :  ActiveXObject('Microsoft.XMLHTTP');
       

        if(user!=''&&pass!='')
        {
            connect.onreadystatechange =function(){
            if(connect.readyState==4&&connect.status==200){
                
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



  </script>

</body>
  </html>
