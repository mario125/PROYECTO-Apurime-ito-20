
<div class="navbar-fixed ">
  <nav class="blue">
    <div class="nav-wrapper ">
      <a href="#!" class="brand-logo letra white-text">Logo</a>
     <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons letra white-text">menu</i></a>
      <ul class="right hide-on-med-and-down letra ">




         {if isset($smarty.session.cargo)}
         {if  $smarty.session.cargo =='1'}
         <li><a href="?view=registro">REGISTRAR USUARIO</a></li>
         <li><a href="?view=lista">VER USUARIO</a></li>


         {else}
         <li><a href="#">PERFIL</a></li>
        <li><a href="#">JUGAR</a></li>

         {/if}

        <li><a class="dropdown-button white-text" href="#!" data-activates="dropdown1">{$smarty.session.nombres}  {$smarty.session.apellidos}<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><a href="sass.html">{$smarty.session.cargo}</a></li>
         {else}
       <li><a class=" white-text"href="?view=login"><i class="material-icons right">person_pin</i>login</a></li>

       {/if}

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

    {if isset($smarty.session.cargo)}

      <li>
           <div class="userView">

              <center><a href="#"><img class="circle" src="styles/galeria/user.png"></a></center>
              <li><a class="dropdown-button white-text" href="#!" data-activates="dropdown2">{$smarty.session.nombres} <i class="material-icons right">arrow_drop_down</i></a></li>
              <a href="#"><span class="white-text email">{$smarty.session.apellidos}</span></a>
           </div>
    </li>
    {if  $smarty.session.cargo =='1'}

    <li><a href="?view=registro" class="white-text waves-effect">REGISTRAR USUARIO</a></li>
    <li><a href="?view=lista" class="white-text waves-effect">VER USUARIO</a></li>


    {else}
    <li><a href="#">PERFIL</a></li>
    <li><a href="#">JUGAR</a></li>
    {/if}


    {else}
    <li><a class=" white-text"href="?view=login"><i class="material-icons right waves-effect">person_pin</i>login</a></li>




  {/if}






<ul id="dropdown2" class="dropdown-content">
   <li><a href="?view=logout">salir</a></li>
   <li><a href="#!">perfil</a></li>
   <li class="divider"></li>
   <li><a href="#!">cuenta</a></li>
</ul>

</ul>
