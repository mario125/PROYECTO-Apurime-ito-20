{include 'overall/header.tpl'}

  <body>

  {include 'overall/nav.tpl'}
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
        {foreach from=$posts item=tp}
        <tr>
          <td>{$tp.id}</td>
          <td>{$tp.nombres}</td>
          <td>{$tp.apellidos}</td>
          <td>{$tp.sexo}</td>
          <td>{$tp.nick}</td>
          {if $tp.cargo=="1"}
          <td>ADMIN</td>
          {else}
          <td>USUARIO</td>

          {/if}
          <td><a href="#!" class="btn waves-effect cyan">PERFIL</a></td>
          
        </tr>
        {/foreach}

      </tbody>
    </table>



  {include 'overall/footer.tpl'}
  </body>
</html>
